"use client";

import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import type { ClubEvent } from "@/data/types";
import { readList, writeList } from "@/lib/storage";

type Reservation = {
  slug: string;
  name: string;
  email: string;
};

const key = "c2c-rsvps";
const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-[#080B14]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/50 focus:ring-2 focus:ring-cyan-200/20";

export function EventRsvp({ event }: { event: ClubEvent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [saved, setSaved] = useState<Reservation | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const existing = readList<Reservation>(key).find((item) => item.slug === event.slug);
      if (existing) setSaved(existing);
    }, 0);
    return () => clearTimeout(timer);
  }, [event.slug]);

  function onSubmit(submitEvent: FormEvent<HTMLFormElement>) {
    submitEvent.preventDefault();
    const nextErrors: { name?: string; email?: string } = {};
    if (name.trim().length < 2) nextErrors.name = "Add the name we should put on the list.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter an email we can reach.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const reservation = { slug: event.slug, name: name.trim(), email: email.trim().toLowerCase() };
    const others = readList<Reservation>(key).filter((item) => item.slug !== event.slug);
    writeList(key, [...others, reservation]);
    setSaved(reservation);
  }

  if (!event.upcoming) {
    return (
      <GlassCard>
        <h2 className="font-display text-2xl text-white">This session already happened</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Notes from past nights live on the learning page. The next open seat is on the calendar.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/resources" variant="secondary">
            Learning resources
          </Button>
          <Button href="/events">See upcoming events</Button>
        </div>
      </GlassCard>
    );
  }

  if (saved) {
    return (
      <GlassCard>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Seat held</p>
        <h2 className="mt-3 font-display text-2xl text-white">You are on the list, {saved.name}.</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {event.title} · {event.date}. This preview stores the request in your browser. A shared
          waitlist connects when the backend ships.
        </p>
        <div className="mt-6">
          <Button href="/events" variant="secondary">
            Back to the calendar
          </Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <h2 className="font-display text-2xl text-white">Reserve a seat</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">
        {event.seats} seats in the room. We hold your name on this device until accounts exist.
      </p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="rsvp-name" className="mb-2 block text-sm text-slate-200">
            Name
          </label>
          <input
            id="rsvp-name"
            value={name}
            onChange={(input) => setName(input.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
          {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="rsvp-email" className="mb-2 block text-sm text-slate-200">
            Email
          </label>
          <input
            id="rsvp-email"
            type="email"
            value={email}
            onChange={(input) => setEmail(input.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
          {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
        </div>
        <Button type="submit">Reserve my seat</Button>
      </form>
    </GlassCard>
  );
}
