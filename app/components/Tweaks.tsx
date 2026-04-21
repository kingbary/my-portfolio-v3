'use client';

import { IconCmd } from './Icons';
import { type HeroVariant } from './Hero';
import { type CardStyle } from './Work';

export interface TweakState {
  hero: HeroVariant;
  card: CardStyle;
  density: 'cozy' | 'tight';
  accent: string;
  scanlines: 'off' | 'on';
  theme: 'dark' | 'light';
}

const ACCENTS = [
  { k: 'lime',   v: '212 255 58',  c: '#d4ff3a' },
  { k: 'amber',  v: '255 176 58',  c: '#ffb03a' },
  { k: 'coral',  v: '255 102 87',  c: '#ff6657' },
  { k: 'cyan',   v: '88 220 255',  c: '#58dcff' },
  { k: 'violet', v: '178 140 255', c: '#b28cff' },
  { k: 'mono',   v: '245 245 240', c: '#f5f5f0' },
];

function Seg<T extends string>({
  options,
  value,
  onChange,
}: {
  options: [T, string][];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="seg">
      {options.map(([k, l]) => (
        <button key={k} className={value === k ? 'on' : ''} onClick={() => onChange(k)}>
          {l}
        </button>
      ))}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="tw-row">
      <div className="tw-label">{label}</div>
      <div>{children}</div>
    </div>
  );
}

interface TweaksProps {
  tweaks: TweakState;
  setTweaks: (t: TweakState) => void;
  visible: boolean;
}

export default function Tweaks({ tweaks, setTweaks, visible }: TweaksProps) {
  if (!visible) return null;

  const set = <K extends keyof TweakState>(k: K, v: TweakState[K]) =>
    setTweaks({ ...tweaks, [k]: v });

  return (
    <aside className="tweaks">
      <div className="tw-head">
        <div><IconCmd size={12} /> Tweaks</div>
        <span className="dim">live</span>
      </div>
      <div className="tw-body">
        <Row label="hero">
          <Seg<HeroVariant>
            options={[['terminal', 'terminal'], ['big', 'bigtype'], ['split', 'split']]}
            value={tweaks.hero}
            onChange={(v) => set('hero', v)}
          />
        </Row>
        <Row label="card style">
          <Seg<CardStyle>
            options={[['list', 'list'], ['ascii', 'ascii'], ['editorial', 'editorial']]}
            value={tweaks.card}
            onChange={(v) => set('card', v)}
          />
        </Row>
        <Row label="density">
          <Seg<'cozy' | 'tight'>
            options={[['cozy', 'cozy'], ['tight', 'tight']]}
            value={tweaks.density}
            onChange={(v) => set('density', v)}
          />
        </Row>
        <Row label="accent">
          <div className="swatch-row">
            {ACCENTS.map((a) => (
              <button
                key={a.k}
                className={`sw ${tweaks.accent === a.k ? 'on' : ''}`}
                style={{ backgroundColor: a.c }}
                onClick={() => set('accent', a.k)}
                title={a.k}
              />
            ))}
          </div>
        </Row>
        <Row label="scanlines">
          <Seg<'off' | 'on'>
            options={[['off', 'off'], ['on', 'on']]}
            value={tweaks.scanlines}
            onChange={(v) => set('scanlines', v)}
          />
        </Row>
        <Row label="theme">
          <Seg<'dark' | 'light'>
            options={[['dark', 'dark'], ['light', 'light']]}
            value={tweaks.theme}
            onChange={(v) => set('theme', v)}
          />
        </Row>
      </div>
    </aside>
  );
}
