'use client';

import { useEffect } from 'react';
import { IconArrow, IconTerminal } from './Icons';
import { type Project } from '../data/data';
import Link from 'next/link';

interface CaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudy({ project: p, onClose }: CaseStudyProps) {
  useEffect(() => {
    if (!p) return;
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', esc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', esc);
    };
  }, [p, onClose]);

  if (!p) return null;

  return (
    <div className="cs-overlay" onClick={onClose}>
      <div className="cs-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cs-chrome">
          <span className="term-dot r" onClick={onClose} style={{ cursor: 'pointer' }} />
          <span className="term-dot y" />
          <span className="term-dot g" />
          <span className="term-title">~/work/{p.name} — case study</span>
          <button className="cs-close" onClick={onClose} aria-label="close">esc ✕</button>
        </div>
        <div className="cs-body">
          <div className="cs-crumbs">
            <span className="dim">/work</span> / <span className="dim">{p.year}</span> / <span>{p.name}</span>
          </div>
          <h1 className="cs-title">{p.title}</h1>
          <div className="cs-facts">
            <div><div className="dim">client</div><div>{p.client}</div></div>
            <div><div className="dim">role</div><div>{p.role}</div></div>
            <div><div className="dim">year</div><div>{p.year}</div></div>
            <div><div className="dim">stack</div><div>{p.stack.join(' · ')}</div></div>
          </div>

          <div className="cs-hero-ph" aria-hidden>
            <span className="ph-label">// hero image · {p.name}</span>
          </div>

          <div className="cs-section">
            <div className="cs-h">// the problem</div>
            <p>{p.blurb}</p>
            <p>
              The existing system had evolved organically over four years. It did its job
              right up until it very much didn&apos;t — typically on a Friday afternoon. The
              team had stopped trusting the numbers. That&apos;s the real cost of shaky infra:
              it erodes the organization&apos;s sense of ground truth.
            </p>
          </div>

          <div className="cs-section">
            <div className="cs-h">// what I did</div>
            <ul className="cs-list">
              <li>Wrote a design doc. Circulated it. Let it get torn apart.</li>
              <li>Shipped a read-only shadow pipeline in parallel; compared outputs for six weeks.</li>
              <li>Cut over service-by-service behind feature flags. Zero incidents.</li>
              <li>Wrote the runbook I wish I&apos;d had when I joined.</li>
            </ul>
          </div>

          <div className="cs-code">
            <div className="code-head">
              <IconTerminal size={13} /> excerpt · {p.name}/pipeline.go
            </div>
            <pre>{`func (p *Pipeline) Process(ctx context.Context, evt Event) error {
  span, ctx := tracer.StartSpan(ctx, "pipeline.process")
  defer span.End()

  if err := p.store.Append(ctx, evt); err != nil {
    return fmt.Errorf("append: %w", err)
  }
  return p.bus.Publish(ctx, evt)
}`}</pre>
          </div>

          <div className="cs-metrics">
            <div className="cs-m">
              <div className="cs-m-big">{p.metric}</div>
              <div className="cs-m-lab">{p.metricLabel}</div>
            </div>
            <div className="cs-m">
              <div className="cs-m-big">0</div>
              <div className="cs-m-lab">p1 incidents since launch</div>
            </div>
            <div className="cs-m">
              <div className="cs-m-big">6mo</div>
              <div className="cs-m-lab">end-to-end, four engineers</div>
            </div>
          </div>

          <div className="cs-section">
            <div className="cs-h">// what I&apos;d do differently</div>
            <p>
              I&apos;d invest in the shadow-compare tooling earlier. We built it as we went
              and it would have paid for itself three times over if it had existed on
              day one. The rest I&apos;d do the same.
            </p>
          </div>

          <div className="cs-nav">
            <button className="btn-ghost" onClick={onClose}>
              ← back to all work
            </button>
            <Link href="#contact" className="btn-primary" onClick={onClose}>
              get in touch <IconArrow size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
