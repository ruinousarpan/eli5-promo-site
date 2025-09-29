import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Smartphone, Globe, Download as DownloadIcon } from "lucide-react";

const Download = () => {
  return (
    <>
      <SEO
        title="Download ELI5"
        description="Download the ELI5 app for Android or use it on the web. Get simple explanations for complex topics on any device."
        canonical="/download"
      />

      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get ELI5
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your platform and start learning simply
            </p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Web App</h2>
                  <p className="text-muted-foreground mb-6">
                    Use ELI5 directly in your browser. No installation required - works on any device with internet access.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Works on any device
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      No downloads needed
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Always up to date
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Access anywhere
                    </li>
                  </ul>
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://eli5.space" target="_blank" rel="noopener noreferrer">
                      Open Web App
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Android App</h2>
                  <p className="text-muted-foreground mb-6">
                    Download the native Android app for the best mobile experience. Optimized for phones and tablets.
                  </p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Native Android experience
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Optimized for mobile
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Quick access
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Free forever
                    </li>
                  </ul>
                  <Button size="lg" variant="secondary" className="w-full" asChild>
                    <a
                      href="https://play.google.com/store/apps/details?id=space.eli5.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon className="w-5 h-5 mr-2" />
                      Get on Play Store
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-muted/50 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Coming Soon to More Platforms</h3>
              <p className="text-muted-foreground">
                We're working on bringing ELI5 to iOS and other platforms. Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Download;
