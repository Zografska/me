# Zografska.github.io

Personal CV site. Astro, hand-written CSS, no UI kit.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Edit the content

Everything on the page comes from `src/data/cv.ts`. Update your CV there and the site follows.
Which technologies show in pink (AI / LLM) is controlled by the `aiTech` set in the same file.
Which projects light up for each skill sticker is controlled by each project's `skills` array.

## Before going live

1. Put your PDF CV in `public/` as `Aleksandra_Zografska_CV.pdf` (the download links point there).
2. Double-check the email address in `src/data/cv.ts`.

## Deploy to GitHub Pages

1. Create a public repo named exactly `Zografska.github.io`.
2. Push this folder to its `main` branch.
3. In the repo: Settings → Pages → Source: **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
The site goes live at https://zografska.github.io.

## Where things live

- `src/pages/index.astro`: page structure and the small script (skill stickers, nav tracking, parallax)
- `src/styles/global.css`: design tokens at the top, then edge layer, hero sequence, sections, responsive rules
- `src/lib/torn.ts`: deterministic torn-paper edges and tilts
- Fonts are self-hosted through Fontsource, so no requests go to Google (better for GDPR).

Motion respects `prefers-reduced-motion`: the hero skips straight to its finished state.
