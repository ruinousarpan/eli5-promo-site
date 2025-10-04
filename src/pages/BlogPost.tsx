import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ['question', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <>
        <SEO
          title="Loading..."
          description="Loading blog post"
          canonical={`/blog/${slug}`}
        />
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <Skeleton className="h-10 w-32 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-48 mb-12" />
            <Skeleton className="h-64 w-full mb-8" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </>
    );
  }

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
        title={post.seo_title || post.title}
        description={post.seo_description || post.summary || ''}
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
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {post.body_question && (
              <>
                <h2>Question</h2>
                <p>{post.body_question}</p>
              </>
            )}
            
            {post.body_answer && (
              <>
                <h2>Answer</h2>
                <div className="whitespace-pre-wrap">{post.body_answer}</div>
              </>
            )}
          </div>

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
