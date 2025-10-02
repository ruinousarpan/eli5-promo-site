import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { DOMParser, Element } from 'https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function parseListFromHtml(html: string): { slug: string; title: string }[] {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  if (!doc) return [];
  
  const out: { slug: string; title: string }[] = [];
  const links = doc.querySelectorAll('a[href*="/questions/"]');
  
  links.forEach((node) => {
    const el = node as Element;
    const href = el.getAttribute('href') || '';
    const match = href.match(/\/questions\/([^/?#]+)/);
    if (!match) return;
    
    const slug = match[1];
    const title = el.textContent?.trim() || slug.replace(/[-_]/g, ' ');
    out.push({ slug, title });
  });
  
  // Deduplicate
  const seen = new Set<string>();
  return out.filter(item => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });
}

function parseDetailFromHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  if (!doc) return null;
  
  const h1 = doc.querySelector('h1');
  const title = h1?.textContent?.trim() || doc.querySelector('title')?.textContent?.trim() || '';
  
  const metaDesc = doc.querySelector('meta[name="description"]') as Element | null;
  const seoDesc = metaDesc?.getAttribute('content') || '';
  
  let question = '';
  let answer = '';
  
  // Try to find question/answer sections
  const headings = doc.querySelectorAll('h2, h3');
  headings.forEach((node) => {
    const heading = node as Element;
    const label = (heading.textContent || '').toLowerCase();
    const nextP = heading.nextElementSibling;
    const nextText = nextP?.textContent?.trim() || '';
    
    if (label.includes('question') && nextText) question = nextText;
    if (label.includes('answer') && nextText) answer = nextText;
  });
  
  // Fallback: use first paragraphs
  if (!question || !answer) {
    const paragraphs = Array.from(doc.querySelectorAll('article p, main p, .prose p, p'))
      .map(p => p.textContent?.trim())
      .filter(Boolean);
    
    if (!question && paragraphs[0]) question = paragraphs[0];
    if (!answer && paragraphs.length > 1) answer = paragraphs.slice(1).join('\n\n');
  }
  
  const summary = seoDesc || (answer || question || title).slice(0, 160);
  
  return {
    title,
    body_question: question,
    body_answer: answer,
    summary,
    seo_title: title,
    seo_description: seoDesc,
  };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting ELI5 HTML scrape sync...');
    const base = 'https://eli5.space';
    
    // 1. Fetch listing page HTML
    const listUrl = `${base}/questions`;
    console.log('Fetching listing from:', listUrl);
    
    const listResponse = await fetch(listUrl);
    if (!listResponse.ok) {
      throw new Error(`Failed to fetch listing: ${listResponse.status}`);
    }

    const listHtml = await listResponse.text();
    const list = parseListFromHtml(listHtml);
    console.log(`Found ${list.length} question links`);

    let added = 0;
    let updated = 0;
    let skipped = 0;

    // 2. For each slug, fetch detail page and extract content
    for (const item of list) {
      const slug = item.slug;
      if (!slug) {
        skipped++;
        continue;
      }

      try {
        const detailUrl = `${base}/questions/${slug}`;
        console.log(`Fetching detail: ${slug}`);
        
        const detailResponse = await fetch(detailUrl);
        if (!detailResponse.ok) {
          console.error(`Failed to fetch ${slug}: ${detailResponse.status}`);
          skipped++;
          continue;
        }

        const detailHtml = await detailResponse.text();
        const detail = parseDetailFromHtml(detailHtml);
        
        if (!detail?.title) {
          console.error(`Failed to parse ${slug}`);
          skipped++;
          continue;
        }

        const sourceUrl = detailUrl;
        
        // Check if question exists
        const { data: existing } = await supabase
          .from('questions')
          .select('id')
          .eq('slug', slug)
          .maybeSingle();

        const questionData = {
          slug,
          title: detail.seo_title || detail.title,
          body_question: detail.body_question || null,
          body_answer: detail.body_answer || null,
          summary: detail.summary || null,
          seo_title: detail.seo_title || null,
          seo_description: detail.seo_description || null,
          source_url: sourceUrl,
        };

        if (existing) {
          const { error } = await supabase
            .from('questions')
            .update(questionData)
            .eq('slug', slug);

          if (error) {
            console.error(`Error updating ${slug}:`, error);
            skipped++;
          } else {
            updated++;
          }
        } else {
          const { error } = await supabase
            .from('questions')
            .insert(questionData);

          if (error) {
            console.error(`Error inserting ${slug}:`, error);
            skipped++;
          } else {
            added++;
          }
        }

        // Be polite to the origin server
        await sleep(200);
      } catch (error) {
        console.error(`Error processing ${slug}:`, error);
        skipped++;
      }
    }

    console.log(`Sync complete: ${added} added, ${updated} updated, ${skipped} skipped`);

    return new Response(
      JSON.stringify({ 
        success: true,
        added, 
        updated, 
        skipped,
        total: list.length 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Sync error:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
