// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cv from './src/cv.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: cv.basics.url,
  integrations: [sitemap()],
});
