const items = [
  'TypeScript', 'Go', 'Rust', 'Postgres', 'Kafka', 'ClickHouse',
  'Redis', 'Terraform', 'Neovim', 'Linux', 'gRPC', 'CRDT',
  'Event sourcing', 'Distributed systems', 'Developer tooling',
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
