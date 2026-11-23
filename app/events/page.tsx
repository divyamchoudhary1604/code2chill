import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { EventExplorer } from "@/components/events/EventExplorer";
import { events } from "@/data/events";
import { site } from "@/data/site";
import { MapPin, Clock, CalendarCheck } from "lucide-react";

export const metadata = {
  title: "Events & Calendar · CODE 2 CHILL",
  description: "Workshops, build nights, showcases, and clinics. Every session has an agenda, a door time, and an explicit ending.",
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20">
        <PageHeader
          eyebrow="CALENDAR & SESSIONS"
          title="Workshops, build nights, and clinics."
          description="Every session has an agenda, a door time, and an explicit ending. Laptops required for build night; optional everywhere else."
        />

        <Container>
          {/* Quick info banner */}
          <div className="mb-10 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:grid-cols-3">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <MapPin className="h-5 w-5 text-cyan-200 shrink-0" />
              <span>{site.studio}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Clock className="h-5 w-5 text-cyan-200 shrink-0" />
              <span>{site.hours}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CalendarCheck className="h-5 w-5 text-cyan-200 shrink-0" />
              <span>Seat reservations saved locally</span>
            </div>
          </div>

          {/* Event explorer filterable list */}
          <EventExplorer events={events} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
