const items = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'REST APIs',
  'SSR', 'Code-splitting', 'Design systems', 'Component libraries',
  'Fintech & banking UI', 'Payment integrations', 'Real-time dashboards',
  'Performance audits', 'Figma-to-code',
];

const row = [...items, ...items];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((x, i) => (
          <span key={i} className="m-item">
            <span className="m-dot">◆</span> {x}
          </span>
        ))}
      </div>
    </div>
  );
}
