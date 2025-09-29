import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Brain, Zap, Heart, MessageCircle, Sparkles, CheckCircle, Globe, Smartphone, Search, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Simple Explanations",
      description: "We take complex topics and break them down into language anyone can understand. No jargon, no confusion - just clear, simple explanations.",
      benefits: ["Easy-to-understand language", "No technical jargon", "Suitable for all ages"],
    },
    {
      icon: Zap,
      title: "Instant Answers",
      description: "Get your questions answered immediately. No waiting, no searching through multiple sources.",
      benefits: ["Fast response times", "Always available", "On-demand learning"],
    },
    {
      icon: MessageCircle,
      title: "Conversational Interface",
      description: "Our natural, friendly approach makes learning feel like chatting with a knowledgeable friend.",
      benefits: ["Natural dialogue", "Follow-up questions", "Context-aware responses"],
    },
    {
      icon: Search,
      title: "Any Topic, Anytime",
      description: "From quantum physics to cooking techniques, we can explain virtually anything.",
      benefits: ["Unlimited topics", "Science, history, tech & more", "No subject too complex"],
    },
    {
      icon: Globe,
      title: "Web Access",
      description: "Use ELI5 directly in your browser - no installation required.",
      benefits: ["Works on any device", "No downloads needed", "Access anywhere"],
    },
    {
      icon: Smartphone,
      title: "Android App",
      description: "Take ELI5 with you on your Android device for learning on the go.",
      benefits: ["Native Android experience", "Offline capabilities", "Optimized for mobile"],
    },
    {
      icon: CheckCircle,
      title: "Accurate Information",
      description: "We prioritize accuracy while maintaining simplicity in our explanations.",
      benefits: ["Well-researched content", "Fact-checked information", "Trustworthy sources"],
    },
    {
      icon: BookOpen,
      title: "Educational Focus",
      description: "Designed specifically for learning and understanding, not just quick answers.",
      benefits: ["Deep understanding", "Learn at your pace", "Build real knowledge"],
    },
    {
      icon: Heart,
      title: "User-Friendly Design",
      description: "Clean, intuitive interface that gets out of the way and lets you focus on learning.",
      benefits: ["Simple navigation", "Distraction-free", "Beautiful design"],
    },
    {
      icon: Sparkles,
      title: "Always Improving",
      description: "We continuously update and enhance ELI5 based on user feedback and new capabilities.",
      benefits: ["Regular updates", "New features", "Community-driven"],
    },
  ];

  return (
    <>
      <SEO
        title="Features - ELI5"
        description="Discover all the features that make ELI5 the best way to understand complex topics. Simple explanations, instant answers, and learning made easy."
        canonical="/features"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Learn Simply
            </h1>
            <p className="text-xl text-muted-foreground">
              ELI5 is packed with features designed to make learning easy, accessible, and enjoyable.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
                          <p className="text-muted-foreground mb-4">{feature.description}</p>
                          <ul className="space-y-2">
                            {feature.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Features;
