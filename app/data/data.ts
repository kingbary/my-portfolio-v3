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
    year: "2025",
    role: "Senior Frontend Engineer",
    stack: ["NextJS", "TypeScript", "TailwindCSS"],
    tag: ["fintech", "banking"],
    blurb:
      "Leading frontend development for the bank\u2019s digital banking platform. Designed a feature-based architecture where each page owns its own data fetching, with all backend communication routed through a centralised authenticated HTTP client \u2014 auth, error handling, and logging in one place. Built resilient error and loading states and a reusable component library across banking surfaces.",
    did: [
      "Designed a feature-based architecture where each page owns its own data fetching.",
      "Routed all backend communication through a centralised authenticated HTTP client \u2014 auth, error handling, and logging in one place.",
      "Built resilient error and loading states around every banking request.",
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
    year: "2025",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    tag: ["advertising"],
    blurb:
      "Architecting the creator and advertiser dashboards for Lohli. Built a shared component library for brand consistency across both surfaces, added SSR and code-splitting for faster loads, and integrated real-time analytics for ad engagement tracking.",
    did: [
      "Architected the creator and advertiser dashboards as one frontend ecosystem.",
      "Built a shared component library that keeps the brand consistent across both surfaces.",
      "Added SSR and code-splitting to cut initial load times.",
      "Integrated real-time analytics for ad engagement tracking.",
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
    year: "2025",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "REST APIs", "TailwindCSS"],
    tag: "fintech",
    blurb:
      "Built dashboards giving live visibility into transaction success rates, terminal health, and merchant performance. Engineered the instant settlement UI \u2014 merchants see cleared funds without chasing support. Also shipped a VAS hub for airtime, utilities, and insurance.",
    did: [
      "Built dashboards with live visibility into transaction success rates and terminal health.",
      "Engineered the instant settlement UI \u2014 merchants see cleared funds without chasing support.",
      "Surfaced merchant performance metrics the operations team could act on.",
      "Shipped a VAS hub covering airtime, utilities, and insurance.",
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
    year: "2023 \u2014 25",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "Flutterwave", "TailwindCSS"],
    tag: "product",
    blurb:
      "Built the storefront and checkout flow with Flutterwave integration, processing over 1,000 subscriptions. Architected a design system used across the full platform and mentored junior engineers on optimisation and code quality.",
    did: [
      "Built the storefront and checkout flow end to end.",
      "Integrated Flutterwave payments — over 1,000 subscriptions processed.",
      "Architected a design system used across the full platform.",
      "Mentored junior engineers on optimisation and code quality.",
    ],
    metric: "1k+",
    metricLabel: "subscriptions",
  },
  {
    id: "neupay",
    index: "05",
    name: "neupay-admin",
    title:
      "High-security admin dashboard for escrow transactions and fund management",
    client: "Neupay HQ",
    year: "2024 \u2014 25",
    role: "Frontend Lead",
    stack: ["React", "TypeScript", "GraphQL"],
    tag: "fintech",
    blurb:
      "Led the frontend team in building a high-security admin console for escrow transaction management. End-to-end fund transparency through robust validation, secure API integration, and an audit-trail UI that operations actually trusted.",
    did: [
      "Led the frontend team building the escrow admin console.",
      "Implemented robust validation around every fund operation.",
      "Integrated the GraphQL API with a security-first posture — end-to-end fund transparency.",
      "Built an audit-trail UI that operations actually trusted.",
    ],
    metric: "led",
    metricLabel: "frontend team",
  },
  {
    id: "twoone",
    index: "06",
    name: "kaban",
    title:
      "High-fidelity UI component suite for a real estate search and listings platform",
    client: "Twoone Technologies",
    year: "2022 \u2014 23",
    role: "Frontend Engineer",
    stack: ["React", "TypeScript", "CSS Modules"],
    tag: "product",
    blurb:
      "Developed the full component library for a real estate platform \u2014 property cards, search filters, listing detail views, and navigation. Part-time over two years, focused on fidelity and keeping the search experience fast.",
    did: [
      "Developed the full component library \u2014 property cards, search filters, listing detail views, and navigation.",
      "Matched the designs at high fidelity, down to the interaction details.",
      "Kept the search and filtering experience fast as the listing count grew.",
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
    d: "Bundle analysis, render profiling, and a prioritised list of what to fix first. No full rewrite required \u2014 usually.",
  },
];

export const RESUME = [
  {
    y: "2025 \u2014",
    r: "Senior Frontend Engineer",
    c: "Kids Microfinance Bank",
    d: "Contract. Leading frontend development for the digital banking platform \u2014 feature-based architecture, a centralised authenticated HTTP client, resilient error handling around banking requests, and a shared component library.",
    hash: "e2b8f14",
  },
  {
    y: "2025 \u2014",
    r: "Frontend Engineer",
    c: "Lohli Africa",
    d: "Building the complete frontend ecosystem for an advertising platform. Component library, SSR performance work, and real-time engagement analytics across creator and advertiser surfaces.",
    hash: "c4d9e71",
  },
  {
    y: "2025",
    r: "Frontend Engineer",
    c: "Itex Integrated Services",
    d: "Contract. POS monitoring dashboards, instant settlement UI, and a VAS service hub \u2014 expanding the POS ecosystem beyond payments into a full-service financial kiosk.",
    hash: "a8f3b20",
  },
  {
    y: "2023 \u2014 25",
    r: "Frontend Engineer",
    c: "Zedi Inc",
    d: "E-commerce platform with Flutterwave integration (1k+ subscriptions). Designed the component system, mentored junior engineers, and saw the product through two years of growth.",
    hash: "b5e7c93",
  },
  {
    y: "2024 \u2014 25",
    r: "Frontend Engineer",
    c: "Neupay HQ",
    d: "Contract, remote. Led the frontend team on a high-security admin dashboard for escrow transactions, with robust validation and secure API integration for end-to-end fund transparency.",
    hash: "d7c2a58",
  },
  {
    y: "2022 \u2014 23",
    r: "Frontend Engineer",
    c: "Twoone Technologies",
    d: "Part-time. Built the UI component suite for a real estate application. First long-term team codebase \u2014 learned as much about collaboration as about component design.",
    hash: "2f1a840",
  },
  {
    y: "2021",
    r: "Frontend Developer",
    c: "The RootHub",
    d: "Internship. Translated Figma designs into responsive UI with HTML, CSS, and JavaScript, and assisted with performance audits \u2014 the foundation for later fintech and e-commerce work.",
    hash: "91c0e37",
  },
];
