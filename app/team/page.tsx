import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { team, advisors, testimonials } from "@/data/people";

export const metadata = {
  title: "Team & Mentors · CODE 2 CHILL",
  description: "Meet the studio leads, domain maintainers, faculty advisors, and mentors behind CODE 2 CHILL.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="LEADERSHIP & MENTORS"
          title="People at the tables."
          description="Our studio leads and domain maintainers run weekly reviews, book rooms, and keep the hard stop at ten."
        />

        <Container className="space-y-24">
          {/* Studio Leads Grid */}
          <section>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((person, idx) => (
                <Reveal key={person.slug} delay={idx * 0.05}>
                  <GlassCard className="flex h-full flex-col justify-between">
                    <div>
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-500/20 text-cyan-200 font-display font-bold text-sm">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-white">
                        {person.name}
                      </h3>
                      <p className="text-xs font-medium text-cyan-200">{person.role} · {person.domain}</p>
                      <p className="mt-3 text-xs leading-relaxed text-slate-300">
                        {person.focus}
                      </p>
                      <p className="mt-3 border-t border-white/10 pt-3 text-xs text-slate-400">
                        {person.bio}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Button
                        href={`/contact?intent=team&member=${encodeURIComponent(person.name)}`}
                        variant="ghost"
                        className="w-full text-xs"
                      >
                        Reach {person.name.split(" ")[0]}
                      </Button>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Advisory & Industry Mentors */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                ADVISORS & MENTORS
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Guidance from academia and industry.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {advisors.map((advisor) => (
                <GlassCard key={advisor.name}>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-cyan-400/10 text-cyan-200 font-bold text-sm">
                      {advisor.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{advisor.name}</h3>
                      <p className="text-xs text-slate-400">{advisor.role} · {advisor.focus}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {advisor.copy}
                  </p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="border-t border-white/10 pt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                STORIES
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                What mentors and members experience.
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <GlassCard key={i}>
                  <p className="text-sm italic leading-relaxed text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.detail}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Mentor Call to Action */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-center backdrop-blur-xl">
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Can you give one hour a month?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
              We send mentors a brief, a time box, and an issue table. No endless Slack notifications.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/register?role=mentor" variant="primary">
                Join mentor circle
              </Button>
              <Button href="/contact?intent=mentorship" variant="secondary">
                Contact studio lead
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

