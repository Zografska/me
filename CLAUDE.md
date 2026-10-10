# CLAUDE.md

Personal CV site for Aleksandra Zografska, deployed to GitHub Pages at https://zografska.github.io/me/ (repo `me`, so Astro `base` is `/me/`).
Astro 5, one static page, hand-written CSS. No UI kit, no Tailwind, no shadcn.

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # must pass before any change is done
npm run preview   # serve the production build
```

Deploy happens automatically on push to `main` or `master` (`.github/workflows/deploy.yml`). Root-relative URLs in markup must be prefixed with `import.meta.env.BASE_URL`.

## Where things live

- `src/data/cv.ts`: **all content**. The markup never contains CV text directly.
- `src/pages/index.astro`: page structure plus one inline script (skill stickers, nav tracking, parallax).
- `src/layouts/Base.astro`: head, meta, self-hosted font imports, SVG filter defs.
- `src/styles/global.css`: tokens at the top, then base, edge layer, hero, nav, sections, responsive, reduced motion.
- `src/lib/torn.ts`: deterministic torn-paper `clip-path` (`torn(seed)`) and tilts (`tilt(i)`). Same seed, same result every build.
- `PLAN.md`: what's done and the refinement backlog.

## Content rules

- The CV is the source of truth. Do not invent achievements, numbers, quotes or taglines.
- Edit content only in `src/data/cv.ts`.
- Pink vs black for a technology comes from the `aiTech` set. Sticker → project highlighting comes from each project's `skills` array, which must use the exact sticker names from `skills`.
- Copy is plain and specific: active voice, sentence case, no filler, no selling.
- The phone number stays off the site on purpose.

## Design rules (the concept: a punk zine, "chaotic edges, readable core")

Two layers in every section:
- **Edge layer** (h2 headings, shapes, tape, stamps, scraps, stickers) may rotate, overlap, bleed off the page and misregister.
- **Core layer** (paragraphs, dates, roles, stacks, links) is always straight, left-aligned, high-contrast, max ~68ch.
If something carries information a recruiter needs, it belongs to the core.

Tokens (do not add new colours without a reason):
- `--paper #FFE742` bold yellow background, `--toner #000000` text and the second ink, `--white #FFFFFF` scraps and cards
- `--pink #FD0692` = AI / LLM work, `--toner` (black) = everything else. The inks carry meaning; don't use them as decoration only.
- `--graphite #3A3A36` secondary text

Type: Archivo Variable (condensed via `font-stretch`, 62–125%) for display, Source Serif 4 Variable for body, Courier Prime only for stamps.

Motion:
- Two orchestrated moments: the hero sequence on load (~2.6s), and the footer name printing once (base, then pink pass) when it scrolls into view. Don't add scroll-triggered fade-ins or entrance animations to sections.
- Everything else responds to the visitor or is the slow, clamped background parallax:
  - project tape peels when the card opens
  - hero scraps (`.shape`, `.hero-tape`, `.scrawl`) can be dragged on fine-pointer screens wider than 820px; they rise above the text only while held. A fast fling draws a broken-glass crack at the drop point, which fades after ~5s (max 3 at once).
  - stamps re-stamp at a new angle on click (and don't toggle the `<details>` they sit in)
  - nav links get a marker stroke on hover/focus
  - sticker press, outline flash on lit cards
- The footer print hides the name only when the script runs with motion allowed (`.foot-name--wait`), so no-JS and reduced motion show it straight away.
- `prefers-reduced-motion` must land on the finished state. Every animation uses `both`/`forwards` so the global reduced-motion rule works.

Avoid the generic-AI-site tells: cream + terracotta, black + one neon accent, identical rounded cards with soft grey shadows, gradient washes, an all-caps eyebrow over every heading, `→` appended to links, one accented word per headline. Shadows here are hard offset drop-shadows, corners are sharp.

## Accessibility and responsiveness (non-negotiable)

- Shapes must never sit behind body text. On mobile they retreat to corners and parallax is off.
- Pink is never used for small text on yellow (fails contrast). Black on pink, black on yellow and yellow on black are fine. Shapes use normal blending: multiply turns pink red on yellow.
- Visible `:focus-visible` on everything interactive. Stickers are `<button aria-pressed>`, projects are `<details>`.
- Decorative elements get `aria-hidden="true"` (the hero raw text, overprint copies, shapes, tape, stamps).
- No horizontal scroll at any width. `html, body` use `overflow-x: clip`.
- Breakpoints: ≤820px single column, ≤1100px 2-column grids and vertical pipeline, ≥1440px the nav becomes a fixed side rail.

## Verify every visual change

1. `npm run build` passes.
2. Check at 390×844 and 1440×900 (and 1024 if layout changed), in the real browser via Chrome MCP if available.
3. `document.documentElement.scrollWidth === innerWidth` at both sizes.
4. Hero: let the animation finish (~3.5s) before judging it. Also check with reduced motion emulated.
5. Interactions: click a sticker (e.g. Ollama → Linksync and MSc thesis light up), open a project, check nav highlighting.

## Gotchas already hit

- `pathLength` + `vector-effect: non-scaling-stroke` breaks the stroke-draw animation (lines stop short). Don't combine them.
- The footer name is exactly 5× its font-size wide; it's sized with `min(calc((100vw - 2.5rem) / 5.2), calc(1120px / 5.2))`. Recalculate if the name, font or stretch changes.
- Parallax offsets are clamped to ±60px in the script; unclamped, shapes drift into text far down the page.
- `--tilt` is set as an inline style; to change it responsively, scale it with `calc(var(--tilt) * n)` in CSS rather than overriding it.
- `.shape` uses the individual `translate` property for parallax and `scale` for its entrance, so they don't fight over `transform`.
- `--gut` contains `%`; only use it in padding/margin, never in `font-size`.
- Playwright full-page screenshots can render wider than the page because of clipped shapes. Trust `scrollWidth`, and use viewport screenshots for review.
- When scrolling programmatically for screenshots, disable smooth scroll first or you'll capture mid-scroll.
- The fixed side nav sits over shapes at ≥1440px; its links have paper backgrounds so they stay readable. Keep that.
- Fonts are self-hosted through Fontsource on purpose (GDPR). Don't switch back to Google Fonts links.
