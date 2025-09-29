import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read ELI5's privacy policy to understand how we collect, use, and protect your data."
        canonical="/privacy"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to ELI5. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we handle your personal data when you use our 
                  service and tell you about your privacy rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Usage data: Information about how you use our website and app</li>
                  <li>Technical data: IP address, browser type, device information</li>
                  <li>Query data: The questions and topics you ask about (anonymized for service improvement)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                <p className="text-muted-foreground mb-4">
                  We use your data to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain our service</li>
                  <li>Improve and personalize your experience</li>
                  <li>Analyze usage patterns and optimize performance</li>
                  <li>Communicate with you about service updates</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request transfer of your data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to track activity on our service and hold 
                  certain information. You can instruct your browser to refuse all cookies or to indicate when 
                  a cookie is being sent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We may employ third-party companies and individuals to facilitate our service, provide the 
                  service on our behalf, or assist us in analyzing how our service is used. These third parties 
                  have access to your personal data only to perform these tasks on our behalf.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  While our service is designed to be family-friendly, we do not knowingly collect personally 
                  identifiable information from children under 13. If you are a parent or guardian and believe 
                  your child has provided us with personal data, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update our privacy policy from time to time. We will notify you of any changes by 
                  posting the new privacy policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy, please contact us at privacy@eli5.space
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;
