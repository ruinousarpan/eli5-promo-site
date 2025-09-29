import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { Brain, Zap, Heart, MessageCircle, Sparkles, CheckCircle } from "lucide-react";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eli5.space/#organization",
        name: "ELI5",
        url: "https://eli5.space",
        logo: "https://eli5.space/logo.png",
        description: "Simple explanations for complex topics",
      },
      {
        "@type": "WebSite",
        "@id": "https://eli5.space/#website",
        url: "https://eli5.space",
        name: "ELI5",
        description: "Explain Like I'm 5 - Simple explanations for complex topics",
        publisher: {
          "@id": "https://eli5.space/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://eli5.space/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "ELI5",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android, Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1250",
        },
      },
      {
        "@type": "MobileApplication",
        name: "ELI5 Android App",
        operatingSystem: "Android",
        applicationCategory: "EducationalApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        downloadUrl: "https://play.google.com/store/apps/details?id=space.eli5.app",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is ELI5?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ELI5 (Explain Like I'm 5) is an app that provides simple, easy-to-understand explanations for complex topics. It breaks down complicated subjects into clear, digestible answers suitable for anyone.",
            },
          },
          {
            "@type": "Question",
            name: "Is ELI5 free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, ELI5 is completely free to use on both web and Android platforms.",
            },
          },
          {
            "@type": "Question",
            name: "What topics can ELI5 explain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ELI5 can explain virtually any topic - from science and technology to philosophy, history, and everyday concepts. Just ask your question and get a simple explanation.",
            },
          },
        ],
      },
    ],
  };

  const features = [
    {
      icon: Brain,
      title: "Simple Explanations",
      description: "Complex topics broken down into easy-to-understand language",
    },
    {
      icon: Zap,
      title: "Instant Answers",
      description: "Get quick, clear explanations whenever you need them",
    },
    {
      icon: Heart,
      title: "User-Friendly",
      description: "Designed for learners of all ages and backgrounds",
    },
    {
      icon: MessageCircle,
      title: "Conversational",
      description: "Natural, engaging explanations that feel like talking to a friend",
    },
    {
      icon: Sparkles,
      title: "Always Learning",
      description: "Continuously improving to provide better explanations",
    },
    {
      icon: CheckCircle,
      title: "Accurate & Reliable",
      description: "Well-researched information you can trust",
    },
  ];

  const faqs = [
    {
      question: "What is ELI5?",
      answer: "ELI5 (Explain Like I'm 5) is an app that provides simple, easy-to-understand explanations for complex topics. It breaks down complicated subjects into clear, digestible answers suitable for anyone.",
    },
    {
      question: "Is ELI5 free to use?",
      answer: "Yes, ELI5 is completely free to use on both web and Android platforms.",
    },
    {
      question: "What topics can ELI5 explain?",
      answer: "ELI5 can explain virtually any topic - from science and technology to philosophy, history, and everyday concepts. Just ask your question and get a simple explanation.",
    },
    {
      question: "How accurate are the explanations?",
      answer: "ELI5 provides well-researched, accurate information simplified for easy understanding. While we strive for accuracy, we recommend verifying critical information from multiple sources.",
    },
  ];

  return (
    <>
      <SEO structuredData={structuredData} />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Explain Like I'm 5
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Making complex topics simple. Get clear, easy-to-understand explanations for anything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://eli5.space" target="_blank" rel="noopener noreferrer">
                  Use ELI5 on Web
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=space.eli5.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Android App
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ask Your Question</h3>
                  <p className="text-muted-foreground">
                    Type in any topic or question you want explained simply.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-secondary font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Simple Answers</h3>
                  <p className="text-muted-foreground">
                    Receive clear, easy-to-understand explanations instantly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Learn & Understand</h3>
                  <p className="text-muted-foreground">
                    Gain knowledge without the confusion or complexity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose ELI5?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Students</h3>
                  <p className="text-muted-foreground">
                    Struggling with complex concepts? Get simple explanations that help you actually understand your coursework.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Curious Minds</h3>
                  <p className="text-muted-foreground">
                    Want to learn about the world? Explore any topic without getting lost in jargon.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Professionals</h3>
                  <p className="text-muted-foreground">
                    Need to understand something outside your field? Get quick, clear explanations to stay informed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">Parents</h3>
                  <p className="text-muted-foreground">
                    Help your kids with homework or answer their endless questions with confidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button variant="link" asChild>
                <Link to="/faq">View All FAQs →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are making learning simple with ELI5.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://eli5.space" target="_blank" rel="noopener noreferrer">
                  Use ELI5 on Web
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=space.eli5.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Android App
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
