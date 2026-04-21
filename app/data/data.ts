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
    id: 'ledger',
    index: '01',
    name: 'ledger-core',
    title: 'Rewriting a billing pipeline to cut reconciliation from 6h to 4min',
    client: 'FinTech · Series C',
    year: '2025',
    role: 'Staff Engineer',
    stack: ['Go', 'Postgres', 'Kafka', 'gRPC'],
    tag: 'infra',
    blurb:
      'Led a six-month rewrite of the core ledger ingest pipeline. Replaced a cron-driven batch system with an event-sourced streaming model. The team sleeps better now.',
    metric: '98% faster',
    metricLabel: 'reconciliation',
  },
  {
    id: 'figwit',
    index: '02',
    name: 'figwit',
    title: 'A tiny CLI that turns Figma design tokens into type-safe code',
    client: 'Open source',
    year: '2024',
    role: 'Creator & maintainer',
    stack: ['TypeScript', 'Bun', 'Figma API'],
    tag: 'tooling',
    blurb:
      'Built out of frustration. Now used by 3k+ teams. Supports Tailwind, CSS vars, SwiftUI, and Jetpack Compose targets. 8kb install.',
    metric: '3.2k ★',
    metricLabel: 'on github',
  },
  {
    id: 'otter',
    index: '03',
    name: 'otter.dash',
    title: 'An internal observability dashboard that actually gets used',
    client: 'Logistics co-op',
    year: '2024',
    role: 'Tech lead',
    stack: ['Next.js', 'ClickHouse', 'D3'],
    tag: 'product',
    blurb:
      'Replaced a Grafana sprawl of 200+ panels with a focused, opinionated dashboard. Engineers stopped ignoring alerts. On-call survey scores doubled.',
    metric: '2.1×',
    metricLabel: 'on-call NPS',
  },
  {
    id: 'paper',
    index: '04',
    name: 'paper.dev',
    title: 'Collaborative markdown editor with real-time cursors and zero telemetry',
    client: 'Side project',
    year: '2023',
    role: 'Solo',
    stack: ['Rust', 'CRDT', 'WebSockets'],
    tag: 'product',
    blurb:
      'A weekend that got out of hand. A principled, minimal writing tool. No AI, no accounts, no tracking — just a URL and a cursor.',
    metric: '0 bytes',
    metricLabel: 'of analytics',
  },
  {
    id: 'relay',
    index: '05',
    name: 'relay-sdk',
    title: 'Webhook delivery infrastructure with exponential backoff and replay',
    client: 'B2B SaaS',
    year: '2023',
    role: 'Lead engineer',
    stack: ['Node', 'Redis', 'Terraform'],
    tag: 'infra',
    blurb:
      'Built the webhook layer customers stopped complaining about. Replay UI, signature verification, dead-letter inspection. Shipped in six weeks.',
    metric: '1.2B',
    metricLabel: 'deliveries/mo',
  },
];

export const SERVICES = [
  {
    k: '/01',
    t: 'systems & infrastructure',
    d: "Event-driven pipelines, ledgers, queues, observability. I design for failure because failure happens.",
  },
  {
    k: '/02',
    t: 'developer tooling',
    d: "Internal CLIs, SDKs, and platforms that shave hours off your team's week. Ergonomics first.",
  },
  {
    k: '/03',
    t: 'technical audits',
    d: 'A fresh pair of eyes on your architecture. I read code, interview your team, and deliver a plain-language report.',
  },
  {
    k: '/04',
    t: 'fractional engineering leadership',
    d: 'Two days a week to help you hire, set direction, and unblock your senior ICs. Open for one more client in Q3.',
  },
];

export const RESUME = [
  {
    y: '2023 —',
    r: 'Staff Engineer',
    c: 'Oredata',
    d: "Leading platform work on the billing & ledger team. Built the event-sourced pipeline currently processing $1.4B/mo.",
    hash: 'a3f8d12',
  },
  {
    y: '2020 — 23',
    r: 'Senior Software Engineer',
    c: 'Ledgerline',
    d: 'Owned webhooks, notifications, and the public API. Grew the platform team from 3 → 9 without losing our minds.',
    hash: 'b7c2e91',
  },
  {
    y: '2018 — 20',
    r: 'Backend Engineer',
    c: 'PaddleWorks',
    d: 'First engineering hire. Shipped the MVP in nine weeks. Stayed through Series A.',
    hash: 'f1a4509',
  },
  {
    y: '2016 — 18',
    r: 'Freelance Full-Stack',
    c: 'Various',
    d: "Built whatever paid. Learned the difference between the code you write and the code that ships.",
    hash: '3d8e741',
  },
];
