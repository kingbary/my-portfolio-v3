import SectionHeader from './section-header';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="shell">
        <SectionHeader tag="03" cmd="cat ~/about.md" title="about" />
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m Kingsley — a frontend engineer with a background in mechanical
              engineering who found his way into UI. I build design-centric React and
              Next.js applications with a strong eye for the details that make
              interfaces feel fast and intentional.
            </p>
            <p>
              I care about component architecture, accessible design, and the kind of
              performance work users actually notice. I write things down before I build
              them, keep codebases tidy, and mentor junior engineers when I get the
              chance.
            </p>
            <p>
              Outside work: football, music, and a reading list that never gets shorter.
            </p>
          </div>
          <aside className="about-aside">
            <div className="aside-block">
              <div className="aside-label">// currently</div>
              <div>Software Engineer @ Lohli Africa</div>
              <div className="dim">Lagos / Remote · 2025 — now</div>
            </div>
            <div className="aside-block">
              <div className="aside-label">// previously</div>
              <div>Frontend Engineer @ Itex Integrated Services</div>
              <div>Frontend Engineer @ Zedi Inc</div>
              <div>Frontend Engineer @ Twoone Technologies</div>
            </div>
            <div className="aside-block">
              <div className="aside-label">// tools I reach for</div>
              <div className="chips">
                {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'React Native', 'Angular', 'GraphQL', 'Docker', 'AWS', 'Vercel', 'Jest', 'Cypress'].map(
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
