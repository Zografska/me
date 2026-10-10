import { defineConfig } from 'astro/config';

// Repo name: "me" → a project site served from https://zografska.github.io/me/.
// Every root-relative URL in the markup must go through import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://zografska.github.io',
  base: '/me/',
  build: { inlineStylesheets: 'auto' },
});
