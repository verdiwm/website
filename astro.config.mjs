import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://verdi.rocks',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [tailwind(), react(), sitemap()],
});
