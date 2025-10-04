import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();

  const posts: Record<string, {
    title: string;
    date: string;
    author: string;
    content: string;
    category: string;
  }> = {
    "what-made-big-bang": {
      title: "What Made the Big Bang?",
      date: "2025-10-03",
      author: "ELI5 Team",
      category: "General",
      content: `
        <h2>Simple Answer</h2>
        <p>The Big Bang is the leading scientific theory for the origin of the universe, but it's important to note that it doesn't explain what <em>caused</em> the Big Bang itself. The theory describes what happened <em>after</em> the initial singularity—an infinitely dense and hot point—began expanding around 13.8 billion years ago.</p>
        
        <h2>What We Know</h2>
        <p>Scientists have traced the universe's expansion backward in time to this initial moment. However, our current laws of physics break down at the extreme conditions of the singularity, making it impossible to determine what (if anything) existed "before" or what triggered the expansion.</p>
        
        <h2>Theories and Ideas</h2>
        <p>Various hypotheses exist about what might have caused the Big Bang:</p>
        <ul>
          <li><strong>Quantum fluctuations:</strong> Some physicists propose that quantum mechanics might allow something to arise from nothing</li>
          <li><strong>Previous universe:</strong> The Big Bang might have been preceded by a contracting universe that "bounced" back</li>
          <li><strong>Multiverse theories:</strong> Our universe might be one of many in a larger cosmic structure</li>
        </ul>
        
        <h2>The Bottom Line</h2>
        <p>The honest answer is: we don't know yet. The Big Bang theory explains the evolution of the universe from its earliest moments, but the ultimate cause or trigger remains one of the deepest mysteries in science.</p>
      `,
    },
    "explique-moi-comment-se-forme-un": {
      title: "How Does a Rainbow Form?",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "Science",
      content: `
        <h2>🌈 Simple Answer</h2>
        <p>A rainbow appears when a ray of sunlight is <em>refracted</em> (deflected), <em>reflected</em>, and <em>dispersed</em> in water droplets suspended in the atmosphere.</p>
        
        <h2>The Process Step by Step</h2>
        <ol>
          <li><strong>Sunlight enters a water droplet:</strong> When white light from the sun hits a raindrop, it slows down and bends (refraction)</li>
          <li><strong>Light splits into colors:</strong> Different colors of light bend at slightly different angles, separating the white light into its spectrum (red, orange, yellow, green, blue, indigo, violet)</li>
          <li><strong>Light bounces inside:</strong> The separated colors bounce off the back of the water droplet (reflection)</li>
          <li><strong>Light exits the droplet:</strong> As the light leaves the droplet, it bends again, spreading the colors even more</li>
        </ol>
        
        <h2>Why Is It Curved?</h2>
        <p>The rainbow appears as an arc because you're seeing light reflected from many different droplets at a specific angle (about 42 degrees from the line between the sun and your eye). Each color comes from droplets at slightly different heights.</p>
        
        <h2>Fun Facts</h2>
        <ul>
          <li>You can only see a rainbow when the sun is behind you and rain is in front of you</li>
          <li>No two people see the exact same rainbow—each person sees light from different water droplets</li>
          <li>Double rainbows occur when light reflects twice inside the water droplets</li>
        </ul>
      `,
    },
    "explique-moi-les-surprimes": {
      title: "Understanding Insurance Surcharges",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "Money & Finance",
      content: `
        <h2>Simple Answer</h2>
        <p>Surcharges are supplements added to a basic insurance premium when an additional risk is identified by the insurer. They occur when your profile presents higher risks than average.</p>
        
        <h2>Why Do Surcharges Happen?</h2>
        <p>Insurance companies calculate premiums based on risk. When certain factors make you more likely to file a claim, they add a surcharge to cover that increased risk:</p>
        
        <h3>Common Reasons for Surcharges:</h3>
        <ul>
          <li><strong>Health Insurance:</strong> Pre-existing conditions, smoking, dangerous hobbies</li>
          <li><strong>Auto Insurance:</strong> Previous accidents, traffic violations, young or inexperienced drivers</li>
          <li><strong>Home Insurance:</strong> Location in high-risk areas (floods, earthquakes), older home, security issues</li>
          <li><strong>Life Insurance:</strong> Age, health conditions, risky profession or lifestyle</li>
        </ul>
        
        <h2>How Much Do They Cost?</h2>
        <p>Surcharges can range from 10% to 100% or more of your base premium, depending on the risk factor. Multiple surcharges can be combined.</p>
        
        <h2>Can You Reduce Surcharges?</h2>
        <p>Yes! Here are some strategies:</p>
        <ol>
          <li>Improve your risk profile (quit smoking, improve health, take defensive driving courses)</li>
          <li>Install safety equipment (alarm systems, fire detectors)</li>
          <li>Shop around—different insurers weight risks differently</li>
          <li>Ask about discounts that might offset surcharges</li>
          <li>Consider higher deductibles to lower premiums</li>
        </ol>
      `,
    },
    "what-one-piece-advice-often-shared": {
      title: "Leadership Advice: Listen More Than Speak",
      date: "2025-10-02",
      author: "ELI5 Team",
      category: "General",
      content: `
        <h2>Simple Answer</h2>
        <p>One piece of advice I always share is that <strong>authentic leadership starts with listening more than speaking</strong>. Focus on understanding others deeply before guiding them, because leadership is fundamentally about serving and empowering those you lead.</p>
        
        <h2>Why Listening Matters</h2>
        <p>Great leaders understand that they don't have all the answers. By truly listening to their team members, mentees, or students, they:</p>
        <ul>
          <li>Gain valuable insights they wouldn't have discovered alone</li>
          <li>Build trust and psychological safety</li>
          <li>Demonstrate respect for others' experiences and perspectives</li>
          <li>Make better-informed decisions</li>
          <li>Identify potential issues before they become problems</li>
        </ul>
        
        <h2>How to Practice Active Listening</h2>
        <ol>
          <li><strong>Be present:</strong> Put away distractions and give your full attention</li>
          <li><strong>Ask questions:</strong> Seek to understand, not just to respond</li>
          <li><strong>Reflect back:</strong> Paraphrase what you heard to confirm understanding</li>
          <li><strong>Stay curious:</strong> Approach conversations with genuine interest</li>
          <li><strong>Pause before responding:</strong> Take time to process what was shared</li>
        </ol>
        
        <h2>The Leadership Paradox</h2>
        <p>The less you talk and the more you listen, the more influence you tend to have. People naturally follow leaders who make them feel heard, understood, and valued. When you finally do speak, your words carry more weight because they're informed by deep understanding.</p>
        
        <h2>Putting It Into Practice</h2>
        <p>Start small: In your next conversation with someone you lead or mentor, challenge yourself to ask three questions for every statement you make. Notice how it changes the dynamic and the quality of insights that emerge.</p>
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
