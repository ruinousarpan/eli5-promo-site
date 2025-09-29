import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

const FAQ = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is ELI5?",
          answer: "ELI5 (Explain Like I'm 5) is an app that provides simple, easy-to-understand explanations for complex topics. It breaks down complicated subjects into clear, digestible answers suitable for anyone, regardless of their background knowledge.",
        },
        {
          question: "Is ELI5 free to use?",
          answer: "Yes, ELI5 is completely free to use on both web and Android platforms. We believe knowledge should be accessible to everyone.",
        },
        {
          question: "Who is ELI5 for?",
          answer: "ELI5 is for anyone who wants to learn! Whether you're a student, professional, curious learner, or parent helping with homework, ELI5 makes complex topics accessible to everyone.",
        },
      ],
    },
    {
      category: "Usage",
      questions: [
        {
          question: "What topics can ELI5 explain?",
          answer: "ELI5 can explain virtually any topic - from science and technology to philosophy, history, everyday concepts, and more. If you have a question, we can help simplify it.",
        },
        {
          question: "How do I use ELI5?",
          answer: "Simply visit eli5.space or download our Android app, type your question or topic, and receive a clear, simple explanation instantly. You can ask follow-up questions to dive deeper into any subject.",
        },
        {
          question: "Can I ask follow-up questions?",
          answer: "Yes! ELI5 supports conversational learning. You can ask follow-up questions to clarify or expand on any explanation you receive.",
        },
      ],
    },
    {
      category: "Accuracy & Quality",
      questions: [
        {
          question: "How accurate are the explanations?",
          answer: "ELI5 provides well-researched, accurate information simplified for easy understanding. While we strive for accuracy in all explanations, we recommend verifying critical or sensitive information from multiple authoritative sources.",
        },
        {
          question: "Are the explanations really that simple?",
          answer: "Yes! We specialize in breaking down complex topics into language that anyone can understand, without losing the core meaning or important details.",
        },
        {
          question: "How is ELI5 different from a regular search engine?",
          answer: "Unlike search engines that give you multiple sources to sift through, ELI5 provides direct, simplified explanations. You get one clear answer instead of dozens of complex articles.",
        },
      ],
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What platforms does ELI5 support?",
          answer: "ELI5 is available as a web application (accessible from any browser) and as a native Android app. We're working on expanding to more platforms in the future.",
        },
        {
          question: "Do I need to create an account?",
          answer: "No account is required to use ELI5's basic features. You can start asking questions immediately on the web or app.",
        },
        {
          question: "Does ELI5 work offline?",
          answer: "The Android app has some offline capabilities for previously viewed explanations. However, generating new explanations requires an internet connection.",
        },
        {
          question: "Is my data private?",
          answer: "Yes, we take privacy seriously. Your questions and interactions are private. For more details, please review our Privacy Policy.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          question: "I found an error in an explanation. What should I do?",
          answer: "We appreciate your feedback! Please contact us through our Contact page with details about the error, and we'll review and correct it as quickly as possible.",
        },
        {
          question: "Can I suggest new features?",
          answer: "Absolutely! We love hearing from our users. Visit our Contact page to share your ideas and suggestions.",
        },
        {
          question: "How can I report a problem?",
          answer: "If you encounter any issues or bugs, please reach out through our Contact page with a description of the problem, and we'll work to resolve it.",
        },
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about ELI5. Learn how to use the app, what topics we cover, and how we make complex subjects simple."
        canonical="/faq"
        structuredData={structuredData}
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ELI5
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
