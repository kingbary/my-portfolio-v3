'use client';

import React from 'react';
import { IconArrow } from './Icons';
import Link from 'next/link';

const Cursor = () => <span className="cursor">█</span>;

function TypingLine({
  prompt = '$',
  command,
  delay = 10,
  speed = 60,
  onDone,
}: {
  prompt?: string;
  command: string;
  delay?: number;
  speed?: number;
  onDone?: () => void;
}) {
  const [text, setText] = React.useState('');
  const [done, setDone] = React.useState(false);
  const onDoneRef = React.useRef(onDone);
  onDoneRef.current = onDone;

  React.useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setText(command.slice(0, i));
        if (i >= command.length) {
          clearInterval(iv);
          setDone(true);
          onDoneRef.current?.();
        }
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(start);
  }, [command, delay, speed]);

  return (
    <div className="typing-line">
      <span className="prompt">{prompt}</span>
      <span className="cmd">{text}</span>
      {!done && <span className="cursor-inline">█</span>}
    </div>
  );
}

function HeroTerminal() {
  const [step, setStep] = React.useState(0);
  return (
    <section className="hero hero-terminal" id="home">
      <div className="shell">
        <div className="terminal-window">
          <div className="term-chrome">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">— kingsley@portfolio : ~ —</span>
            <span className="term-meta">zsh · 94x28</span>
          </div>
          <div className="term-body">
            <TypingLine prompt="kingsley@mbp" command=" whoami" delay={1000} onDone={() => setStep(1)} />
            {step >= 1 && (
              <div className="term-out">kingsley_akwa — software engineer</div>
            )}
            {step >= 1 && (
              <TypingLine prompt="kingsley@mbp" command=" cat about.txt" delay={1000} onDone={() => setStep(2)} />
            )}
            {step >= 2 && (
              <div className="term-out term-out-block">
                <p>I build design-centric React and Next.js apps —</p>
                <p>TypeScript, component systems, and the UI details</p>
                <p>that make products feel fast and intentional.</p>
                <p>Five years in. Frontend through and through.</p>
              </div>
            )}
            {step >= 2 && (
              <TypingLine prompt="kingsley@mbp" command=" ls ~/portfolio" delay={1400} onDone={() => setStep(3)} />
            )}
            {step >= 3 && (
              <div className="term-out term-grid">
                <span>work/</span><span>case-studies/</span><span>resume.pdf</span>
                <span>services/</span><span>about.md</span><span>contact.sh</span>
              </div>
            )}
            {step >= 3 && (
              <TypingLine prompt="kingsley@mbp" command=" ./say-hello.sh" delay={500} onDone={() => setStep(4)} />
            )}
            {step >= 4 && (
              <div className="term-out term-hello">
                <span className="accent">→</span> hey, i&apos;m kingsley.{' '}
                <Link href="#work">see my work ↓</Link>
              </div>
            )}
            <div className="prompt-live">
              <span className="prompt">kingsley@mbp</span> <Cursor />
            </div>
          </div>
        </div>
        <div className="hero-meta">
          <span>LAT 6.5244° N</span>
          <span className="dim">·</span>
          <span>LAGOS / REMOTE</span>
          <span className="dim">·</span>
          <span>UTC+1</span>
          <span className="dim">·</span>
          <span className="status">
            <span className="pulse" /> available for work
          </span>
        </div>
      </div>
    </section>
  );
}

function HeroBig() {
  const roles = ['software engineer', 'frontend engineer', 'ui craftsman', 'design-minded dev'];
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const iv = setInterval(() => setI((x) => (x + 1) % roles.length), 2400);
    return () => clearInterval(iv);
  }, [roles.length]);

  return (
    <section className="hero hero-big" id="home">
      <div className="shell">
        <div className="big-meta-row">
          <span>[ PORTFOLIO / 2026 ]</span>
          <span>KINGSLEYAKWA@GMAIL.COM</span>
          <span className="dim">v3.0.0</span>
        </div>
        <h1 className="big-title">
          <span className="big-line">kingsley</span>
          <span className="big-line">
            akwa<span className="accent-dot">.</span>
          </span>
          <span className="big-role">
            <span className="slash">/</span> {roles[i]}
            <Cursor />
          </span>
        </h1>
        <div className="big-footer">
          <div>
            <span className="dim">currently</span> building ad platform @ Lohli Africa
          </div>
          <div>
            <span className="dim">scroll</span> ↓ for selected work
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="hero-split shell" id="home">
      <div className="split-left">
        {/* <div className="split-badge">
          <span className="pulse" /> online · accepting work for Q3 2026
        </div> */}
        <h1 className="split-title">
          Software engineer<br />
          building quiet,<br />
          reliable systems.
        </h1>
        <p className="split-sub">
          I&apos;m Kingsley — a software engineer focused on React, design systems,
          and the UI details that make products feel fast and intentional. Five years
          in, still curious.
        </p>
        <div className="split-ctas">
          <Link href="#work" className="btn-primary">
            view selected work <IconArrow size={14} />
          </Link>
          <Link href="#contact" className="btn-ghost">
            get in touch
          </Link>
        </div>
      </div>
      <div className="split-right">
        <div className="stat-card">
          <div className="stat-label">// uptime</div>
          <div className="stat-big">99.982<span className="dim">%</span></div>
          <div className="stat-sub">across services I maintain · trailing 90d</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">// shipped</div>
          <div className="stat-big">47<span className="dim"> projects</span></div>
          <div className="stat-sub">since 2021 · open source + client work</div>
        </div>
        <div className="stat-card stat-muted">
          <div className="stat-label">// now</div>
          <div className="stat-now">
            <div>→  building the frontend ecosystem for a banking app</div>
            <div>→ reading <em>Designing Data-Intensive Apps</em></div>
            <div>→ learning Spring Boot (badly)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type HeroVariant = 'terminal' | 'big' | 'split';

export default function Hero({ variant }: { variant: HeroVariant }) {
  if (variant === 'big') return <HeroBig />;
  if (variant === 'split') return <HeroSplit />;
  return <HeroTerminal />;
}
