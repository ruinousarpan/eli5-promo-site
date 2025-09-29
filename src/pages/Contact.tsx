import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the ELI5 team. We'd love to hear your feedback, questions, or suggestions."
        canonical="/contact"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hi.
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="grid gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Email Us</h2>
                      <p className="text-muted-foreground mb-4">
                        Send us an email and we'll get back to you as soon as possible.
                      </p>
                      <Button asChild>
                        <a href="mailto:hello@eli5.space">hello@eli5.space</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Feedback & Suggestions</h2>
                      <p className="text-muted-foreground mb-4">
                        Have ideas for new features or improvements? We'd love to hear them!
                      </p>
                      <Button variant="outline" asChild>
                        <a href="mailto:feedback@eli5.space">feedback@eli5.space</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>General inquiries:</strong> hello@eli5.space
                </p>
                <p>
                  <strong>Technical support:</strong> support@eli5.space
                </p>
                <p>
                  <strong>Feedback:</strong> feedback@eli5.space
                </p>
                <p>
                  <strong>Partnerships:</strong> partners@eli5.space
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
