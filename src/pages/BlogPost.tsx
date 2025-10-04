import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();

  // Placeholder blog posts - in a real app, this would come from a CMS or markdown files
  const posts: Record<string, {
    title: string;
    date: string;
    author: string;
    content: string;
  }> = {
    "welcome-to-eli5": {
      title: "Welcome to ELI5: Making Learning Simple",
      date: "2024-01-15",
      author: "ELI5 Team",
      content: `
        <p>Welcome to ELI5 - your destination for understanding complex topics through simple, accessible explanations.</p>
        
        <h2>Our Mission</h2>
        <p>At ELI5, we believe that everyone deserves access to clear, understandable explanations of complex topics. Whether you're curious about science, technology, history, or any other subject, we're here to break it down for you.</p>
        
        <h2>How We Help</h2>
        <p>Our team of experts takes complicated concepts and explains them in a way that anyone can understand - just like explaining to a five-year-old. We focus on clarity, simplicity, and making learning enjoyable.</p>
        
        <h2>Get Started</h2>
        <p>Browse our collection of explanations, or submit your own questions. We're constantly adding new content to help you learn and grow.</p>
      `,
    },
    "how-eli5-works": {
      title: "How ELI5 Breaks Down Complex Topics",
      date: "2024-01-10",
      author: "ELI5 Team",
      content: `
        <p>Have you ever wondered how we transform complex topics into simple explanations? Let's break down our methodology.</p>
        
        <h2>Understanding Your Question</h2>
        <p>First, we carefully analyze what you're asking. We identify the core concept and any technical jargon that needs to be simplified.</p>
        
        <h2>Finding Analogies</h2>
        <p>We search for everyday comparisons that make abstract concepts concrete. This helps relate new information to things you already understand.</p>
        
        <h2>Structuring the Explanation</h2>
        <p>Our explanations follow a logical flow: starting with the basics, building up gradually, and ending with a clear summary.</p>
        
        <h2>Continuous Improvement</h2>
        <p>We regularly update our explanations based on feedback to ensure they remain clear, accurate, and helpful.</p>
      `,
    },
    "tips-for-learning": {
      title: "5 Tips for Effective Learning with ELI5",
      date: "2024-01-05",
      author: "ELI5 Team",
      content: `
        <p>Want to get the most out of ELI5? Here are our top tips for effective learning.</p>
        
        <h2>1. Start with the Basics</h2>
        <p>Don't jump into advanced topics right away. Build a strong foundation by understanding the fundamentals first.</p>
        
        <h2>2. Ask Questions</h2>
        <p>If something isn't clear, ask! There's no such thing as a stupid question on ELI5.</p>
        
        <h2>3. Connect to What You Know</h2>
        <p>Try to relate new concepts to things you already understand. This helps with retention and comprehension.</p>
        
        <h2>4. Take Your Time</h2>
        <p>Don't rush through explanations. Take time to digest the information and let it sink in.</p>
        
        <h2>5. Share What You Learn</h2>
        <p>Teaching others is one of the best ways to solidify your own understanding. Share your newfound knowledge!</p>
      `,
    },
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found"
          description="The blog post you're looking for doesn't exist."
          canonical={`/blog/${slug}`}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.substring(0, 160)}
        canonical={`/blog/${slug}`}
      />
      
      <article className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-3 text-muted-foreground">
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
          </header>

          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
