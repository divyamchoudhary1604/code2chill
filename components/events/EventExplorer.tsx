"use client";

import { useMemo, useState } from "react";
import { EventCard } from "@/components/events/EventCard";
import { cn } from "@/lib/cn";
import type { ClubEvent } from "@/data/types";

const filters = ["All", "Build night", "Workshop", "Showcase", "Clinic"] as const;

export function EventExplorer({ events }: { events: ClubEvent[] }) {
  const [kind, setKind] = useState<(typeof filters)[number]>("All");
  const [when, setWhen] = useState<"Upcoming" | "Past">("Upcoming");

  const visible = useMemo(
    () =>
      events.filter((event) => {
        const timeOk = when === "Upcoming" ? event.upcoming : !event.upcoming;
        const kindOk = kind === "All" || event.kind === kind;
        return timeOk && kindOk;
      }),
    [events, kind, when],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Event timing">
          {(["Upcoming", "Past"] as const).map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={when === option}
              onClick={() => setWhen(option)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                when === option ? "bg-white text-ink" : "bg-white/[0.04] text-slate-300",
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium",
                kind === option
                  ? "border-cyan-200/50 bg-cyan-200/15 text-cyan-50"
                  : "border-white/10 text-slate-300 hover:border-white/25",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {visible.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-white/15 px-6 py-12 text-center">
          <p className="text-slate-300">Nothing in this combination yet.</p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-cyan-100"
            onClick={() => {
              setKind("All");
              setWhen("Upcoming");
            }}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((event) => (
            <li key={event.slug}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
