// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'hsvd5agj',
      dataset: 'production',
      // Set false saat development agar data update instan (tanpa cache)
      useCdn: false, 
      // Versi API terbaru (YYYY-MM-DD)
      apiVersion: '2024-01-24', 
    }),
    react()
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});