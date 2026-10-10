import { defineConfig } from 'astro/config';

// Repo name: Zografska.github.io  → served from the domain root, no base path needed.
export default defineConfig({
  site: 'https://zografska.github.io',
  build: { inlineStylesheets: 'auto' },
});
