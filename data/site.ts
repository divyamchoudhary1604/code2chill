import type { Domain } from "@/data/types";

export const site = {
  name: "CODE 2 CHILL",
  email: "hello@code2chill.dev",
  studio: "Innovation Hall, Studio 214",
  hours: "Fridays, 7:00–10:00 PM",
  tagline: "Serious builds. Softer nights.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Learn" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "480", label: "Members" },
  { value: "64", label: "Workshops" },
  { value: "22", label: "Shipped projects" },
  { value: "8", label: "Domains" },
] as const;

export const domains: Domain[] = [
  {
    slug: "product",
    title: "Product engineering",
    description:
      "Web apps, APIs, and the unglamorous work that makes a product feel finished.",
    icon: "Code2",
    track: "web",
  },
  {
    slug: "ai",
    title: "Applied AI",
    description:
      "Models that earn a place in a workflow, with evals and a human still in the loop.",
    icon: "Brain",
    track: "ai",
  },
  {
    slug: "cloud",
    title: "Cloud & infrastructure",
    description:
      "Deploys, cost, and the quiet systems that keep a demo from falling over.",
    icon: "Cloud",
    track: "cloud",
  },
  {
    slug: "security",
    title: "Security",
    description:
      "Threat modeling, reviews, and habits that keep club tools from becoming cautionary tales.",
    icon: "Shield",
    track: "security",
  },
  {
    slug: "mobile",
    title: "Mobile",
    description:
      "Small screens, offline moments, and interfaces that still feel calm in a pocket.",
    icon: "Smartphone",
  },
  {
    slug: "design",
    title: "Interface craft",
    description:
      "Type, motion, and critique for people who care how software feels at 11pm.",
    icon: "Palette",
  },
  {
    slug: "data",
    title: "Data",
    description:
      "Schemas, dashboards, and questions that survive contact with a real spreadsheet.",
    icon: "Database",
  },
  {
    slug: "opensource",
    title: "Open source",
    description:
      "Issues, reviews, and maintainership practice on projects other people can run.",
    icon: "GitBranch",
  },
];

export const principles = [
  {
    index: "01",
    title: "A hard stop at ten",
    copy: "Build night ends at 10:00 PM. The best idea in the room can wait until morning.",
  },
  {
    index: "02",
    title: "Critique with a next step",
    copy: "Feedback names what to try next. We skip vague praise and public takedowns.",
  },
  {
    index: "03",
    title: "Ship where someone can use it",
    copy: "Club projects have a maintainer, a README, and a person who asked for the thing.",
  },
];

export const timeline = [
  {
    year: "2023",
    title: "The studio opens",
    copy: "Twelve builders borrow a classroom, bring their own kettles, and agree the night ends on time.",
  },
  {
    year: "2024",
    title: "First public demo day",
    copy: "Six projects ship to other student orgs. The club stops being a group chat with a logo.",
  },
  {
    year: "2025",
    title: "Mentor circle",
    copy: "Alumni and working engineers take monthly office hours. Reviews get sharper and kinder.",
  },
  {
    year: "2026",
    title: "Winter build season",
    copy: "Harbor, Lumen Notes, and Northwind are in active use. The waiting list is a real list.",
  },
];

export const values = [
  {
    title: "Craft over volume",
    copy: "One finished flow beats four abandoned repos with identical READMEs.",
  },
  {
    title: "Rest is scheduled",
    copy: "Recovery is on the calendar, next to the workshop, because both are part of the work.",
  },
  {
    title: "Beginners are expected",
    copy: "Every session names the assumed background. Nobody is quizzed at the door.",
  },
  {
    title: "Credit stays visible",
    copy: "Contributors are named on the project, in the demo, and in the notes afterward.",
  },
];

export const rhythms = [
  {
    day: "Monday",
    title: "Office hours",
    copy: "Bring a stuck bug, a portfolio piece, or a question you do not want to ask in the group chat.",
  },
  {
    day: "Wednesday",
    title: "Study circle",
    copy: "A short reading from the learning tracks, then forty minutes of practice with a partner.",
  },
  {
    day: "Friday",
    title: "Build night",
    copy: "Club projects, personal work, or helping someone else close an issue. Lights out at ten.",
  },
  {
    day: "Monthly",
    title: "Demo day",
    copy: "Ten-minute demos, three questions, and notes published the next morning.",
  },
];

export const memberships = [
  {
    role: "builder",
    title: "Builder",
    copy: "You want a seat at build night, a project to join, and reviews from people who will be direct.",
  },
  {
    role: "mentor",
    title: "Mentor",
    copy: "You can give an hour a month. We match you with a project or a study circle, not an inbox.",
  },
  {
    role: "collaborator",
    title: "Collaborator",
    copy: "You represent another club, a lab, or a studio and want a shared workshop or a tool we already run.",
  },
];

export const openRoles = [
  {
    title: "Workshop facilitator",
    copy: "Host one session this season. We help you cut the outline to fifty minutes.",
  },
  {
    title: "Project maintainer",
    copy: "Take review duty on Harbor or Lumen Notes for a six-week stretch.",
  },
  {
    title: "Community host",
    copy: "Welcome people at the door, keep the hard stop, and write the morning notes.",
  },
];
