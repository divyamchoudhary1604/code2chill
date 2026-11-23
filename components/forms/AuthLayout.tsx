import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function AuthLayout({
  eyebrow,
  title,
  lede,
  points,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  points: string[];
  children: ReactNode;
}) {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-300">{lede}</p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-slate-300">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-200" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        {children}
      </Container>
    </section>
  );
}
