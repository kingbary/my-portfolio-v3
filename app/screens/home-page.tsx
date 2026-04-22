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

// Darker variants for light mode — all ≥5:1 contrast against #f3f1e8
const ACCENT_MAP_LIGHT: Record<string, string> = {
    lime: '61 106 8',
    amber: '146 64 14',
    coral: '185 28 28',
    cyan: '21 94 117',
    violet: '109 40 217',
    mono: '61 59 53',
};

const DEFAULT_TWEAKS: TweakState = {
    hero: 'split',
    card: 'ascii',
    density: 'cozy',
    accent: 'lime',
    scanlines: 'off',
    theme: 'dark',
};

export default function HomeScreen({ git }: { git: { branch: string; commitDate: string; commitHash: string; commitMessage: string; repoUrl: string } }) {
    const [tweaks, setTweaks] = React.useState<TweakState>(DEFAULT_TWEAKS);
    const [tweaksOpen, setTweaksOpen] = React.useState(false);
    const [cmdOpen, setCmdOpen] = React.useState(false);
    const [activeProject, setActiveProject] = React.useState<Project | null>(null);

    // Declared before the load effect so it skips on the first render (saveReady is
    // still false), preventing DEFAULT_TWEAKS from overwriting stored values before
    // they've been read.
    const saveReady = React.useRef(false);
    React.useEffect(() => {
        if (!saveReady.current) return;
        try {
            localStorage.setItem('portfolio-tweaks', JSON.stringify(tweaks));
        } catch {}
    }, [tweaks]);

    // Load persisted tweaks once on mount, then arm the save effect.
    React.useEffect(() => {
        try {
            const raw = localStorage.getItem('portfolio-tweaks');
            if (raw) setTweaks(prev => ({ ...prev, ...(JSON.parse(raw) as Partial<TweakState>) }));
        } catch {}
        saveReady.current = true;
    }, []);

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
        // Accent CSS var — use darker variants in light mode for contrast
        const map = tweaks.theme === 'light' ? ACCENT_MAP_LIGHT : ACCENT_MAP;
        root.style.setProperty('--accent', map[tweaks.accent] ?? map.lime);
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

            <Footer {...git} />

            {/* Tweaks toggle button */}
            <button
                className="tweaks-toggle"
                onClick={() => setTweaksOpen((v) => !v)}
                style={{ bottom: tweaksOpen ? '320px' : '24px' }}
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
