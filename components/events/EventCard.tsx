import { Calendar, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ClubEvent } from "@/data/types";

export function EventCard({ event }: { event: ClubEvent }) {
  return (
    <GlassCard interactive className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3">
        <Badge>{event.kind}</Badge>
        <span className="text-xs text-slate-400">{event.mode}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-white">{event.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{event.summary}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        <li className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cyan-200" aria-hidden="true" />
          {event.date}
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-cyan-200" aria-hidden="true" />
          {event.time}
        </li>
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cyan-200" aria-hidden="true" />
          {event.location}
        </li>
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`/events/${event.slug}`} variant="secondary">
          Event details
        </Button>
        {event.upcoming ? (
          <Button href={`/events/${event.slug}#reserve`}>Reserve a seat</Button>
        ) : (
          <Button href={`/resources`} variant="ghost">
            Session notes
          </Button>
        )}
      </div>
    </GlassCard>
  );
}
