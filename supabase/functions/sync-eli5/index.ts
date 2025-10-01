import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ELI5Question {
  slug: string;
  title: string;
  body_question?: string;
  body_answer?: string;
  summary?: string;
  seo_title?: string;
  seo_description?: string;
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

    console.log('Starting ELI5 sync...');
    
    // Fetch questions from ELI5 API
    const listUrl = 'https://eli5.space/api/questions';
    console.log('Fetching from:', listUrl);
    
    const response = await fetch(listUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch from ELI5: ${response.status}`);
    }

    const questions: ELI5Question[] = await response.json();
    console.log(`Found ${questions.length} questions`);

    let added = 0;
    let updated = 0;
    let skipped = 0;

    for (const question of questions) {
      if (!question.slug || !question.title) {
        skipped++;
        continue;
      }

      const sourceUrl = `https://eli5.space/questions/${question.slug}`;
      
      // Check if question exists
      const { data: existing } = await supabase
        .from('questions')
        .select('id')
        .eq('slug', question.slug)
        .maybeSingle();

      const questionData = {
        slug: question.slug,
        title: question.seo_title || question.title,
        body_question: question.body_question || null,
        body_answer: question.body_answer || null,
        summary: question.summary || null,
        seo_title: question.seo_title || null,
        seo_description: question.seo_description || null,
        source_url: sourceUrl,
      };

      if (existing) {
        const { error } = await supabase
          .from('questions')
          .update(questionData)
          .eq('slug', question.slug);

        if (error) {
          console.error(`Error updating ${question.slug}:`, error);
          skipped++;
        } else {
          updated++;
        }
      } else {
        const { error } = await supabase
          .from('questions')
          .insert(questionData);

        if (error) {
          console.error(`Error inserting ${question.slug}:`, error);
          skipped++;
        } else {
          added++;
        }
      }
    }

    console.log(`Sync complete: ${added} added, ${updated} updated, ${skipped} skipped`);

    return new Response(
      JSON.stringify({ 
        success: true,
        added, 
        updated, 
        skipped,
        total: questions.length 
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