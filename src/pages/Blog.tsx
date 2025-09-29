import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const Blog = () => {
  // Placeholder blog posts - in a real app, this would come from a CMS or markdown files
  const posts = [
    {
      slug: "welcome-to-eli5",
      title: "Welcome to ELI5: Making Learning Simple",
      excerpt: "Learn about our mission to make complex topics accessible to everyone through simple, clear explanations.",
      date: "2024-01-15",
      author: "ELI5 Team",
    },
    {
      slug: "how-eli5-works",
      title: "How ELI5 Breaks Down Complex Topics",
      excerpt: "Discover the methodology behind our explanations and how we transform complex concepts into simple language.",
      date: "2024-01-10",
      author: "ELI5 Team",
    },
    {
      slug: "tips-for-learning",
      title: "5 Tips for Effective Learning with ELI5",
      excerpt: "Get the most out of ELI5 with these simple strategies for better understanding and retention.",
      date: "2024-01-05",
      author: "ELI5 Team",
    },
  ];

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
            <div className="grid gap-8">
              {posts.map((post) => (
                <Card key={post.slug}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" asChild className="px-0">
                      <Link to={`/blog/${post.slug}`}>Read more →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

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
