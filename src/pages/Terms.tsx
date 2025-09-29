import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read ELI5's terms of service to understand the rules and guidelines for using our platform."
        canonical="/terms"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using ELI5, you accept and agree to be bound by the terms and provision of 
                  this agreement. If you do not agree to these terms, please do not use our service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access and use ELI5 for personal, non-commercial purposes. 
                  This license shall automatically terminate if you violate any of these restrictions.
                </p>
                <p className="text-muted-foreground">
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or entity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
                <p className="text-muted-foreground">
                  ELI5 provides simplified explanations of complex topics. While we strive for accuracy, 
                  explanations are simplified for understanding and should not be used as the sole source for 
                  critical decisions. Always verify important information from authoritative sources.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account (if applicable)</li>
                  <li>Using the service in compliance with all applicable laws</li>
                  <li>Not using the service for any illegal or unauthorized purpose</li>
                  <li>Not attempting to interfere with the service's operation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on ELI5 are provided on an 'as is' basis. ELI5 makes no warranties, expressed 
                  or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                  non-infringement of intellectual property.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall ELI5 or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use ELI5.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Accuracy of Materials</h2>
                <p className="text-muted-foreground">
                  The materials appearing on ELI5 could include technical, typographical, or photographic errors. 
                  ELI5 does not warrant that any of the materials on its service are accurate, complete, or current. 
                  ELI5 may make changes to the materials at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Links</h2>
                <p className="text-muted-foreground">
                  ELI5 has not reviewed all of the sites linked to its service and is not responsible for the 
                  contents of any such linked site. The inclusion of any link does not imply endorsement by ELI5.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
                <p className="text-muted-foreground">
                  ELI5 may revise these terms of service at any time without notice. By using this service, you 
                  are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with applicable laws, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at legal@eli5.space
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Terms;
