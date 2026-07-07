'use client';

import { useEffect } from 'react';
import { IconArrow } from './Icons';
import { type Project } from '../data/data';
import Link from 'next/link';
import Image from 'next/image';

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

          {p.image ? (
            <div className="cs-hero">
              <Image
                src={p.image}
                alt={`${p.client} — product screenshot`}
                fill
                sizes="(max-width: 960px) 100vw, 960px"
                priority
              />
            </div>
          ) : (
            <div className="cs-hero-ph" aria-hidden>
              <span className="ph-label">// hero image · {p.name}</span>
            </div>
          )}

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
              {p.did.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
