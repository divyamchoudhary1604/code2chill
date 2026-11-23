import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { memberships, rhythms } from "@/data/site";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Community & Conduct · CODE 2 CHILL",
  description: "How we show up for each other. Membership tracks, studio guidelines, and community conduct.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="COMMUNITY"
          title="How we show up for each other."
          description="Build night is a working room, not a competition. We welcome beginners, protect focus, and keep the doors open."
        />

        <Container className="space-y-24">
          {/* Membership Tracks */}
          <section>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                MEMBERSHIP
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Three ways to be part of the studio.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {memberships.map((m) => (
                <GlassCard key={m.role} className="flex flex-col justify-between">
                  <div>
                    <Badge>{m.title}</Badge>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {m.copy}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10">
                    <Button href={`/register?role=${m.role}`} className="w-full">
                      Join as {m.title}
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Studio Norms & Rhythms */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                STUDIO NORMS
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                What to expect when you arrive.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rhythms.map((r) => (
                <GlassCard key={r.day} className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-semibold text-cyan-200">{r.day}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{r.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{r.copy}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Community Conduct */}
          <section id="conduct" className="border-t border-white/10 pt-16 scroll-mt-28">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <Shield className="h-4 w-4" /> CODE OF CONDUCT
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Studio agreements and mutual respect.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                We believe that great engineering thrives in an environment of calm respect, where asking a beginner question is treated as a service to the room.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">1. Critique with a next step</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Code reviews and design critiques focus on the software, not the author. Feedback must name what to try next rather than issuing vague dismissals or competitive teardowns.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">2. The 10:00 PM hard stop</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    We do not celebrate all-nighters or performative grind. Build night ends at ten o&apos;clock so builders can rest, catch transit, and return with clear minds.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">3. Shared credit and transparent attribution</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Everyone who touches a repo, fixes a typo, or pair-programs on an issue is credited in the release notes and demo day presentation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">4. Zero tolerance for harassment</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Harassment, exclusion, or discrimination based on race, gender, orientation, background, or experience level results in immediate removal from the studio and online channels.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

