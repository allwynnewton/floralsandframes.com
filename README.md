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
- `PHOTOS` — the **single source of truth for every image** on the page (keys →
  URLs). Now a mix of **local files** in `public/images/` and remaining Unsplash
  URLs. See [Images & photography](#images--photography).

## Images & photography

Every image is defined once in the **`PHOTOS` object** at the top of
`components/LandingExperience.tsx`. Sections reference `PHOTOS.<key>`; some keys
are reused in several places, so **give a section its own key when you want to
change only that spot** (that's why `statement`, `invitation`, `story1/2/3` exist).

### Current mapping — localized to Goan-Catholic + Hindu

| Key | File | Where it shows |
|---|---|---|
| `hero` | `hero.jpg` | Couple + church spire in a field (full-bleed hero) |
| `couple` | `couple-church.jpg` | Basilica of Bom Jesus couple — **final CTA only** now (looks a touch AI-generated) |
| `veil` | `collage-feeling.jpg` | Hindu ring ceremony — intro collage "the feeling" |
| `statement` | `statement-pheras.jpg` | Hindu pheras — statement section |
| `invitation` | `invitation-sq.jpg` | Acrylic invitation card ("Ezra & Karen") — intro collage "the invitation" |
| `story1` | `story-beginning.jpg` | Catholic bride portrait — story chapter 01 |
| `story2` | `story-wedday.jpg` | Under-the-veil couple — story chapter 02 |
| `story3` | `story-haldi.jpg` | Haldi celebration — story chapter 03 |
| `chapel` | `demo-preview.jpg` | Couple in a pine forest (temp4) — demo browser preview (section titled "Timeless & Cinematic"). Key name is legacy; it's no longer a chapel. |
| `bouquet` | *Unsplash* | Bouquet — hero mini-photo, collage "the details", services photo |

Direction: started Goan-Catholic ("Cathedral Romance"), then blended in **Hindu**
weddings (haldi, pheras, ring ceremony) at the user's request. The fake browser
preview's demo couple is **"Brendon & Maria"**, 28·12·2026 (matches the
`card.png` invitation the demo photos were sourced with; was "Maria & Joel").
The floating mobile invitation card that used to overlap the demo browser was
**removed** — it collided with the left-aligned name/date; the browser mockup now
stands on its own. (`card.jpg`/`card.png` remain local & untracked.)

### ⚠️ The mobile story section uses SEPARATE image URLs

The "One link. A whole story." section renders **two different ways**:

- **Desktop (≥900px):** pinned scroll animation; cards use `PHOTOS.story1/2/3`.
- **Mobile (≤899px):** `.story-visuals` is `display:none`; instead each
  `.story-copy:nth-child(n)::before` shows a **background-image hardcoded in
  `app/globals.css`** (~lines 373–375).

**When you change a story image you MUST update both places**, or mobile and
desktop show different photos (this exact bug shipped once, then was fixed). Both
are now synced to `/images/story-*.jpg`. This is the **only** place in the CSS
with hardcoded photo URLs — grep `globals.css` for `unsplash` / `background-image`
before assuming a swap is complete.

### Optimizing images (pipeline)

No image tooling is installed in this repo — we borrow **sharp** from the sibling
demo repo:

```bash
SHARP="C:/Users/allwy/Documents/GitHub/Claude-Code/my-first-website/node_modules/sharp"
node -e "require('$SHARP')('in.jpg').rotate().resize({width:2400,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true,progressive:true}).toFile('out.jpg')"
```

- Hero / full-bleed → ~2400px wide; column / portrait slots → ~1500–1600px wide.
- Quality 82, `mozjpeg`, progressive. Output is usually 150–500 KB (from multi-MB).
- Use `.extract({...})` to pre-crop a portrait that must fill a square/landscape
  frame (e.g. the invitation tile — `object-fit: cover` otherwise slices it).

### Files & git hygiene

- **Committed:** only images the site actually references (the 8 local files above).
- **NOT committed (local only):** raw uploads `temp1–temp16.jpg` and benched/
  superseded files (`hero-arms.jpg`, `invitation.jpg`, `statement-havan.jpg`,
  `story-invite.jpg`, `pexels-*.jpg`). Multi-MB and unused; they show as untracked
  in `git status`. A `.gitignore` rule could hide them (not added yet).
- **Bench = alternates** kept for possible revert: `hero-arms.jpg` (Pexels
  arms-raised hero), `statement-havan.jpg` (havan close-up), `story-invite.jpg`
  (temp16, **Vietnamese** invitation flat-lay), `invitation.jpg` (tall crop).
- **Footer disclaimer** (`.footer-disclaimer`, in the footer bottom bar) credits
  free-stock / photography. ⚠️ **A credit line is not a license** — some temps are
  watermarked photographer work (e.g. temp3 "shades 43"); confirm rights before go-live.

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
- **Photography is now localized** (Goan-Catholic + Hindu) — see
  [Images & photography](#images--photography). A few placeholder Unsplash shots
  remain (`chapel`, `stationery`, `bouquet`) and should still be swapped for real
  Florals & Frames / client imagery when available.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. (The Claude Code `.claude/launch.json` preview
runs it on **port 3941** instead.)

> Note: the sibling demo repo (`my-first-website`) also runs on port 3000, so only
> run one at a time, or start this on another port: `PORT=3001 npm run dev`.

> ⚠️ **`npm run build` fails with `EPERM … .next/trace` while the dev server is
> running** (Windows file lock). Stop the dev server first (and `rm -rf .next/trace`
> if it's stale), then build.

## Working preferences (the user)

- Wants **options/opinions** before big changes.
- **Reviews locally first, then explicitly says "push."** Do NOT push without being
  asked — make changes locally, verify (build/dev/DOM), report, and wait.
- The in-app preview pane is often hidden (screenshots time out); verify via the
  built HTML / DOM / console and be honest about what wasn't visually confirmed.

## Roadmap / open TODOs

**Image swaps discussed but not yet done:**
- **Final CTA** still uses `couple-church.jpg` (the AI-ish Basilica couple) → swap
  to a real landscape shot (candidates: `temp13` haldi, `temp5`, `temp9`).
- **Story chapter 03 copy mismatch:** kicker still reads "03 · Your invitation" /
  "A keepsake with a pulse" but the image is now a **haldi** — consider retuning
  the copy (e.g. "Your celebration").
- Remaining Unsplash placeholder: `bouquet` (the demo `chapel`/`stationery` keys
  are now local / removed).

**Housekeeping / follow-ups:**
- **Licensing:** confirm rights (or replace) any watermarked photographer photos
  among `temp*.jpg` before publishing — the footer credit line is not a license.
- `invitation-sq.jpg` card reads "Ezra & Karen" (not "Maria & Joel") — minor
  name mismatch if anyone looks closely.
- Consider a `.gitignore` rule for `temp*.jpg` + benched files to keep
  `git status` clean.

**Pre-existing:**
- **Real pricing** for the three package tiers (currently scope-only).
- Consider deleting the **legacy section components** (dead code — see Architecture).
- Recurring reminder: **purge Hostinger CDN cache after every deploy** (and note
  mobile browsers cache CSS/images aggressively — hard-refresh to verify).
