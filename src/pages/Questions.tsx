import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Search } from "lucide-react";
import SEO from "@/components/SEO";

interface Question {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  updated_at: string;
}

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = questions.filter((q) =>
        q.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredQuestions(filtered);
    } else {
      setFilteredQuestions(questions);
    }
  }, [searchTerm, questions]);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("id, slug, title, summary, updated_at")
        .order("updated_at", { ascending: false })
        .limit(200);

      if (error) throw error;
      
      // If no questions found, trigger initial sync
      if (!data || data.length === 0) {
        console.log("No questions found, triggering initial sync...");
        const { error: syncError } = await supabase.functions.invoke("sync-eli5");
        
        if (syncError) {
          console.error("Sync error:", syncError);
        } else {
          // Retry fetching after sync
          const { data: newData } = await supabase
            .from("questions")
            .select("id, slug, title, summary, updated_at")
            .order("updated_at", { ascending: false })
            .limit(200);
          
          setQuestions(newData || []);
          setFilteredQuestions(newData || []);
          setLoading(false);
          return;
        }
      }
      
      setQuestions(data || []);
      setFilteredQuestions(data || []);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="ELI5 Questions - Browse Simple Explanations"
        description="Browse our collection of complex topics explained in simple, easy-to-understand language. Find answers to questions about science, technology, and more."
        canonical="/questions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Browse Questions</h1>
            <p className="text-muted-foreground mb-8">
              Explore complex topics explained in simple terms
            </p>

            <div className="relative mb-8">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading questions...</p>
              </div>
            ) : filteredQuestions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchTerm ? "No questions found matching your search." : "No questions available yet."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <Link
                    key={question.id}
                    to={`/questions/${question.slug}`}
                    className="block"
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">{question.title}</CardTitle>
                        {question.summary && (
                          <CardDescription className="line-clamp-2">
                            {question.summary}
                          </CardDescription>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          Updated: {new Date(question.updated_at).toLocaleDateString()}
                        </p>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}