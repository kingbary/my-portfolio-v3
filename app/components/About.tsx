import SectionHeader from './section-header';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="shell">
        <SectionHeader tag="03" cmd="cat ~/about.md" title="about" />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m Kingsley. I&apos;ve been writing code professionally for about ten years,
              starting on scrappy PHP monoliths and ending up on distributed systems
              that move real money. Somewhere in the middle I learned Rust, gave up
              on microservices as a default, and came around to the idea that{' '}
              <em>boring technology is a feature</em>.
            </p>
            <p>
              I care about latency, error budgets, and readable code. I don&apos;t care
              about framework wars. I write things down before I build them. I like
              working with small teams who trust each other.
            </p>
            <p>
              Outside work: mandolin, pickup basketball, and a slow pile of books
              about cities.
            </p>
          </div>
          <aside className="about-aside">
            <div className="aside-block">
              <div className="aside-label">// currently</div>
              <div>Staff Engineer @ Oredata</div>
              <div className="dim">Lagos / Remote · 2023 — now</div>
            </div>
            <div className="aside-block">
              <div className="aside-label">// previously</div>
              <div>Senior SWE @ Ledgerline</div>
              <div>Backend @ PaddleWorks</div>
              <div>Full-stack @ freelance</div>
            </div>
            <div className="aside-block">
              <div className="aside-label">// tools I reach for</div>
              <div className="chips">
                {['TypeScript', 'Go', 'Rust', 'Postgres', 'ClickHouse', 'Redis', 'Kafka', 'Terraform', 'Linux', 'Neovim'].map(
                  (x) => <span key={x} className="chip">{x}</span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
