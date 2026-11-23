export type IconName =
  | "Brain"
  | "Cloud"
  | "Code2"
  | "Database"
  | "GitBranch"
  | "Palette"
  | "Shield"
  | "Smartphone";

export type Domain = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  track?: string;
};

export type ClubEvent = {
  slug: string;
  title: string;
  kind: "Build night" | "Workshop" | "Showcase" | "Clinic";
  date: string;
  time: string;
  location: string;
  mode: "In person" | "Hybrid" | "Online";
  summary: string;
  description: string;
  agenda: { time: string; title: string; detail: string }[];
  seats: number;
  upcoming: boolean;
};

export type ProjectStatus = "Shipped" | "In progress" | "Incubating";

export type Project = {
  slug: string;
  title: string;
  domain: string;
  status: ProjectStatus;
  summary: string;
  story: string;
  outcome: string;
  stack: string[];
  contributors: string[];
  featured: boolean;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  domain: string;
  focus: string;
  bio: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type ResourceModule = {
  title: string;
  source: string;
  href: string;
  level: string;
  minutes: number;
  summary: string;
};

export type ResourceTrack = {
  slug: string;
  title: string;
  description: string;
  modules: ResourceModule[];
};
