import type { Person, Testimonial } from "@/data/types";

export const team: Person[] = [
  {
    slug: "mira-kapoor",
    name: "Mira Kapoor",
    role: "Studio lead",
    domain: "Product engineering",
    focus: "Keeps club projects shippable and the Friday hard stop intact.",
    bio: "Mira started CODE 2 CHILL after a hackathon weekend that ran until Monday. She now runs the project board, the maintainer rotation, and the part of the night where laptops actually close.",
  },
  {
    slug: "jonah-ellis",
    name: "Jonah Ellis",
    role: "Programs",
    domain: "Events",
    focus: "Builds the season calendar and the rooms people can find.",
    bio: "Jonah plans workshops, clinics, and demo day. He writes the run-of-show, books the quiet room, and publishes the notes the morning after.",
  },
  {
    slug: "amina-diallo",
    name: "Amina Diallo",
    role: "Applied AI",
    domain: "Applied AI",
    focus: "Owns evals, traces, and the decision to not use a model.",
    bio: "Amina leads Northwind and the agent workshop. She cares more about a failed test we can read than a demo that only works once.",
  },
  {
    slug: "theo-park",
    name: "Theo Park",
    role: "Interface",
    domain: "Interface craft",
    focus: "Holds the visual system and the critique circle.",
    bio: "Theo designs Glasshouse and facilitates interface reviews. If a screen needs a paragraph of explanation, he sends it back with one change.",
  },
  {
    slug: "luis-ortega",
    name: "Luis Ortega",
    role: "Infrastructure",
    domain: "Cloud & infrastructure",
    focus: "Staging, cost, and the deploys we are willing to leave on.",
    bio: "Luis keeps Harbor's offline queue honest and runs the cloud cost clinic. He would like every side project to have a budget alert.",
  },
  {
    slug: "nora-feldman",
    name: "Nora Feldman",
    role: "Security",
    domain: "Security",
    focus: "Reviews, tabletops, and keys that do not live in a slide.",
    bio: "Nora runs security clinics and the maintainer checklist. She would rather delay a demo than ship a token in a client bundle.",
  },
  {
    slug: "priya-shah",
    name: "Priya Shah",
    role: "Community",
    domain: "Community",
    focus: "First nights, mentor matching, and the tone of the room.",
    bio: "Priya hosts build night and coordinates Northwind's human overrides. New members meet her before they meet the repo.",
  },
  {
    slug: "evan-brooks",
    name: "Evan Brooks",
    role: "Learning",
    domain: "Learning resources",
    focus: "Turns sessions into paths people can follow later.",
    bio: "Evan edits the learning tracks and the study-circle packets. He keeps the list short enough to finish during the semester.",
  },
];

export const advisors = [
  {
    name: "Dr. Helen Park",
    role: "Faculty advisor",
    focus: "Human-computer interaction",
    copy: "Sponsors the studio space and reviews demo-day notes for the department.",
  },
  {
    name: "Samir Rahman",
    role: "Industry mentor",
    focus: "Platform engineering",
    copy: "Takes one office hour a month and the occasional production-readiness review.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I showed up knowing Git and not much else. Someone put me on the beginner lane, and I merged a real empty state before the hard stop.",
    name: "Hannah Cole",
    detail: "Member, second-year CS",
  },
  {
    quote:
      "Critique circle was the first review that told me what to change on the screen, not how to feel about my potential.",
    name: "Malik Rahman",
    detail: "Member, interface track",
  },
  {
    quote:
      "I mentor one hour a month. They send a brief, a time box, and a note afterward. It respects the hour I actually have.",
    name: "Grace Liu",
    detail: "Alumni mentor",
  },
  {
    quote:
      "Demo day has no trophy table. You leave with written notes and one issue you agreed to close. That is the part I stayed for.",
    name: "Owen Blake",
    detail: "Member, mobile projects",
  },
];
