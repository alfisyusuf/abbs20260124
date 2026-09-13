// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // WAJIB diisi domain live yang benar — dipakai untuk og:url, og:image,
  // dan canonical URL absolut (WhatsApp/Telegram butuh URL absolut, bukan relatif)
  site: 'https://abbs-surakarta.sch.id', // TODO: ganti sesuai domain live-mu

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
