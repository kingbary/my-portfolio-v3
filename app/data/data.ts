export interface Project {
  id: string;
  index: string;
  name: string;
  title: string;
  client: string;
  year: string;
  role: string;
  stack: string[];
  tag: string | string[];
  blurb: string;
  did: string[];
  image?: string;
  metric: string;
  metricLabel: string;
}

export const PROJECTS: Project[] = [
  {
    id: "kids-mfb",
    index: "01",
    name: "kids-microfinance-bank",
    title:
      "Digital banking platform frontend with feature-based architecture and a centralised authenticated HTTP client",
    client: "Kids Microfinance Bank",
    year: "2025 — present",
    role: "Senior Frontend Engineer",
    stack: ["NextJS", "TypeScript", "TailwindCSS"],
    tag: ["fintech", "banking"],
    blurb:
      "Leading frontend development for the bank’s digital banking platform, mentoring engineers and establishing the architectural patterns the team built against. Designed a feature-based architecture where each page owns its own data fetching, with all backend communication routed through a centralised authenticated HTTP client — auth, error handling, and logging in one place. Built resilient error and loading states and a reusable component library across banking surfaces.",
    did: [
      "Led frontend development for the digital banking platform, mentoring engineers and establishing the team's architectural conventions.",
      "Designed a feature-based architecture where each page owns its own data fetching and mutations.",
      "Routed all backend communication through a centralised authenticated HTTP client — auth, error handling, and logging in one place.",
      "Built resilient error and loading states, surfacing clear feedback on failed or timed-out banking requests while validating financial inputs client-side.",
      "Grew a reusable component library shared across the banking surfaces.",
    ],
    image: "/images/kids-bank-hero.webp",
    metric: "lead",
    metricLabel: "digital banking",
  },
  {
    id: "lohli",
    index: "02",
    name: "lohli-platform",
    title:
      "Frontend ecosystem for an ad platform connecting brands, creators, and viewers",
    client: "Lohli Africa",
    year: "2025 — present",
    role: "Senior Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    tag: ["advertising"],
    blurb:
      "Architecting and developing the frontend ecosystem for Lohli, an advertising platform connecting brands, creators, and viewers. Built a shared component library for brand consistency across the creator and advertiser dashboards, added SSR and code-splitting for faster loads, and integrated real-time analytics for ad engagement tracking.",
    did: [
      "Architected and developed the frontend ecosystem for the creator and advertiser dashboards.",
      "Built a modular UI component library that keeps the brand consistent across both surfaces.",
      "Improved application load times with advanced code-splitting and SSR via Next.js.",
      "Integrated real-time analytics for creators to monitor viewer engagement and ad performance.",
    ],
    image: "/images/Lohli-00.webp",
    metric: "real-time",
    metricLabel: "ad analytics",
  },
  {
    id: "itex",
    index: "03",
    name: "itex-pos",
    title:
      "POS monitoring dashboards with live transaction visibility and instant merchant settlement",
    client: "Itex Integrated Services",
    year: "2024 — 25",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "REST APIs", "TailwindCSS"],
    tag: "fintech",
    blurb:
      "Built dashboards giving live visibility into transaction success rates, terminal health, and merchant performance. Engineered the frontend workflow for an automated settlement engine, reducing payout latency. Also architected a modular VAS hub for airtime, utilities, and insurance.",
    did: [
      "Built monitoring dashboards with live visibility into transaction success rates and terminal health.",
      "Engineered the frontend workflow for an automated settlement engine, reducing payout latency.",
      "Surfaced merchant performance metrics the operations team could act on.",
      "Architected a modular VAS hub covering airtime, utility bills, and insurance.",
    ],
    metric: "live",
    metricLabel: "txn monitoring",
  },
  {
    id: "zedi",
    index: "04",
    name: "SendMercury",
    title:
      "E-commerce platform with Flutterwave payment integration and a scalable design system",
    client: "Zedi Inc",
    year: "2023 — 24",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Flutterwave", "TailwindCSS"],
    tag: "product",
    blurb:
      "Built the storefront and checkout flow with Flutterwave integration, processing over 1,000 subscriptions. Architected a scalable design system for managing e-commerce products and streamlining delivery workflows, and mentored junior engineers on code optimisation and bug fixing.",
    did: [
      "Built the storefront and checkout flow end to end.",
      "Integrated Flutterwave payments — over 1,000 subscriptions processed.",
      "Architected a scalable design system for managing e-commerce products and delivery workflows.",
      "Partnered with a team of four and mentored junior members on code optimisation and bug fixing.",
    ],
    metric: "1k+",
    metricLabel: "subscriptions",
  },
  {
    id: "twoone",
    index: "05",
    name: "kaban",
    title:
      "High-fidelity UI component suite for a real estate search and listings platform",
    client: "Twoone Technologies",
    year: "2022 — 23",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "CSS Modules"],
    tag: "product",
    blurb:
      "Developed high-fidelity UI components for a real estate platform — property cards, search filters, listing detail views, and navigation. Part-time over two years, focused on fidelity and keeping the search experience fast.",
    did: [
      "Developed high-fidelity UI components — property cards, search filters, listing detail views, and navigation.",
      "Matched the designs at high fidelity, down to the interaction details.",
      "Improved user navigation and property search efficiency.",
      "Maintained the suite part-time over two years alongside the core team.",
    ],
    metric: "hi-fi",
    metricLabel: "component lib",
  },
];

export const SERVICES = [
  {
    k: "/01",
    t: "frontend engineering",
    d: "Production-grade React and Next.js applications. SSR, code-splitting, and the performance details that keep users from leaving.",
  },
  {
    k: "/02",
    t: "design systems",
    d: "Component libraries that scale across products without becoming a maintenance burden. Figma-to-code, design tokens, and documentation.",
  },
  {
    k: "/03",
    t: "fintech & banking UI",
    d: "Digital banking platforms, settlement flows, and admin dashboards built with the accuracy and security posture that financial software demands.",
  },
  {
    k: "/04",
    t: "performance audits",
    d: "Bundle analysis, render profiling, and a prioritised list of what to fix first. No full rewrite required — usually.",
  },
];

export const RESUME = [
  {
    y: "Dec 2025 —",
    r: "Senior Frontend Engineer",
    c: "Kids Microfinance Bank",
    d: "Contract. Leading frontend development for the digital banking platform — feature-based architecture, a centralised authenticated HTTP client, resilient error handling around banking requests, and a shared component library.",
    hash: "e2b8f14",
  },
  {
    y: "May 2025 —",
    r: "Senior Frontend Engineer",
    c: "Lohli Africa",
    d: "Full-time. Building the complete frontend ecosystem for an advertising platform. Component library, SSR performance work, and real-time engagement analytics across creator and advertiser surfaces.",
    hash: "c4d9e71",
  },
  {
    y: "Nov 2024 — May 2025",
    r: "Frontend Engineer",
    c: "Itex Integrated Services",
    d: "Contract. POS monitoring dashboards, an automated settlement engine, and a VAS service hub — expanding the POS ecosystem beyond payments into a full-service financial kiosk.",
    hash: "a8f3b20",
  },
  {
    y: "Dec 2023 — Nov 2024",
    r: "Frontend Engineer",
    c: "Zedi Inc",
    d: "Contract. E-commerce platform with Flutterwave integration (1k+ subscriptions). Designed the component system and mentored junior engineers on code optimisation and bug fixing.",
    hash: "b5e7c93",
  },
  {
    y: "Jan 2022 — Nov 2023",
    r: "Frontend Engineer",
    c: "Twoone Technologies",
    d: "Part-time. Built high-fidelity UI components for a real estate application, improving navigation and property search efficiency.",
    hash: "2f1a840",
  },
  {
    y: "Jan — Jun 2021",
    r: "Frontend Developer",
    c: "The RootHub",
    d: "Internship. Translated Figma designs into responsive UI with HTML, CSS, and JavaScript, and assisted with performance audits — the foundation for later fintech and e-commerce work.",
    hash: "91c0e37",
  },
];
