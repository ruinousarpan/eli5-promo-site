import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      slug: "what-made-big-bang",
      title: "What made the big bang?",
      excerpt: "The Big Bang is the leading scientific theory for the origin of the universe, but it's important to note that it doesn't explain what caused the Big Bang itself...",
      date: "2025-10-03",
      author: "ELI5 Team",
      category: "General"
    },
    {
      slug: "explique-moi-comment-se-forme-un",
      title: "How does a rainbow form?",
      excerpt: "A rainbow appears when a ray of sunlight is refracted (deflected), reflected and dispersed in water droplets...",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "Science"
    },
    {
      slug: "explique-moi-les-surprimes",
      title: "Understanding Insurance Surcharges",
      excerpt: "Surcharges are supplements added to a basic insurance premium when an additional risk is identified by the insurer...",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "Money & Finance"
    },
    {
      slug: "what-one-piece-advice-often-shared",
      title: "Leadership Advice: Listen More Than Speak",
      excerpt: "One piece of advice I always share is that authentic leadership starts with listening more than speaking. Focus on understanding others deeply before guiding them...",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "General"
    },
    {
      slug: "why-people-still-read-fiction-todays-2",
      title: "Why Do People Still Read Fiction in Today's Busy World?",
      excerpt: "People still read fiction in today's busy world because it offers a unique blend of escapism, emotional connection, and intellectual stimulation...",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "General"
    },
    {
      slug: "what-ip-address",
      title: "What is my IP address?",
      excerpt: "An IP address is a unique identifier assigned to each device connected to a network, allowing it to communicate with other devices...",
      date: "2025-10-01",
      author: "ELI5 Team",
      category: "General"
    },
    {
      slug: "explain-kindergartener-what-friction-how-relate",
      title: "Explaining Friction to a Kindergartener",
      excerpt: "Friction is the force that makes things slow down when they rub against each other. It relates to Newton's laws by showing how forces affect motion...",
      date: "2025-10-01",
      author: "ELI5 Team",
      category: "Physics"
    }
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
                <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                        {post.category}
                      </span>
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
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
