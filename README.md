# Florals & Frames — Landing Page

A marketing landing page for **Florals & Frames**, a Goa-based studio that
designs cinematic, story-led wedding websites (built after reviewing their
live showcase site at floralsandframes.com, the "Brendon & Sarah" demo).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- `next/font` for self-hosted Google Fonts (Fraunces + Work Sans)
- No external UI or animation libraries — scroll reveals are a small
  IntersectionObserver hook (`components/Reveal.tsx`)

## Design notes

- **Palette:** warm ivory paper (`#F8F2EA`), deep botanical green (`#33402F`),
  dusty rose (`#B4707C`) and antique gold (`#A9834A`) — pulling the "florals"
  (botanical green/rose) and "frames" (gold corner brackets) directly from
  the brand name, rather than a generic template palette.
- **Type:** Fraunces (display/italic) paired with Work Sans (body/UI).
- **Signature element:** the gold corner brackets in the hero and around the
  showcase mockup are a literal "frame" motif; the four-chapter process
  section mirrors the "Chapter One…" storytelling device used on the
  studio's own demo site.
- All imagery is CSS/SVG — no real client photos are used, since the actual
  photos on the demo site belong to a real couple.
- Pricing is intentionally omitted (three package tiers list scope only) —
  add real numbers once you have them.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Where to edit

| Section | File |
|---|---|
| Hero | `components/Hero.tsx` |
| Manifesto | `components/Manifesto.tsx` |
| Process ("Four Chapters") | `components/Process.tsx` |
| Feature grid | `components/Features.tsx` |
| Case study | `components/Showcase.tsx` |
| Packages | `components/Packages.tsx` |
| Final CTA | `components/FinalCta.tsx` |
| Footer | `components/Footer.tsx` |
| Colors / fonts | `tailwind.config.ts`, `app/layout.tsx` |

The WhatsApp number (`+91 70207 27961`) and link text are repeated across
`Header.tsx`, `Hero.tsx`, `Packages.tsx`, `FinalCta.tsx` and `Footer.tsx` —
update all five if it ever changes.

## 2026 cinematic landing-page redesign

The landing page was redesigned as an editorial, image-led wedding experience with GSAP/ScrollTrigger loaded client-side from jsDelivr.

Key interactions:
- cinematic parallax hero
- intro image collage with reveal + parallax motion
- desktop pinned three-chapter story stack
- desktop horizontal template showcase tied to scroll
- mobile-native horizontal template swipe fallback
- masked image reveals and staggered content entrances
- expanding full-screen final CTA image
- prefers-reduced-motion support

Photography used in the demo is loaded from Unsplash and should be replaced by Florals & Frames/client imagery when available.
