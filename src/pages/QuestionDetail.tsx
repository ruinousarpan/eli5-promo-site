import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

interface Question {
  id: string;
  slug: string;
  title: string;
  body_question: string | null;
  body_answer: string | null;
  summary: string | null;
  seo_title: string | null;
  seo_description: string | null;
  source_url: string;
  updated_at: string;
}

interface RelatedQuestion {
  id: string;
  slug: string;
  title: string;
}

export default function QuestionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [question, setQuestion] = useState<Question | null>(null);
  const [relatedQuestions, setRelatedQuestions] = useState<RelatedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchQuestion();
    }
  }, [slug]);

  const fetchQuestion = async () => {
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      
      if (!data) {
        setNotFound(true);
        return;
      }

      setQuestion(data);
      fetchRelatedQuestions(data.title);
    } catch (error) {
      console.error("Error fetching question:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedQuestions = async (title: string) => {
    try {
      const keywords = title.toLowerCase().split(" ").filter(w => w.length > 3);
      
      const { data, error } = await supabase
        .from("questions")
        .select("id, slug, title")
        .neq("slug", slug)
        .limit(3);

      if (error) throw error;
      setRelatedQuestions(data || []);
    } catch (error) {
      console.error("Error fetching related questions:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (notFound || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Question Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The question you're looking for doesn't exist.
          </p>
          <Link to="/questions">
            <Button>Browse All Questions</Button>
          </Link>
        </div>
      </div>
    );
  }

  const seoTitle = question.seo_title || question.title;
  const seoDescription = question.seo_description || question.summary || 
    (question.body_answer ? question.body_answer.substring(0, 160) : "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": question.title,
      "text": question.body_question || question.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.body_answer || question.summary || ""
      }
    }
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={`/questions/${question.slug}`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/questions">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Questions
              </Button>
            </Link>

            <article>
              <h1 className="text-4xl font-bold mb-4">{question.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <Badge variant="secondary">ELI5</Badge>
                <a
                  href={question.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1"
                >
                  View on ELI5
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {question.body_question && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Question</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg whitespace-pre-wrap">{question.body_question}</p>
                  </CardContent>
                </Card>
              )}

              {question.body_answer && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl">Answer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="whitespace-pre-wrap">{question.body_answer}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {relatedQuestions.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-4">Related Questions</h2>
                  <div className="space-y-2">
                    {relatedQuestions.map((related) => (
                      <Link
                        key={related.id}
                        to={`/questions/${related.slug}`}
                        className="block p-4 rounded-lg border hover:bg-accent transition-colors"
                      >
                        <p className="font-medium">{related.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </main>
      </div>
    </>
  );
}