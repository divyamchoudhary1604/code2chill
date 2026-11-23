"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { events } from "@/data/events";
import { projects } from "@/data/projects";
import { readList, writeList } from "@/lib/storage";

const topics = [
  "General question",
  "Event seat",
  "Join a project",
  "Mentorship",
  "Partnership",
  "Something else",
] as const;

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-[#080B14]/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/50 focus:ring-2 focus:ring-cyan-200/20";

type Note = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export function ContactForm() {
  const params = useSearchParams();
  const intent = params.get("intent");
  const event = events.find((item) => item.slug === params.get("event"));
  const project = projects.find((item) => item.slug === params.get("project"));
  const member = params.get("member");

  const defaults = useMemo(() => {
    if (intent === "invite") {
      return {
        topic: "General question",
        message: "I would like an invite to the community channels.",
      };
    }
    if (intent === "project" && project) {
      return {
        topic: "Join a project",
        message: `I would like to contribute to ${project.title}.`,
      };
    }
    if (intent === "team" && member) {
      return {
        topic: "General question",
        message: `I would like to reach ${member}.`,
      };
    }
    if (event) {
      return {
        topic: "Event seat",
        message: `I would like a seat at ${event.title} on ${event.date}.`,
      };
    }
    return { topic: "General question", message: "" };
  }, [event, intent, member, project]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof topics)[number]>(
    defaults.topic as (typeof topics)[number],
  );
  const [message, setMessage] = useState(defaults.message);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<Note | null>(null);

  function onSubmit(submitEvent: FormEvent<HTMLFormElement>) {
    submitEvent.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (name.trim().length < 2) nextErrors.name = "Tell us what to call you.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "That email does not look complete.";
    }
    if (message.trim().length < 20) {
      nextErrors.message = "Add a little more detail, at least a sentence.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const note: Note = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      topic,
      message: message.trim(),
    };
    writeList("c2c-messages", [...readList<Note>("c2c-messages"), note]);
    setSent(note);
  }

  if (sent) {
    return (
      <GlassCard>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Message captured
        </p>
        <h2 className="mt-3 font-display text-3xl text-white">Thanks, {sent.name}.</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Your note about {sent.topic.toLowerCase()} is saved in this browser. Delivery to the
          studio inbox starts when email is connected. You can also write{" "}
          <a className="text-cyan-100 hover:text-white" href="mailto:hello@code2chill.dev">
            hello@code2chill.dev
          </a>{" "}
          directly.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setSent(null);
              setMessage("");
            }}
          >
            Write another note
          </Button>
          <Button href="/events">See the calendar</Button>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm text-slate-200">
              Name
            </label>
            <input
              id="contact-name"
              value={name}
              onChange={(input) => setName(input.target.value)}
              className={fieldClass}
              autoComplete="name"
            />
            {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm text-slate-200">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(input) => setEmail(input.target.value)}
              className={fieldClass}
              autoComplete="email"
            />
            {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
          </div>
        </div>
        <div>
          <label htmlFor="contact-topic" className="mb-2 block text-sm text-slate-200">
            Topic
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(input) => setTopic(input.target.value as (typeof topics)[number])}
            className={fieldClass}
          >
            {topics.map((item) => (
              <option key={item} value={item} className="bg-[#0c1222]">
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm text-slate-200">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(input) => setMessage(input.target.value)}
            rows={6}
            className={fieldClass}
          />
          {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
        </div>
        <Button type="submit">Send message</Button>
      </form>
    </GlassCard>
  );
}
