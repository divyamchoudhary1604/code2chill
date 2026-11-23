import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Code2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects, getProject } from "@/data/projects";
import { domains } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} · CODE 2 CHILL`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const domain = domains.find((d) => d.slug === project.domain);

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24 pt-12 md:pt-16">
        <Container>
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-200 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column: Project Story & Details */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{domain?.title ?? project.domain}</Badge>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  Status: {project.status}
                </span>
                {project.featured ? (
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Featured build
                  </span>
                ) : null}
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-xl leading-relaxed text-slate-200">
                {project.summary}
              </p>

              {/* The Story & Background */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h2 className="font-display text-2xl font-semibold text-white">The problem & story</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 whitespace-pre-line">
                  {project.story}
                </p>
              </div>

              {/* Outcome & Impact */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h2 className="font-display text-2xl font-semibold text-white">Outcome & real-world use</h2>
                <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.04] p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed text-slate-200">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h2 className="font-display text-2xl font-semibold text-white">Technology stack</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Chosen for maintainability and quiet operation rather than resume novelty.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                    >
                      <Code2 className="h-4 w-4 text-cyan-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Maintainers & Join CTA */}
            <div>
              <div className="sticky top-28 space-y-6">
                <GlassCard>
                  <h3 className="font-display text-xl font-semibold text-white">Contributors</h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Maintainers and builders on this repo.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {project.contributors.map((name) => (
                      <li key={name} className="flex items-center gap-3 text-sm text-slate-200">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/[0.08] text-xs font-semibold text-cyan-200">
                          {name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <Button
                      href={`/contact?intent=project&project=${project.slug}`}
                      className="w-full"
                    >
                      Contribute to {project.title}
                    </Button>
                    <p className="mt-3 text-center text-xs text-slate-400">
                      Takes you to issue claims and onboarding lane.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h4 className="font-semibold text-white text-sm">Have feedback?</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    If your student club or lab uses {project.title}, submit notes or request features during Friday build night review tables.
                  </p>
                  <div className="mt-4">
                    <Button href="/events" variant="secondary" className="w-full text-xs">
                      Join Friday build night
                    </Button>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

