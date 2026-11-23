import type { ClubEvent } from "@/data/types";

export const events: ClubEvent[] = [
  {
    slug: "friday-build-night-harbor",
    title: "Friday Build Night: Harbor check-in",
    kind: "Build night",
    date: "Friday, Dec 4, 2026",
    time: "7:00–10:00 PM",
    location: "Innovation Hall, Studio 214",
    mode: "In person",
    summary:
      "Close the remaining check-in bugs on Harbor before winter demo day. New contributors get a paired setup lane.",
    description:
      "Harbor is the studio's event check-in. This build night is for the QR fallback, the offline queue, and the empty state hosts actually see at the door. Bring a laptop. We keep a beginner lane that starts from the README, and a review lane for people who already have the repo running.",
    agenda: [
      {
        time: "7:00",
        title: "Doors and setup",
        detail: "Wifi, issue claims, and a two-minute tour of the staging build.",
      },
      {
        time: "7:20",
        title: "Lane kickoff",
        detail: "Beginner setup, offline queue, and host-screen polish.",
      },
      {
        time: "9:15",
        title: "Review block",
        detail: "Short pull requests only. Maintainers stay at the review table.",
      },
      {
        time: "9:50",
        title: "Notes and hard stop",
        detail: "What merged, what waits, and who opens the studio next Friday.",
      },
    ],
    seats: 28,
    upcoming: true,
  },
  {
    slug: "agentic-workflows-without-the-hype",
    title: "Agentic workflows, without the hype",
    kind: "Workshop",
    date: "Wednesday, Dec 9, 2026",
    time: "6:30–8:00 PM",
    location: "Studio 214 and live stream",
    mode: "Hybrid",
    summary:
      "A working session on tool use, traces, and the boring eval that tells you an agent regressed.",
    description:
      "We wire a small support assistant to three tools, log every step, and break it on purpose. The point is judgment: when a workflow should stay a form, and when an agent is worth the failure modes. Laptops optional if you only want the critique.",
    agenda: [
      {
        time: "6:30",
        title: "The failure we are designing for",
        detail: "A live trace from last month's study-circle bot.",
      },
      {
        time: "6:50",
        title: "Build the narrow version",
        detail: "Three tools, one task, no open-ended chat.",
      },
      {
        time: "7:30",
        title: "Eval and teardown",
        detail: "Ten scripted cases. We keep the ones that failed.",
      },
    ],
    seats: 40,
    upcoming: true,
  },
  {
    slug: "winter-demo-day",
    title: "Winter Demo Day",
    kind: "Showcase",
    date: "Friday, Dec 18, 2026",
    time: "6:00–8:30 PM",
    location: "Innovation Hall atrium",
    mode: "In person",
    summary:
      "Ten-minute demos from club projects and member work, with notes published the next morning.",
    description:
      "Demo day is public. Each team gets ten minutes and three questions. Slides are optional; a running product is not. Alumni mentors sit in the front row and write the review that goes into the project log.",
    agenda: [
      {
        time: "6:00",
        title: "Doors",
        detail: "Name badges, running order, and a quiet room if you need one.",
      },
      {
        time: "6:20",
        title: "Demos",
        detail: "Harbor, Lumen Notes, Northwind, and four member projects.",
      },
      {
        time: "8:00",
        title: "Notes, not awards",
        detail: "We publish written feedback. We do not hand out plastic trophies.",
      },
    ],
    seats: 120,
    upcoming: true,
  },
  {
    slug: "cloud-cost-clinic",
    title: "Cloud cost clinic",
    kind: "Clinic",
    date: "Wednesday, Jan 13, 2027",
    time: "6:00–7:30 PM",
    location: "Online",
    mode: "Online",
    summary:
      "Bring a bill, a staging environment, or a deploy you are afraid to leave running.",
    description:
      "A small clinic for club projects and personal apps. We look at one environment per person: what is always on, what can sleep, and which log line is the expensive one. Come with read access and a number you are willing to say out loud.",
    agenda: [
      {
        time: "6:00",
        title: "A shared bill walkthrough",
        detail: "Harbor's staging account, with the secrets already removed.",
      },
      {
        time: "6:25",
        title: "Office-hour slots",
        detail: "Fifteen minutes each. Have the dashboard open.",
      },
      {
        time: "7:20",
        title: "Leave-behind checklist",
        detail: "Budgets, alerts, and the one resource to delete tonight.",
      },
    ],
    seats: 18,
    upcoming: true,
  },
  {
    slug: "interface-critique-circle",
    title: "Interface critique circle",
    kind: "Workshop",
    date: "Friday, Nov 6, 2026",
    time: "6:30–8:00 PM",
    location: "Studio 214",
    mode: "In person",
    summary:
      "Four member interfaces, reviewed for hierarchy, empty states, and the first thirty seconds.",
    description:
      "A closed session from earlier this month. Notes are in the learning library under interface craft. The next circle is scheduled after winter demo day.",
    agenda: [
      {
        time: "6:30",
        title: "How we critique",
        detail: "Observation, impact, and one suggested change.",
      },
      {
        time: "6:45",
        title: "Four reviews",
        detail: "Lumen Notes, a transit tracker, a portfolio, and a club poster.",
      },
    ],
    seats: 16,
    upcoming: false,
  },
  {
    slug: "security-tabletop",
    title: "Security tabletop: lost laptop",
    kind: "Clinic",
    date: "Thursday, Oct 22, 2026",
    time: "6:00–7:15 PM",
    location: "Studio 214",
    mode: "In person",
    summary:
      "A tabletop on a lost maintainer laptop, leaked staging keys, and who sends the message.",
    description:
      "We walked Harbor's incident notes without touching production. The follow-up checklist now lives in the project README.",
    agenda: [
      {
        time: "6:00",
        title: "The scenario",
        detail: "A laptop, a token, and a demo in nine hours.",
      },
      {
        time: "6:20",
        title: "Roles",
        detail: "Who rotates keys, who talks to members, who writes the log.",
      },
    ],
    seats: 20,
    upcoming: false,
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
