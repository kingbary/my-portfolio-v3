'use client';

import { IconFolder, IconArrowUpRight } from './Icons';
import SectionHeader from './section-header';
import { PROJECTS, type Project } from '../data/data';

export type CardStyle = 'list' | 'ascii' | 'editorial';

function CardList({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  return (
    <article className="card-list" onClick={() => onOpen(p)}>
      <div className="cl-left">
        <span className="cl-idx">{p.index}</span>
        <div className="cl-meta">
          <div className="cl-name">
            <IconFolder size={14} /> <span>{p.name}/</span>
            <span className="cl-tag">[{p.tag}]</span>
          </div>
          <div className="cl-title">{p.title}</div>
        </div>
      </div>
      <div className="cl-mid">
        <div className="cl-row"><span className="dim">client</span><span>{p.client}</span></div>
        <div className="cl-row"><span className="dim">role</span><span>{p.role}</span></div>
        <div className="cl-row"><span className="dim">year</span><span>{p.year}</span></div>
      </div>
      <div className="cl-right">
        <div className="cl-metric">{p.metric}</div>
        <div className="cl-metric-label">{p.metricLabel}</div>
        <div className="cl-open">
          read case study <IconArrowUpRight size={12} />
        </div>
      </div>
    </article>
  );
}

function CardAscii({ p, onOpen }: { p: Project; onOpen: (p: Project) => void }) {
  const pad = Math.max(2, 24 - p.name.length);
  return (
    <article className="card-ascii" onClick={() => onOpen(p)}>
      <div className="ca-border">
        <div className="ca-top">┌── {p.name} ──{'─'.repeat(pad)}┐</div>
        <div className="ca-body">
          <div className="ca-idx">/ {p.index}</div>
          <div className="ca-title">{p.title}</div>
          <div className="ca-blurb">{p.blurb}</div>
          <div className="ca-stack">
            {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
          <div className="ca-foot">
            <span>{p.client} · {p.year}</span>
            <span className="ca-metric">{p.metric} {p.metricLabel}</span>
          </div>
        </div>
        <div className="ca-bot">└{'─'.repeat(38)}┘</div>
      </div>
      <div className="ca-hover">press ↵ to open <IconArrowUpRight size={12} /></div>
    </article>
  );
}

function CardEditorial({ p, onOpen, flip }: { p: Project; onOpen: (p: Project) => void; flip: boolean }) {
  return (
    <article className={`card-editorial ${flip ? 'flip' : ''}`} onClick={() => onOpen(p)}>
      <div className="ce-num">{p.index}</div>
      <div className="ce-body">
        <div className="ce-tags">
          <span>{p.client}</span>
          <span className="dim">/</span>
          <span>{p.year}</span>
          <span className="dim">/</span>
          <span>{p.role}</span>
        </div>
        <h3 className="ce-title">{p.title}</h3>
        <p className="ce-blurb">{p.blurb}</p>
        <div className="ce-bottom">
          <div className="ce-stack">
            {p.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className="ce-cta">open_ <IconArrowUpRight size={14} /></div>
        </div>
      </div>
      <div className="ce-placeholder" aria-hidden>
        <div className="ce-ph-label">// {p.name}.thumb</div>
      </div>
    </article>
  );
}

interface WorkProps {
  cardStyle: CardStyle;
  onOpen: (p: Project) => void;
}

export default function Work({ cardStyle, onOpen }: WorkProps) {
  const Comp = cardStyle === 'ascii' ? CardAscii : cardStyle === 'editorial' ? CardEditorial : CardList;
  return (
    <section className="work" id="work">
      <div className="shell">
        <SectionHeader
          tag="02"
          cmd="ls -la ~/work"
          title="selected work"
          sub="five projects, chosen for the lessons they taught me."
        />
        <div className={`work-grid style-${cardStyle}`}>
          {PROJECTS.map((p, i) => (
            <Comp key={p.id} p={p} flip={i % 2 === 1} onOpen={onOpen} />
          ))}
        </div>
        <div className="work-footer">
          <span className="dim">// end of list · {PROJECTS.length} of {PROJECTS.length} projects shown</span>
        </div>
      </div>
    </section>
  );
}
