import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { FormFallback } from "@/components/forms/FormFallback";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { GitPullRequest } from "lucide-react";

export const metadata = {
  title: "Club Projects · CODE 2 CHILL",
  description: "Software built for real people. Every club project has a maintainer, an active repo, and someone who asked for the tool.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24">
        <PageHeader
          eyebrow="STUDIO PORTFOLIO"
          title="Software built for real people."
          description="Every club project has a maintainer, an active repo, and someone who asked for the tool. We build small tools that stay running."
        />

        <Container>
          {/* Filter and Project Explorer (Wrapped in Suspense because of useSearchParams) */}
          <Suspense fallback={<FormFallback />}>
            <ProjectExplorer projects={projects} />
          </Suspense>

          {/* Contributing / Proposal Banner */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  <GitPullRequest className="h-4 w-4" /> Propose or adopt
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                  Have an itch to build or maintain?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  We match builders with open issues on existing studio repos, or pair you with a mentor to spec out a new tool before demo day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact?intent=project" variant="primary">
                  Propose a build
                </Button>
                <Button href="/resources" variant="secondary">
                  Learning tracks
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

