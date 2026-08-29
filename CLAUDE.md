# CLAUDE.md — Florals & Frames marketing landing page

Operational guide for Claude Code sessions in this repo. Read alongside
[`README.md`](README.md) (fuller handoff + the image mapping table).

## What this is
The **marketing/landing site** for *Florals and Frames* (Goa studio that builds
cinematic wedding websites). Deploys to **`floralsandframes.com`** (apex).
NOT the wedding-invite demo — that's a **separate repo** (`my-first-website` →
`templates.floralsandframes.com`). Don't edit the demo from here.

## Golden rules (user's working style — confirmed)
- **Never `git push` without an explicit "push".** Work locally → verify → report →
  wait. The user reviews locally first.
- **Offer options/opinions before big or subjective changes.** For image/taste
  calls, recommend one, implement it, and note the easy swap — the user iterates
  fast ("change it, let me see").
- Report honestly what was and wasn't verified (esp. visual — see preview gotcha).

## Architecture
- **The entire page is ONE component:** `components/LandingExperience.tsx`
  (`app/page.tsx` just renders it). All copy, the `PHOTOS` object, GSAP setup, and
  every section live there. Styling is in `app/globals.css`.
- ⚠️ The standalone `Hero.tsx`, `Packages.tsx`, `Footer.tsx`, etc. are **LEGACY /
  UNUSED dead code** — nothing imports them. **Edit `LandingExperience.tsx`.**
- Stack: Next.js 14 (App Router) · React 18 · TS · Tailwind v3. GSAP + ScrollTrigger
  v3.13.0 loaded at runtime from **jsDelivr CDN** (not an npm dep).

## Images — the important part
- **`PHOTOS` object** at the top of `LandingExperience.tsx` is the single source of
  truth. Keys are reused across sections, so **add a dedicated key** to change only
  one spot (e.g. `statement`, `invitation`, `story1/2/3` were split off for this).
- Local files live in `public/images/`; `bouquet` is the last remaining Unsplash
  URL. (`chapel` now → local `demo-preview.jpg`; `stationery` key was removed with
  the demo mobile card.) Full mapping table is in the README.
- **🔴 MOBILE STORY GOTCHA:** the "One link. A whole story." section renders TWO
  ways. Desktop (≥900px) uses `PHOTOS.story1/2/3`. Mobile (≤899px) hides those
  (`.story-visuals { display:none }`) and shows **background-images hardcoded in
  `app/globals.css`** (`.story-copy:nth-child(n)::before`, ~lines 373–375). **Change
  BOTH** or mobile ≠ desktop (this bug shipped once). It's the only CSS with
  hardcoded photo URLs — grep `globals.css` for `unsplash`/`background-image`.
- **Optimize with sharp borrowed from the sibling repo** (none installed here):
  ```bash
  SHARP="C:/Users/allwy/Documents/GitHub/Claude-Code/my-first-website/node_modules/sharp"
  node -e "require('$SHARP')('in.jpg').rotate().resize({width:2400,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true,progressive:true}).toFile('out.jpg')"
  ```
  Hero ~2400px; portrait/column slots ~1500–1600px; quality 82, mozjpeg, progressive.
  Use `.extract({...})` to pre-crop a portrait into a square/landscape frame.
- **Git hygiene:** commit ONLY images the site references. Raw `temp*.jpg` uploads
  and benched/superseded files stay **local & untracked** (multi-MB, unused).
- **Licensing:** the footer disclaimer (`.footer-disclaimer`) is courtesy, **not a
  license**. Some temps are watermarked photographer work (e.g. temp3 "shades 43") —
  flag before publishing.

## Dev / verify gotchas
- **Preview pane is often collapsed → `visibilityState: hidden`, `innerHeight: 0`.**
  This makes screenshots blank, **freezes GSAP at frame 0** (hero headline looks
  "missing" — it's not a bug), and blocks programmatic scroll. **Verify via DOM**
  (`fetch(url,{method:'HEAD'})`, `img.naturalWidth`, `img.getAttribute('src')`) and
  say what wasn't visually confirmed. To force a real screenshot: front the tab,
  set `scrollBehavior:'auto'`, `gsap.set(sel,{clearProps:'all'})`, and/or
  `ScrollTrigger.getAll().forEach(t=>t.kill())`.
- **`npm run build` fails with `EPERM … .next/trace` while the dev server runs**
  (Windows lock). Stop the dev server first; `rm -rf .next/trace` if stale.
- Preview via `.claude/launch.json` runs on **port 3941** (sibling demo uses 3000).

## Deploy
- Hosted on **Hostinger (not Vercel)**. A GitHub push is **not** a deploy.
- **After every deploy, purge the Hostinger CDN cache** — it over-caches HTML/CSS
  and serves stale content otherwise (bit us on the mobile story fix). Mobile
  browsers also cache hard — hard-refresh / private tab to verify.

## Git
- Remote: **`github.com/allwynnewton/floralsandframes.com`**, branch **main**
  (solo deploy-from-main repo — commit to `main`, no PR flow).
- Commit messages end with the `Co-Authored-By: Claude …` trailer.

## Key constants (top of `LandingExperience.tsx`)
- `WHATSAPP_URL` → `wa.me/917020727961` (primary CTA) · `DEMO_URL` →
  `templates.floralsandframes.com` · `EMAIL` → `enquiries@floralsandframes.com`.

## Open TODOs (see README "Roadmap" for detail)
- Final CTA off the AI-ish `couple-church.jpg`; retune story-03 copy ("Your
  invitation" → the image is haldi); swap the last Unsplash key (`bouquet`);
  confirm photo licensing; real package pricing; delete legacy components.
