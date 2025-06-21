// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jromeroc99.github.io',
  base: '/portfolio',
  build: {
    assets: '_astro'
  }
});
