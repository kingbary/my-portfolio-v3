'use client';

import { useEffect, useRef, useState } from 'react';
import { IconArrowUpRight } from './Icons';
import { PROJECTS, type Project } from '../data/data';

interface CmdKProps {
  open: boolean;
  onClose: () => void;
  onOpen: (p: Project) => void;
}

export default function CmdK({ open, onClose, onOpen }: CmdKProps) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => ref.current?.focus(), 50);
    setQ('');
  }, [open]);

  if (!open) return null;

  const nav = (h: string) => {
    onClose();
    setTimeout(() => { location.hash = h; }, 20);
  };

  const items: { l: string; a: () => void }[] = [
    { l: 'go to — work',      a: () => nav('#work') },
    { l: 'go to — about',     a: () => nav('#about') },
    { l: 'go to — services',  a: () => nav('#services') },
    { l: 'go to — resume',    a: () => nav('#resume') },
    { l: 'go to — contact',   a: () => nav('#contact') },
    ...PROJECTS.map((p) => ({ l: `open — ${p.name}`, a: () => { onOpen(p); onClose(); } })),
    { l: 'copy email', a: () => navigator.clipboard?.writeText('kingsleyakwa@gmail.com') },
  ];

  const filtered = items.filter((i) => i.l.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input">
          <span className="prompt">&gt;</span>
          <input
            ref={ref}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="type a command…"
          />
          <span className="kbd">esc</span>
        </div>
        <div className="cmdk-list">
          {filtered.length ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                className="cmdk-row"
                onClick={() => { item.a(); onClose(); }}
              >
                <span>{item.l}</span>
                <IconArrowUpRight size={12} />
              </button>
            ))
          ) : (
            <div className="cmdk-empty">no matches</div>
          )}
        </div>
      </div>
    </div>
  );
}
