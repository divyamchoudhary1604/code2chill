import type { ResourceTrack } from "@/data/types";

export const tracks: ResourceTrack[] = [
  {
    slug: "web",
    title: "Web platforms",
    description:
      "The path we expect before someone takes a Harbor issue labeled good-first-change.",
    modules: [
      {
        title: "React foundations",
        source: "React docs",
        href: "https://react.dev/learn",
        level: "Start here",
        minutes: 90,
        summary: "Components, state, and the mental model behind the club's interface kit.",
      },
      {
        title: "App Router essentials",
        source: "Next.js docs",
        href: "https://nextjs.org/docs/app",
        level: "Build next",
        minutes: 75,
        summary: "Routes, layouts, and loading states, which is how this site is structured.",
      },
      {
        title: "TypeScript for React",
        source: "TypeScript handbook",
        href: "https://www.typescriptlang.org/docs/handbook/intro.html",
        level: "Use daily",
        minutes: 60,
        summary: "Types at the boundaries. We would rather a red squiggle than a surprise at demo day.",
      },
    ],
  },
  {
    slug: "ai",
    title: "Applied AI",
    description:
      "Enough Python and model hygiene to follow the Northwind reviews and the December workshop.",
    modules: [
      {
        title: "Python tutorial",
        source: "Python docs",
        href: "https://docs.python.org/3/tutorial/",
        level: "Start here",
        minutes: 80,
        summary: "Language basics before anyone opens a notebook in the study circle.",
      },
      {
        title: "PyTorch basics",
        source: "PyTorch tutorials",
        href: "https://pytorch.org/tutorials/beginner/basics/intro.html",
        level: "Build next",
        minutes: 90,
        summary: "Tensors, data, and a training loop small enough to explain out loud.",
      },
      {
        title: "Transformer docs",
        source: "Hugging Face",
        href: "https://huggingface.co/docs/transformers/index",
        level: "Go deeper",
        minutes: 70,
        summary: "How we read model cards and pipelines before putting one in a product.",
      },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud & infrastructure",
    description:
      "The short list Luis sends before the cost clinic. Bring a project, not a certificate.",
    modules: [
      {
        title: "Docker overview",
        source: "Docker docs",
        href: "https://docs.docker.com/get-started/",
        level: "Start here",
        minutes: 45,
        summary: "Images, containers, and why 'it works on my laptop' is a fixable sentence.",
      },
      {
        title: "Kubernetes basics",
        source: "Kubernetes docs",
        href: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
        level: "Build next",
        minutes: 70,
        summary: "Only the basics. Most club apps should not start here, and the tutorial says why.",
      },
      {
        title: "Postgres tutorial",
        source: "PostgreSQL docs",
        href: "https://www.postgresql.org/docs/current/tutorial.html",
        level: "Use daily",
        minutes: 60,
        summary: "Tables, queries, and the shape of the data Ledger and Lumen Notes share.",
      },
    ],
  },
  {
    slug: "security",
    title: "Security practice",
    description:
      "Read these before you touch auth, tokens, or anything a member would mind seeing leaked.",
    modules: [
      {
        title: "OWASP Top 10",
        source: "OWASP",
        href: "https://owasp.org/www-project-top-ten/",
        level: "Start here",
        minutes: 50,
        summary: "The list we use to name risks in project reviews without inventing new vocabulary.",
      },
      {
        title: "Web security",
        source: "MDN",
        href: "https://developer.mozilla.org/en-US/docs/Web/Security",
        level: "Build next",
        minutes: 55,
        summary: "HTTPS, cookies, and the browser rules behind a normal club web app.",
      },
      {
        title: "Code security overview",
        source: "GitHub docs",
        href: "https://docs.github.com/en/code-security",
        level: "Practice",
        minutes: 40,
        summary: "How we talk about secrets, dependencies, and reviews on the club repos.",
      },
    ],
  },
];
