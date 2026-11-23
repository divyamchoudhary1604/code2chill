import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { timeline, values, openRoles, site } from "@/data/site";
import { Clock } from "lucide-react";

export const metadata = {
  title: "About the Studio · CODE 2 CHILL",
  description: "Why we started CODE 2 CHILL, how the studio runs, our seasonal timeline, and open volunteer roles.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="ABOUT CODE 2 CHILL"
          title="A quiet studio for serious software."
          description="We started because 48-hour hackathon sprints produce great slides and abandoned codebases. We wanted the opposite: software people actually use, and nights that finish at ten."
        />

        <Container className="space-y-24">
          {/* Origin Story Narrative */}
          <section className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl font-bold text-white">
                How it started
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
                <p>
                  In late 2023, twelve students borrowed a classroom in Innovation Hall.
                  The rule was simple: bring a kettle, work on something real, and lights go out at 10:00 PM sharp.
                  No sleeping on beanbags, no performative midnight GitHub commits.
                </p>
                <p>
                  Within two seasons, tools born at that table—like Harbor for door check-in and Quiet Queue for office hours—were running campus events for dozens of student organizations.
                </p>
                <p>
                  Today, CODE 2 CHILL is a studio community of 480+ builders, maintainers, and alumni mentors across eight technical disciplines.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <GlassCard className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-200 font-display font-semibold">
                  <Clock className="h-5 w-5" /> Studio Schedule
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Location:</strong> {site.studio}
                </p>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Hours:</strong> {site.hours}
                </p>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Hard Stop:</strong> 10:00 PM sharp. The best idea in the room can wait until morning.
                </p>
              </GlassCard>
            </div>
          </section>

          {/* Timeline */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                SEASON BY SEASON
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                From a borrowed room to shipped tools.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item, idx) => (
                <Reveal key={item.year} delay={idx * 0.1}>
                  <GlassCard className="flex h-full flex-col justify-between">
                    <div>
                      <span className="font-mono text-2xl font-bold text-cyan-200">
                        {item.year}
                      </span>
                      <h3 className="mt-4 font-display text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {item.copy}
                      </p>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                CORE VALUES
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                What we believe makes a healthy builder.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {values.map((v, idx) => (
                <Reveal key={v.title} delay={idx * 0.1}>
                  <GlassCard>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {v.copy}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Open Roles */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                GET INVOLVED
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Open roles for the current season.
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                All roles are volunteer-led with defined time commitments and maintainer buddies.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {openRoles.map((role) => (
                <GlassCard key={role.title} className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{role.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{role.copy}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Button href="/contact?intent=invite" variant="secondary" className="w-full text-xs">
                      Express interest
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

