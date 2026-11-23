"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { domains } from "@/data/site";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const requested = params.get("domain");
  const validRequested = requested && domains.some((item) => item.slug === requested) ? requested : "all";
  const [domain, setDomain] = useState(validRequested);
  const [prevRequested, setPrevRequested] = useState(requested);

  if (prevRequested !== requested) {
    setPrevRequested(requested);
    if (requested && domains.some((item) => item.slug === requested)) {
      setDomain(requested);
    }
  }

  const visible = useMemo(
    () => projects.filter((project) => domain === "all" || project.domain === domain),
    [projects, domain],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setDomain("all")}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-medium",
            domain === "all"
              ? "border-cyan-200/50 bg-cyan-200/15 text-cyan-50"
              : "border-white/10 text-slate-300",
          )}
        >
          All
        </button>
        {domains.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setDomain(item.slug)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium",
              domain === item.slug
                ? "border-cyan-200/50 bg-cyan-200/15 text-cyan-50"
                : "border-white/10 text-slate-300 hover:border-white/25",
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
      {visible.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-white/15 px-6 py-12 text-center">
          <p className="text-slate-300">No club project in this domain yet.</p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-cyan-100"
            onClick={() => setDomain("all")}
          >
            Show every project
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
