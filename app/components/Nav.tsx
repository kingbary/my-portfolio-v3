'use client';

import React from 'react';
import Link from 'next/link';
import { IconCmd, IconMoon, IconSun } from './Icons';

interface NavProps {
  dark: boolean;
  setDark: (v: boolean) => void;
  onCmd: () => void;
}

export default function Nav({ dark, setDark, onCmd }: NavProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="#home" className="nav-logo">
        <span className="logo-bracket">[</span>
        <span className="logo-name">kingsley.akwa</span>
        <span className="logo-cur">_</span>
        <span className="logo-bracket">]</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="#work"><span className="dim">01/</span> work</Link></li>
        <li><Link href="#about"><span className="dim">02/</span> about</Link></li>
        <li><Link href="#services"><span className="dim">03/</span> services</Link></li>
        <li><Link href="#resume"><span className="dim">04/</span> resume</Link></li>
        <li><Link href="#contact"><span className="dim">05/</span> contact</Link></li>
      </ul>
      <div className="nav-right">
        <button className="kbd-hint" onClick={onCmd} title="Command menu">
          <IconCmd size={13} /> K
        </button>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="toggle theme">
          {dark ? <IconSun size={15} /> : <IconMoon size={15} />}
        </button>
      </div>
    </nav>
  );
}
