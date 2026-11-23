import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { EventRsvp } from "@/components/events/EventRsvp";
import { events, getEvent } from "@/data/events";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} · CODE 2 CHILL`,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24 pt-12 md:pt-16">
        <Container>
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-200 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Back to calendar
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column: Event Details & Agenda */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{event.kind}</Badge>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  {event.mode}
                </span>
                {event.upcoming ? (
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {event.seats} seats total
                  </span>
                ) : (
                  <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-3 py-1 text-xs font-medium text-slate-400">
                    Past event
                  </span>
                )}
              </div>

              <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {event.title}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {event.summary}
              </p>

              {/* Event Metadata Bar */}
              <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-3">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Calendar className="h-5 w-5 text-cyan-200 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <Clock className="h-5 w-5 text-cyan-200 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <MapPin className="h-5 w-5 text-cyan-200 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h2 className="font-display text-2xl font-semibold text-white">About this session</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300 whitespace-pre-line">
                  {event.description}
                </p>
              </div>

              {/* Agenda Timeline */}
              <div className="mt-10 border-t border-white/10 pt-8">
                <h2 className="font-display text-2xl font-semibold text-white">Run of show</h2>
                <p className="mt-2 text-sm text-slate-400">
                  We keep strict timeboxes so sessions stay focused and finish on schedule.
                </p>

                <div className="mt-6 space-y-4">
                  {event.agenda.map((slot, index) => (
                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:bg-white/[0.05]"
                    >
                      <div className="min-w-16 font-mono text-sm font-semibold text-cyan-200 pt-0.5">
                        {slot.time}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{slot.title}</h3>
                        <p className="mt-1 text-xs text-slate-300">{slot.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: RSVP & Reservation Form */}
            <div id="reserve">
              <div className="sticky top-28">
                <EventRsvp event={event} />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

