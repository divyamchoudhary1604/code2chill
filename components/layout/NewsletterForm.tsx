"use client";

import { FormEvent, useState } from "react";
import { readList, writeList } from "@/lib/storage";

const key = "c2c-newsletter";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      setDone("");
      return;
    }

    const existing = readList<string>(key);
    if (existing.includes(value)) {
      setError("");
      setDone("This address is already on the list for this browser.");
      return;
    }

    writeList(key, [...existing, value]);
    setEmail("");
    setError("");
    setDone("Saved on this device. Mailing starts when the backend is connected.");
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@campus.edu"
          autoComplete="email"
          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/50 focus:ring-2 focus:ring-cyan-200/20"
        />
        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-cyan-200 to-violet-300 px-5 py-3 text-sm font-semibold text-ink"
        >
          Get notes
        </button>
      </div>
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
      {done ? <p className="text-sm text-cyan-100">{done}</p> : null}
    </form>
  );
}
