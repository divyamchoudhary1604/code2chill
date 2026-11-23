import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { domains } from "@/data/site";
import type { Project } from "@/data/types";

const statusTone: Record<Project["status"], string> = {
  Shipped: "text-cyan-100",
  "In progress": "text-violet-200",
  Incubating: "text-slate-300",
};

export function ProjectCard({ project }: { project: Project }) {
  const domain = domains.find((item) => item.slug === project.domain);

  return (
    <GlassCard interactive className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <Badge>{domain?.title ?? project.domain}</Badge>
        <span className={`text-xs font-medium ${statusTone[project.status]}`}>{project.status}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={`/projects/${project.slug}`} variant="secondary">
          Read the story
        </Button>
      </div>
    </GlassCard>
  );
}
