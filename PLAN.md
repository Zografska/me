# PLAN.md

## Goal

A personal CV site on GitHub Pages that is informative first and unmistakably mine second: a punk zine with chaotic edges and a readable core, built from the content of my CV. Fully responsive.

## Decisions made

| Decision | Choice | Why |
|---|---|---|
| Framework | Astro 5, static | Mostly static content, near-zero JS, clean GitHub Pages deploy |
| Styling | Hand-written CSS, no UI kit | shadcn and similar kits produce the template look this site avoids |
| Concept | "Unstructured → structured", as a photocopied zine | Mirrors my actual work: Linksync, the thesis, Claude Code workflows |
| Intensity | Balanced: chaotic edges, readable core | A recruiter must find role, stack and contact in 30 seconds |
| Colour meaning | Pink = AI / LLM, blue = everything else | The inks carry information |
| Routing | Single page, anchor nav, `<details>` for projects | No SPA 404 issues on GitHub Pages |
| Fonts | Self-hosted via Fontsource | No Google requests (GDPR) |
| Phone number | Not on the site | Spam and scraping; it stays in the PDF |

## Done

- [x] Content model in `src/data/cv.ts`, faithful to the October 2026 CV
- [x] Hero sequence: photocopy text, marker marks, misregistered name, shapes, taped card
- [x] Sections: Profile, How I work with AI (6-step loop), Work timeline, Research pipeline, Leadership, Skills, Education and languages, Beyond code, Footer
- [x] Skill sticker sheet that lights up and links to the projects using a skill
- [x] Project cards with tape-peel on open, self-hosted stamps, migration strike-through
- [x] Sticky nav strip (<1440px), fixed side rail (≥1440px), active-section tracking
- [x] Clamped parallax on shapes (desktop only)
- [x] Reduced motion, focus styles, no horizontal overflow at 390 and 1440
- [x] GitHub Actions deploy workflow

## Before launch (blocking)

- [ ] Add `public/Aleksandra_Zografska_CV.pdf`
- [ ] Confirm the email address (`aleksndra2@gmail.com`) in `src/data/cv.ts`
- [ ] Create the `Zografska.github.io` repo, push, set Pages source to GitHub Actions
- [ ] Test on a real phone (iOS Safari and Android Chrome), not only emulation

## Refinement backlog

### Polish
- [ ] Hero: tune timing and ring positions per word; the "Generalist" ring sits slightly left
- [ ] Hero: decide whether the raw text should dim after the card lands, so the eye goes to the name and card
- [ ] Beyond code: the yoga scrap has only a title and meta; consider a small visual (a hand-drawn mark) rather than invented copy
- [ ] Work: consider a hand-drawn arrow or note linking Game Center to the AI workflow section
- [ ] Footer: the screen-blend overprint reads mostly pink; try other blend modes or offsets
- [ ] Check the 820–1100px range carefully (tablet portrait), especially the hero grid and pipeline
- [ ] Print stylesheet: plain, single-column, no shapes or grain

### SEO and sharing
- [ ] Open Graph image (1200×630) in the zine style, generated at build time or drawn once
- [ ] `@astrojs/sitemap` and `robots.txt`
- [ ] JSON-LD `Person` schema (name, job title, sameAs GitHub, alumniOf)
- [ ] Favicon set (apple-touch-icon PNG alongside the SVG)

### Quality
- [ ] Lighthouse pass (target 95+ on all four categories) and fix findings
- [ ] Keyboard-only walkthrough: skip link, nav, stickers, details, links
- [ ] Screen reader pass (VoiceOver): hero reads as name, title, links; nothing decorative is announced
- [ ] Playwright smoke test: page loads, no horizontal overflow at 390 and 1440, sticker click lights expected projects, details open
- [ ] Run the smoke test in the deploy workflow before publishing

### Maybe later
- [ ] Italian version (EN/IT toggle), useful for Milan recruiters
- [ ] Project deep-dive pages (e.g. Linksync architecture, thesis pipeline with results once available)
- [ ] Update the thesis status when it's submitted (expected Jan 2027)
- [ ] Privacy-friendly analytics (e.g. self-hosted Plausible or Umami), only if needed

## How to work on this

Pick one backlog item at a time. For anything visual: change → build → check at 390 and 1440 in the browser → check reduced motion → commit. Rules and known gotchas are in `CLAUDE.md`.
