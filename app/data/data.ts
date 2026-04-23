export interface Project {
  id: string;
  index: string;
  name: string;
  title: string;
  client: string;
  year: string;
  role: string;
  stack: string[];
  tag: string;
  blurb: string;
  metric: string;
  metricLabel: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'lohli',
    index: '01',
    name: 'lohli-platform',
    title: 'Frontend ecosystem for an ad platform connecting brands, creators, and viewers',
    client: 'Lohli Africa',
    year: '2025',
    role: 'Software Engineer',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'React'],
    tag: 'product',
    blurb:
      'Architecting the creator and advertiser dashboards for Lohli. Built a shared component library for brand consistency across both surfaces, added SSR and code-splitting for faster loads, and integrated real-time analytics for ad engagement tracking.',
    metric: 'real-time',
    metricLabel: 'ad analytics',
  },
  {
    id: 'itex',
    index: '02',
    name: 'itex-pos',
    title: 'POS monitoring dashboards with live transaction visibility and instant merchant settlement',
    client: 'Itex Integrated Services',
    year: '2025',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'REST APIs', 'TailwindCSS'],
    tag: 'fintech',
    blurb:
      'Built dashboards giving live visibility into transaction success rates, terminal health, and merchant performance. Engineered the instant settlement UI — merchants see cleared funds without chasing support. Also shipped a VAS hub for airtime, utilities, and insurance.',
    metric: 'live',
    metricLabel: 'txn monitoring',
  },
  {
    id: 'zedi',
    index: '03',
    name: 'zedi-commerce',
    title: 'E-commerce platform with Flutterwave payment integration and a scalable design system',
    client: 'Zedi Inc',
    year: '2024',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'Flutterwave', 'TailwindCSS'],
    tag: 'product',
    blurb:
      'Built the storefront and checkout flow with Flutterwave integration, processing over 1,000 subscriptions. Architected a design system used across the full platform and mentored two junior engineers on optimisation and code quality.',
    metric: '1k+',
    metricLabel: 'subscriptions',
  },
  {
    id: 'neupay',
    index: '04',
    name: 'neupay-admin',
    title: 'High-security admin dashboard for escrow transactions and fund management',
    client: 'Neupay HQ',
    year: '2024',
    role: 'Frontend Lead',
    stack: ['React', 'TypeScript', 'GraphQL'],
    tag: 'fintech',
    blurb:
      'Led the frontend team in building a high-security admin console for escrow transaction management. End-to-end fund transparency through robust validation, secure API integration, and an audit-trail UI that operations actually trusted.',
    metric: 'led',
    metricLabel: 'frontend team',
  },
  {
    id: 'twoone',
    index: '05',
    name: 'twoone-realty',
    title: 'High-fidelity UI component suite for a real estate search and listings platform',
    client: 'Twoone Technologies',
    year: '2023',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'CSS Modules'],
    tag: 'product',
    blurb:
      'Developed the full component library for a real estate platform — property cards, search filters, listing detail views, and navigation. Part-time over two years, focused on fidelity and keeping the search experience fast.',
    metric: 'hi-fi',
    metricLabel: 'component lib',
  },
];

export const SERVICES = [
  {
    k: '/01',
    t: 'frontend engineering',
    d: 'Production-grade React and Next.js applications. SSR, code-splitting, and the performance details that keep users from leaving.',
  },
  {
    k: '/02',
    t: 'design systems',
    d: 'Component libraries that scale across products without becoming a maintenance burden. Figma-to-code, design tokens, and documentation.',
  },
  {
    k: '/03',
    t: 'fintech & payments UI',
    d: 'Dashboards, settlement flows, and admin interfaces built with the accuracy that financial software demands.',
  },
  {
    k: '/04',
    t: 'performance audits',
    d: 'Bundle analysis, render profiling, and a prioritised list of what to fix first. No full rewrite required — usually.',
  },
];

export const RESUME = [
  {
    y: '2025 —',
    r: 'Software Engineer',
    c: 'Lohli Africa',
    d: 'Building the complete frontend ecosystem for an advertising platform. Component library, SSR performance work, and real-time engagement analytics across creator and advertiser surfaces.',
    hash: 'c4d9e71',
  },
  {
    y: '2025',
    r: 'Frontend Engineer',
    c: 'Itex Integrated Services',
    d: 'Contract. POS monitoring dashboards, instant settlement UI, and a VAS service hub — expanding the POS ecosystem beyond payments into a full-service financial kiosk.',
    hash: 'a8f3b20',
  },
  {
    y: '2023 — 25',
    r: 'Frontend Engineer',
    c: 'Zedi Inc',
    d: 'E-commerce platform with Flutterwave integration (1k+ subscriptions). Designed the component system, mentored junior engineers, and saw the product through two years of growth.',
    hash: 'b5e7c93',
  },
  {
    y: '2022 — 23',
    r: 'Frontend Engineer',
    c: 'Twoone Technologies',
    d: 'Part-time. Built the UI component suite for a real estate application. First long-term team codebase — learned as much about collaboration as about component design.',
    hash: '2f1a840',
  },
];
