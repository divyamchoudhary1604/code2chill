import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { FormFallback } from "@/components/forms/FormFallback";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/data/site";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact the Studio · CODE 2 CHILL",
  description: "Send a message to the CODE 2 CHILL team. Seat reservations, project joins, mentorship, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="GET IN TOUCH"
          title="Send a note to the leads."
          description="Questions about open seats, contributing to a project, or partnering with our studio. Messages are saved locally and routed to the studio inbox."
        />

        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Contact Form wrapped in Suspense for useSearchParams */}
            <div>
              <Suspense fallback={<FormFallback />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Studio Information Sidebar */}
            <div className="space-y-6">
              <GlassCard>
                <h2 className="font-display text-xl font-semibold text-white">Studio Location</h2>
                <div className="mt-4 space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-cyan-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{site.studio}</p>
                      <p className="text-xs text-slate-400">Campus Innovation Wing, 2nd Floor</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-cyan-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{site.hours}</p>
                      <p className="text-xs text-slate-400">Doors open 6:45 PM · Hard stop 10:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-cyan-200 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Direct Email</p>
                      <a href={`mailto:${site.email}`} className="text-xs text-cyan-200 hover:underline">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-display text-lg font-semibold text-white">Visiting for the first time?</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  You don&apos;t need to prepare anything. Come through on a Friday build night, grab a cup of tea, and look at the beginner setup lane.
                </p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

