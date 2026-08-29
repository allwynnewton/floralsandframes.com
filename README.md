# Florals & Frames — Marketing Landing Page

> Handoff notes so any fresh chat/session has the full picture. Keep this updated.

## What this is

This folder is the **marketing/landing site for the _Florals and Frames_ business**
— a Goa-based studio that designs cinematic, story-led **wedding websites**. This
is the page a prospective couple lands on to learn what the studio does, see a
demo, view package tiers, and get in touch.

**Important — this is NOT the wedding invitation itself.** There are two separate
things:

| Thing | What it is | Where it lives |
|---|---|---|
| **This landing page** | Marketing site for the company | `floralsandframes.com` (apex) |
| **The "Brendon & Sarah" demo** | A cinematic wedding-invite template (fictional couple) | `templates.floralsandframes.com` |

The landing page's **"Live demo"** links point at `https://templates.floralsandframes.com`.
The demo template is a **different repo** (`my-first-website` locally →
`github.com/allwynnewton/templates.floralsandframes.com-brendon-and-sarah`). Don't
confuse the two.

## Hosting & deploy — IMPORTANT

- **`floralsandframes.com` is hosted on Hostinger** (NOT Vercel).
- **Hostinger's CDN over-caches HTML.** After every deploy you MUST **purge/clear
  the Hostinger CDN cache**, or it keeps serving stale HTML that references deleted
  JS/CSS chunks → "page couldn't load" on first visit (a reload masks it). This bit
  the demo site before; assume the same here.

## Git

- Remote: **`github.com/allwynnewton/floralsandframes.com`** (branch `main`).
- `.claude/` (local Claude Code tooling, e.g. `launch.json`) is gitignored.

## Stack

- **Next.js 14** (App Router) · React 18 · TypeScript · **Tailwind CSS v3**
- Fonts via `next/font/google`: **Cormorant Garamond** (display/italic) + **Manrope**
  (body/UI). ⚠️ Note the CSS variables are named misleadingly: `--font-fraunces`
  is actually Cormorant Garamond and `--font-work-sans` is actually Manrope (see
  `app/layout.tsx`).
- **GSAP + ScrollTrigger v3.13.0** are loaded at runtime from the **jsDelivr CDN**
  (not an npm dependency) inside `LandingExperience.tsx`. They drive the scroll
  choreography, parallax, pinned story stack, and horizontal showcase.

## Architecture — how to change things

**The entire page is ONE component: [`components/LandingExperience.tsx`](components/LandingExperience.tsx).**
`app/page.tsx` just renders `<LandingExperience />`. All copy, the photo URLs, the
GSAP animation setup, and every section (hero → intro/manifesto → process/"chapters"
→ showcase → packages → final CTA → footer) live in that single file. All styling
is in [`app/globals.css`](app/globals.css).

- ⚠️ **The standalone section files are LEGACY and UNUSED** — `Hero.tsx`,
  `Manifesto.tsx`, `Process.tsx`, `Features.tsx`, `Showcase.tsx`, `Packages.tsx`,
  `FinalCta.tsx`, `Footer.tsx`, `Header.tsx`, `Reveal.tsx`, `icons.tsx`. Nothing
  imports them. Editing them changes nothing on the live page. They're leftovers
  from an earlier multi-component structure. **Edit `LandingExperience.tsx` instead.**

### Key constants (top of `LandingExperience.tsx`)

- `WHATSAPP_URL` — `wa.me/917020727961` with a prefilled message. **Primary CTA.**
- `DEMO_URL` — `https://templates.floralsandframes.com` (the "Live demo" links).
- `EMAIL` / `EMAIL_URL` — `enquiries@floralsandframes.com` as a `mailto:` with a
  prefilled subject + body. Secondary contact, shown in the **final CTA** ("Prefer
  email?") and the **footer links** ("Email ↗").
- `PHOTOS` — an object of **Unsplash** image URLs (hero, chapel, couple, etc.).

## Contact points on the page

- **WhatsApp** `+91 70207 27961` — the main call-to-action (header, hero, final CTA,
  footer). Update the `WHATSAPP_URL` constant if it changes.
- **Email** `enquiries@floralsandframes.com` — secondary option in the final CTA and
  footer.

## Design notes

- **Palette:** warm ivory paper, deep botanical green, dusty rose, antique gold —
  pulling "florals" (green/rose) and "frames" (gold corner brackets) from the brand
  name rather than a generic template look. (Tokens in `tailwind.config.ts` +
  `app/globals.css`.)
- **Signature motifs:** gold corner "frame" brackets; a multi-chapter storytelling
  "Chapter One…" device that mirrors the demo site's narrative style.
- **Pricing is intentionally omitted** — package tiers list scope only. Add real
  numbers when available.
- **All demo photography is Unsplash placeholder** and should be swapped for real
  Florals & Frames / client imagery when available. (`public/images/` is currently
  empty.)

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

> Note: the sibling demo repo (`my-first-website`) also runs on port 3000, so only
> run one at a time, or start this on another port: `PORT=3001 npm run dev`.

## Working preferences (the user)

- Wants **options/opinions** before big changes.
- **Reviews locally first, then explicitly says "push."** Do NOT push without being
  asked — make changes locally, verify (build/dev/DOM), report, and wait.
- The in-app preview pane is often hidden (screenshots time out); verify via the
  built HTML / DOM / console and be honest about what wasn't visually confirmed.

## Roadmap / open TODOs

- **Real pricing** for the three package tiers.
- **Replace Unsplash placeholders** with real Florals & Frames / client photos in
  `public/images/`.
- Consider whether the **legacy section components** should be deleted to avoid
  confusion (they're dead code right now).
- Recurring reminder: **purge Hostinger CDN cache after every deploy.**
