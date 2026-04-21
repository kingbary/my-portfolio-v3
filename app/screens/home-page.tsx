'use client';

import React from 'react';
import Tweaks, { TweakState } from '../components/Tweaks';
import { Project } from '../data/data';

import CaseStudy from '../components/case-study';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Work from '../components/Work';
import About from '../components/About';
import Services from '../components/Services';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CmdK from '../components/CmdK';

const ACCENT_MAP: Record<string, string> = {
    lime: '212 255 58',
    amber: '255 176 58',
    coral: '255 102 87',
    cyan: '88 220 255',
    violet: '178 140 255',
    mono: '245 245 240',
};

const DEFAULT_TWEAKS: TweakState = {
    hero: 'big',
    card: 'ascii',
    density: 'cozy',
    accent: 'lime',
    scanlines: 'off',
    theme: 'dark',
};

export default function HomeScreen() {
    const [tweaks, setTweaks] = React.useState<TweakState>(DEFAULT_TWEAKS);
    const [tweaksOpen, setTweaksOpen] = React.useState(false);
    const [cmdOpen, setCmdOpen] = React.useState(false);
    const [activeProject, setActiveProject] = React.useState<Project | null>(null);

    // Apply tweaks to <body> and <html>
    React.useEffect(() => {
        const body = document.body;
        const root = document.documentElement;

        // Theme
        body.classList.toggle('light', tweaks.theme === 'light');
        // Density
        body.classList.toggle('tight', tweaks.density === 'tight');
        // Scanlines
        body.classList.toggle('scanlines', tweaks.scanlines === 'on');
        // Accent CSS var
        root.style.setProperty('--accent', ACCENT_MAP[tweaks.accent] ?? ACCENT_MAP.lime);
    }, [tweaks]);

    // Keyboard shortcut: ⌘K or Ctrl+K
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setCmdOpen((v) => !v);
            }
            // T to toggle tweaks
            if (e.key === 't' && !e.metaKey && !e.ctrlKey && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
                setTweaksOpen((v) => !v);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const dark = tweaks.theme === 'dark';

    return (
        <>
            <Nav
                dark={dark}
                setDark={(v) => setTweaks({ ...tweaks, theme: v ? 'dark' : 'light' })}
                onCmd={() => setCmdOpen(true)}
            />

            <main>
                <Hero variant={tweaks.hero} />
                <Marquee />
                <Work cardStyle={tweaks.card} onOpen={setActiveProject} />
                <About />
                <Services />
                <Resume />
                <Contact />
            </main>

            <Footer />

            {/* Tweaks toggle button */}
            <button
                onClick={() => setTweaksOpen((v) => !v)}
                style={{
                    position: 'fixed',
                    bottom: tweaksOpen ? '320px' : '24px',
                    right: '24px',
                    zIndex: 96,
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '2px',
                    padding: '6px 10px',
                    fontSize: '11px',
                    color: 'var(--fg-dim)',
                    letterSpacing: '.08em',
                    transition: 'bottom .2s',
                }}
                title="Press T to toggle"
            >
                {tweaksOpen ? '✕ close' : '⚙ tweaks'}
            </button>

            <Tweaks tweaks={tweaks} setTweaks={setTweaks} visible={tweaksOpen} />
            <CmdK open={cmdOpen} onClose={() => setCmdOpen(false)} onOpen={setActiveProject} />
            <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
        </>
    );
}
