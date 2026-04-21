# my-portfolio-v3

Personal portfolio site — v3. Built with Next.js 16, TypeScript, and zero UI libraries.

## Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Custom CSS (no Tailwind, no component libraries)
- **Fonts** — JetBrains Mono, Space Grotesk

## Features

- Three hero variants — terminal, big type, split layout (switchable via tweaks panel)
- Live ⌘K command palette
- Tweaks panel (accent color, card style, density, scanlines, theme)
- Footer status bar with real-time git info (branch, last commit, hash linked to GitHub)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `T` | Toggle tweaks panel |
| `⌘K` / `Ctrl+K` | Open command palette |

## Project Structure

```
app/
├── components/       # UI components
├── data/             # Project data
├── screens/          # Page-level screen components
├── globals.css       # All styles
├── layout.tsx        # Root layout
└── page.tsx          # Entry point (reads git info at build time)
```
