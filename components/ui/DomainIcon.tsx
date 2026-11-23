import {
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Palette,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/types";

const icons: Record<IconName, LucideIcon> = {
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Palette,
  Shield,
  Smartphone,
};

export function DomainIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
