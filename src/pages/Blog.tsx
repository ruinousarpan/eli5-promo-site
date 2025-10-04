import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <>
      <SEO
        title="Blog"
        description="Read the latest articles, tips, and insights from ELI5. Learn about simplifying complex topics and effective learning strategies."
        canonical="/blog"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ELI5 Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and stories about making learning simple
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {isLoading ? (
              <div className="grid gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <Skeleton className="h-6 w-32 mb-3" />
                      <Skeleton className="h-8 w-3/4 mb-3" />
                      <Skeleton className="h-20 w-full mb-4" />
                      <Skeleton className="h-4 w-48" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid gap-8">
                {posts?.map((post) => (
                  <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-3">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.summary}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.created_at}>
                          {new Date(post.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span>•</span>
                        <span>ELI5 Team</span>
                      </div>
                      <Button variant="link" asChild className="px-0">
                        <Link to={`/blog/${post.slug}`}>Read more →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                More articles coming soon! Check back regularly for new content.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
