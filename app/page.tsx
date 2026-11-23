import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DomainIcon } from "@/components/ui/DomainIcon";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EventCard } from "@/components/events/EventCard";
import { site, stats, domains, rhythms, principles } from "@/data/site";
import { projects } from "@/data/projects";
import { events } from "@/data/events";
import { testimonials } from "@/data/people";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const upcomingEvents = events.filter((e) => e.upcoming).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-200 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Next build night: {site.hours} · {site.studio}</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
                  Serious builds.{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                    Softer nights.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                  A technology studio and builder collective for people who want the work to be good
                  and the night to end on time. No burnout theater, just finished software and honest critique.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Button href="/events" variant="primary" className="text-base px-6 py-3">
                    Upcoming events <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/projects" variant="secondary" className="text-base px-6 py-3">
                    Explore club projects
                  </Button>
                  <Button href="/register" variant="ghost" className="text-base px-5 py-3">
                    Join the studio
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Stats Bar */}
            <Reveal delay={0.4}>
              <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:grid-cols-4 md:mt-24 md:p-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-white/[0.01]">
          <Container>
            <SectionHeading
              eyebrow="PORTFOLIO"
              title="Built in the studio, running in public."
              description="Club projects have real maintainers, clear problem statements, and actual users across campus."
              action={
                <Button href="/projects" variant="secondary">
                  View all projects <ArrowRight className="h-4 w-4" />
                </Button>
              }
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project, idx) => (
                <Reveal key={project.slug} delay={idx * 0.1}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Domains / Tracks Section */}
        <section className="py-16 md:py-24 border-t border-white/10">
          <Container>
            <SectionHeading
              eyebrow="DOMAINS"
              title="Eight disciplines. One shared standard."
              description="From web platforms to applied AI evaluation, explore the domains our members contribute to."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {domains.map((domain, idx) => (
                <Reveal key={domain.slug} delay={idx * 0.05}>
                  <Link
                    href={`/projects?domain=${domain.slug}`}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20 group-hover:text-white">
                        <DomainIcon name={domain.icon} className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-white group-hover:text-cyan-100">
                        {domain.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {domain.description}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 group-hover:translate-x-1 transition-transform">
                      Browse projects <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Studio Rhythms Section */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-white/[0.015]">
          <Container>
            <SectionHeading
              eyebrow="WEEKLY CADENCE"
              title="How we spend our time."
              description="A sustainable rhythm of office hours, shared readings, quiet builds, and public demos."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {rhythms.map((rhythm, idx) => (
                <Reveal key={rhythm.day} delay={idx * 0.1}>
                  <GlassCard className="flex h-full flex-col justify-between">
                    <div>
                      <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                        {rhythm.day}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold text-white">
                        {rhythm.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {rhythm.copy}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-cyan-300" />
                      <span>Studio 214 or Online</span>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-16 md:py-24 border-t border-white/10">
          <Container>
            <SectionHeading
              eyebrow="ON THE CALENDAR"
              title="Next open studio sessions."
              description="RSVP to secure a seat. We cap attendance to keep review tables small and feedback personal."
              action={
                <Button href="/events" variant="secondary">
                  Full calendar ({events.length}) <ArrowRight className="h-4 w-4" />
                </Button>
              }
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {upcomingEvents.map((event, idx) => (
                <Reveal key={event.slug} delay={idx * 0.1}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Studio Principles Section */}
        <section className="py-16 md:py-24 border-t border-white/10 bg-white/[0.02]">
          <Container>
            <SectionHeading
              eyebrow="OUR PRINCIPLES"
              title="The rules we build by."
              description="Three simple agreements that keep the work sharp and the studio calm."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {principles.map((principle, idx) => (
                <Reveal key={principle.index} delay={idx * 0.1}>
                  <GlassCard className="relative overflow-hidden">
                    <span className="font-display text-5xl font-extrabold text-white/10 absolute top-4 right-6 pointer-events-none">
                      {principle.index}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {principle.copy}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 border-t border-white/10">
          <Container>
            <SectionHeading
              eyebrow="COMMUNITY VOICES"
              title="From people at the tables."
              description="Students, alumni mentors, and project leads on what makes CODE 2 CHILL different."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <GlassCard className="flex flex-col justify-between">
                    <p className="text-base italic leading-relaxed text-slate-200">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.detail}</p>
                      </div>
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Call to Action Banner */}
        <section className="py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-cyan-950/20">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-white/[0.08] to-cyan-500/[0.06] p-8 md:p-14 text-center backdrop-blur-2xl">
                <Badge>WINTER BUILD SEASON</Badge>
                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Ready to build something that lasts?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
                  Join our weekly build nights, take an open issue on Harbor, or propose a project with a partner.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="/register" variant="primary" className="px-6 py-3">
                    Register as a builder
                  </Button>
                  <Button href="/about" variant="secondary" className="px-6 py-3">
                    Read our story
                  </Button>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
