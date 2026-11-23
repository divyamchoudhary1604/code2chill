import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { tracks } from "@/data/resources";
import { Clock, ExternalLink, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Learning Tracks · CODE 2 CHILL",
  description: "Curated learning tracks in Web, AI, Cloud, and Security before contributing to club repos.",
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="LEARNING LIBRARY"
          title="Curated paths for practical builders."
          description="The exact tutorials, documentation, and references we recommend before taking on a club repo issue. Short enough to finish during the semester."
        />

        <Container className="space-y-16">
          {tracks.map((track) => (
            <section key={track.slug} id={track.slug} className="scroll-mt-24">
              <div className="max-w-2xl">
                <Badge>{track.title}</Badge>
                <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                  {track.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {track.description}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {track.modules.map((module) => (
                  <GlassCard key={module.title} className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-cyan-200">{module.level}</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="h-3 w-3" /> {module.minutes} mins
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-lg font-semibold text-white">
                        {module.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">Source: {module.source}</p>

                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {module.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Button
                        href={module.href}
                        external
                        variant="secondary"
                        className="w-full text-xs"
                      >
                        Read reference <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}

          {/* Study Circle Promo */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  <GraduationCap className="h-4 w-4" /> WEDNESDAY STUDY CIRCLES
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                  Prefer to learn with a partner?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Join our weekly 40-minute paired exercises on Wednesday nights in Studio 214.
                </p>
              </div>
              <Button href="/events" variant="primary">
                View study circles
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

