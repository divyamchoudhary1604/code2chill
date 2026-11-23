import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlassCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_80px_-48px_rgba(103,232,249,0.85)] backdrop-blur-xl",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </div>
  );
}
