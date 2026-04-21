'use client';

interface IconProps {
  size?: number;
  stroke?: string;
  fill?: string;
}

const Icon = ({
  d,
  size = 16,
  stroke = 'currentColor',
  fill = 'none',
}: IconProps & { d: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
  >
    {d}
  </svg>
);

export const IconArrow = (p: IconProps) => (
  <Icon {...p} d={<><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></>} />
);

export const IconArrowUpRight = (p: IconProps) => (
  <Icon {...p} d={<><path d="M7 17L17 7"/><path d="M8 7h9v9"/></>} />
);

export const IconTerminal = (p: IconProps) => (
  <Icon {...p} d={<><rect x="3" y="4" width="18" height="16"/><path d="M7 9l3 3-3 3"/><path d="M13 15h4"/></>} />
);

export const IconFolder = (p: IconProps) => (
  <Icon {...p} d={<><path d="M3 6h6l2 2h10v11H3z"/></>} />
);

export const IconFile = (p: IconProps) => (
  <Icon {...p} d={<><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/></>} />
);

export const IconMoon = (p: IconProps) => (
  <Icon {...p} d={<><path d="M20 14A8 8 0 0110 4a8 8 0 1010 10z"/></>} />
);

export const IconSun = (p: IconProps) => (
  <Icon {...p} d={<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>} />
);

export const IconCmd = (p: IconProps) => (
  <Icon {...p} d={<><path d="M9 9h6v6H9z"/><path d="M9 9V6a3 3 0 10-3 3h3"/><path d="M15 9V6a3 3 0 113 3h-3"/><path d="M9 15v3a3 3 0 11-3-3h3"/><path d="M15 15v3a3 3 0 103-3h-3"/></>} />
);

export const IconCopy = (p: IconProps) => (
  <Icon {...p} d={<><rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/></>} />
);

export const IconCheck = (p: IconProps) => (
  <Icon {...p} d={<><path d="M4 12l5 5L20 6"/></>} />
);
