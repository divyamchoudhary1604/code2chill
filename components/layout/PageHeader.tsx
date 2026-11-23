import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <header className="pb-6 pt-14 md:pb-10 md:pt-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {description}
          </p>
        </Container>
      </header>
    </Reveal>
  );
}
