# ZO7AL — Gaming Universe

A cinematic, premium personal gaming website for **Zo7al** (`@iiZo7al`) — Minecraft network, modpacks, Fortnite Creative maps and socials, all under one original visual identity.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-variable design tokens)
- Framer Motion (page transitions, scroll reveals, magnetic buttons)
- Self-hosted [Geist](https://vercel.com/font) font

## Features

- Centralized design-token system with a per-page accent theme (Home, Minecraft, Modpacks, Fortnite, Socials, Store all share one system, only the accent color changes)
- Custom multi-layer cursor (dot / ring / glow) with contextual hover states (`link`, `button`, `project`, `image`, `copy`), magnetic buttons, and full mobile/touch + `prefers-reduced-motion` fallback
- Live data, never fabricated:
  - Minecraft server status fetched client-side from the public [mcstatus.io](https://mcstatus.io) API, with a graceful "Ready to play" fallback if the request fails
  - Modrinth projects fetched client-side from the public Modrinth API, with a verified static fallback if the request fails
  - CurseForge projects and Tebex store pricing are manually configured from the verified public listings (no public anonymous API exists for either)
- Smooth route transitions, scroll-triggered reveals, and staggered hero entrance animation
- Fully responsive, keyboard-navigable, with visible focus states and ARIA live status updates

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            Route segments (/, /minecraft, /modpacks, /fortnite, /socials, /store)
  components/
    cursor/       Custom cursor + magnetic button
    layout/       Navbar, Footer, page transitions
    ui/           Shared building blocks (SectionHeader, Reveal, PageHero)
    home/         Home page sections
    minecraft/    Server status, connect, versions, modes
    modpacks/     Modrinth + CurseForge galleries
    fortnite/     Map gallery
    socials/      Social grid
    store/        Rank cards
  lib/data/       Verified, non-fabricated data sources
```

## Data sources

| Source | URL |
| --- | --- |
| Minecraft server | `zo7al.play-mc.fun` |
| Modrinth | https://modrinth.com/user/iiZo7al |
| CurseForge | https://www.curseforge.com/members/iizo7al/projects |
| Fortnite | https://www.fortnite.com/@zo7al |
| Store | https://zo7al.tebex.io/ |

## Build

```bash
npm run build
```

## License

All rights reserved — © 2026 Zo7al.
