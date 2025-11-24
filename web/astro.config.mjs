// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://the-focus-ai.github.io',
  base: process.env.NODE_ENV === 'production' ? '/2025-11-20-ai-engineering-code-summit' : '/',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'slides': fileURLToPath(new URL('./public/slides', import.meta.url))
      }
    },
    server: {
      watch: {
        // Follow symlinks to watch the actual speakers directory
        followSymlinks: true,
        ignored: ['!**/speakers/**']
      }
    }
  },

  integrations: [react()]
});