import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://verdi.rocks',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
