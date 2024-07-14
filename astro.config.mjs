import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://verdi.rocks',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [tailwind()],
});
