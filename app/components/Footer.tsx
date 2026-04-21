'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer({ branch, lastCommit, commitHash, commitMessage, repoUrl }: {
  branch: string;
  lastCommit: string;
  commitHash: string;
  commitMessage: string;
  repoUrl: string;
}) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours() + 1).padStart(2, '0');
      const mm = String(d.getUTCMinutes()).padStart(2, '0');
      const ss = String(d.getUTCSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <footer className="footer">
      <div className="foot-top">
        <div className="foot-big">
          <div>thanks for scrolling.</div>
          <div className="dim">
            ↑ back to top <Link href="#home">home_</Link>
          </div>
        </div>
        <div className="foot-links">
          <div className="foot-col">
            <div className="foot-label">// pages</div>
            <Link href="#work">work</Link>
            <Link href="#about">about</Link>
            <Link href="#services">services</Link>
            <Link href="#resume">resume</Link>
          </div>
          <div className="foot-col">
            <div className="foot-label">// elsewhere</div>
            <Link href="https://github.com/kingsleyakwa" target="_blank" rel="noopener noreferrer">github</Link>
            <Link href="https://linkedin.com/in/kingsleyakwa" target="_blank" rel="noopener noreferrer">linkedin</Link>
          </div>
          <div className="foot-col">
            <div className="foot-label">// now</div>
            <span>lagos, nigeria</span>
            <span>utc+1 · {time}</span>
          </div>
        </div>
      </div>
      <div className="status-bar">
        <span>● {branch}</span>
        <span className="dim">last commit: {lastCommit}</span>
        {commitHash && (
          <Link href={`${repoUrl}/commit/${commitHash}`} target="_blank" rel="noopener noreferrer" className="dim">
            {commitHash}
          </Link>
        )}
        {/* {commitMessage && <span className="dim">— {commitMessage}</span>} */}
        <span className="dim">·</span>
        <span>© {new Date().getFullYear()} kingsley akwa</span>
        <span className="dim">·</span>
        <span>handcrafted in neovim</span>
        <span className="fill" />
        <span>UTF-8</span>
        <span className="dim">·</span>
        <span>LF</span>
      </div>
    </footer>
  );
}
