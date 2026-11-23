import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Compass, Home, Calendar } from "lucide-react";

export const metadata = {
  title: "Page Not Found · CODE 2 CHILL",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-24">
        <Container>
          <GlassCard className="mx-auto max-w-lg text-center p-8 md:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-cyan-400/10 text-cyan-200">
              <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: "12s" }} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              404 · OFF THE MAP
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Page not found
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The screen you are looking for has been archived, moved, or never existed in the studio catalog.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/" variant="primary">
                <Home className="h-4 w-4" /> Return home
              </Button>
              <Button href="/events" variant="secondary">
                <Calendar className="h-4 w-4" /> See calendar
              </Button>
            </div>
          </GlassCard>
        </Container>
      </main>
      <Footer />
    </>
  );
}

