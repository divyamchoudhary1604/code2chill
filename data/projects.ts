import type { Project } from "@/data/types";

export const projects: Project[] = [
  {
    slug: "harbor",
    title: "Harbor",
    domain: "product",
    status: "Shipped",
    summary:
      "Door check-in for studio events, with an offline queue for the moment the campus wifi blinks.",
    story:
      "Hosts were writing names on paper and losing the second page. Harbor is a small check-in desk: search, QR pass, and a queue that syncs when the network returns. It has run four events without a spreadsheet on the side.",
    outcome:
      "Average check-in dropped under fifteen seconds, and the morning-after attendance note writes itself.",
    stack: ["Next.js", "TypeScript", "SQLite", "PWA"],
    contributors: ["Mira Kapoor", "Luis Ortega", "Evan Brooks"],
    featured: true,
  },
  {
    slug: "lumen-notes",
    title: "Lumen Notes",
    domain: "product",
    status: "In progress",
    summary:
      "Shared notes for study circles, with sources attached and a page that is safe to publish.",
    story:
      "Wednesday circles were disappearing into six different docs. Lumen keeps one page per session: the reading, the exercise, and the questions that should survive until next week. Publishing strips personal asides before anything leaves the circle.",
    outcome:
      "Three circles already run on it. The public archive opens after winter demo day.",
    stack: ["React", "TypeScript", "Markdown", "Postgres"],
    contributors: ["Theo Park", "Priya Shah", "Nora Feldman"],
    featured: true,
  },
  {
    slug: "northwind",
    title: "Northwind",
    domain: "ai",
    status: "In progress",
    summary:
      "Mentor matching that explains itself, instead of hiding the reason inside a score.",
    story:
      "The old matching sheet sorted people by availability and hope. Northwind reads a short brief, suggests three mentors, and shows the overlapping skills in plain language. A coordinator can override every suggestion, and the override is kept.",
    outcome:
      "Last month's circle used it for fourteen matches. Coordinators changed four, all for reasons the model could not see.",
    stack: ["Python", "TypeScript", "Postgres"],
    contributors: ["Amina Diallo", "Mira Kapoor"],
    featured: true,
  },
  {
    slug: "quiet-queue",
    title: "Quiet Queue",
    domain: "product",
    status: "Shipped",
    summary:
      "Office-hour signup that shows the wait without making a hallway out of the studio.",
    story:
      "Monday office hours used to be a cluster at the door. Quiet Queue gives each mentor a short list, a time box, and a way to mark 'come back with a smaller question.'",
    outcome:
      "Mentors keep the hour. Members can see whether waiting is worth it before they cross campus.",
    stack: ["Next.js", "TypeScript"],
    contributors: ["Jonah Ellis", "Priya Shah"],
    featured: false,
  },
  {
    slug: "glasshouse",
    title: "Glasshouse",
    domain: "design",
    status: "In progress",
    summary:
      "The interface kit behind club tools: type, color, and the components we were rebuilding every weekend.",
    story:
      "Harbor and Quiet Queue had drifted into cousin designs. Glasshouse is the shared kit: dark surfaces, one gradient, and components with written do-and-don't notes from critique circle.",
    outcome:
      "New club tools start from the kit. The public storybook is part of this website's design language.",
    stack: ["React", "Tailwind CSS", "Storybook"],
    contributors: ["Theo Park", "Evan Brooks"],
    featured: false,
  },
  {
    slug: "ledger",
    title: "Ledger",
    domain: "data",
    status: "Incubating",
    summary:
      "A plain budget for workshops: food, swag, and the invoice someone always forgets.",
    story:
      "Season costs lived in a chat thread. Ledger is a single sheet with owners, receipts, and a monthly note the faculty advisor can actually read.",
    outcome:
      "Still in the first season. The data model is agreed; the import from last year's sheet is the remaining work.",
    stack: ["TypeScript", "Postgres"],
    contributors: ["Luis Ortega", "Jonah Ellis"],
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
