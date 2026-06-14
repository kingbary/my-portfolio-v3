'use client';

import { useEffect, useRef, useState } from 'react';
import SectionHeader from './section-header';

const USERNAME = 'kingbary';

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type Tip = { x: number; y: number; text: string };

function ordinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function tipText(d: Day) {
  const dt = new Date(d.date);
  const label = `${MONTHS_FULL[dt.getUTCMonth()]} ${ordinal(dt.getUTCDate())}`;
  return `${d.count} contribution${d.count === 1 ? '' : 's'} on ${label}.`;
}

export default function GithubContributions() {
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const [tip, setTip] = useState<Tip | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => {
        if (!r.ok) throw new Error('bad response');
        return r.json();
      })
      .then((data) => {
        if (!active) return;
        setDays(data.contributions as Day[]);
        setTotal(data.total?.lastYear ?? null);
      })
      .catch(() => active && setError(true));
    return () => {
      active = false;
    };
  }, []);

  // pad the start so each column (week) begins on Sunday
  const padded: (Day | null)[] = days ? [...days] : [];
  if (days && days.length) {
    const firstDay = new Date(days[0].date).getUTCDay();
    for (let i = 0; i < firstDay; i++) padded.unshift(null);
  }

  // group into weeks (columns) and derive month/year labels per starting column
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));

  const monthLabels: { col: number; label: string }[] = [];
  let lastMonth = -1;
  let lastYear = -1;
  weeks.forEach((week, wi) => {
    const first = week.find(Boolean) as Day | undefined;
    if (!first) return;
    const dt = new Date(first.date);
    const m = dt.getUTCMonth();
    const y = dt.getUTCFullYear();
    if (m !== lastMonth) {
      const label = y !== lastYear ? `${MONTHS[m]} ’${String(y).slice(2)}` : MONTHS[m];
      monthLabels.push({ col: wi, label });
      lastMonth = m;
      lastYear = y;
    }
  });

  const showTip = (e: React.MouseEvent, d: Day) => {
    const root = rootRef.current;
    if (!root) return;
    const rootRect = root.getBoundingClientRect();
    const cellRect = e.currentTarget.getBoundingClientRect();
    setTip({
      x: cellRect.left - rootRect.left + cellRect.width / 2,
      y: cellRect.top - rootRect.top,
      text: tipText(d),
    });
  };

  const cols = weeks.length || 1;

  return (
    <section className="contributions" id="contributions">
      <div className="shell">
        <SectionHeader
          tag="06"
          cmd="git log --all --oneline | wc -l"
          title="contribution graph"
          sub="A year of commits, pull requests, and late-night pushes."
        />
        <div className="ghc" ref={rootRef}>
          {error ? (
        <div className="ghc-empty dim">couldn&apos;t load contributions right now.</div>
      ) : !days ? (
        <div className="ghc-empty dim">loading contributions…</div>
      ) : (
        <div className="ghc-body">
          <div className="ghc-days" aria-hidden="true">
            <div className="ghc-days-spacer" />
            <div className="ghc-days-rows">
              <span style={{ gridRow: 2 }}>Mon</span>
              <span style={{ gridRow: 4 }}>Wed</span>
              <span style={{ gridRow: 6 }}>Fri</span>
            </div>
          </div>
          <div className="ghc-scroll">
          <div
            className="ghc-months"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(11px, 1fr))` }}
          >
            {monthLabels.map(({ col, label }) => (
              <span key={label} style={{ gridColumnStart: col + 1 }}>
                {label}
              </span>
            ))}
          </div>
          <div
            className="ghc-grid"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(11px, 1fr))` }}
          >
            {padded.map((d, i) =>
              d ? (
                <div
                  key={d.date}
                  className={`ghc-cell l${d.level}`}
                  onMouseEnter={(e) => showTip(e, d)}
                  onMouseLeave={() => setTip(null)}
                />
              ) : (
                <div key={`pad-${i}`} className="ghc-cell empty" />
              )
            )}
          </div>
          </div>
        </div>
      )}

      {tip && (
        <div className="ghc-tip" style={{ left: tip.x, top: tip.y }}>
          {tip.text}
        </div>
      )}

      <div className="ghc-foot dim">
        <a
          className="ghc-verify"
          href="https://github.com/kingbary#js-contribution-activity-description"
          target="_blank"
          rel="noopener noreferrer"
        >
          {total !== null ? `${total} contributions in the last year` : 'last 12 months'} ↗
        </a>
        <span className="ghc-legend">
          less
          <i className="ghc-cell l0" />
          <i className="ghc-cell l1" />
          <i className="ghc-cell l2" />
          <i className="ghc-cell l3" />
          <i className="ghc-cell l4" />
          more
        </span>
      </div>
        </div>
      </div>
    </section>
  );
}
