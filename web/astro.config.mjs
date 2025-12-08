// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { visit } from 'unist-util-visit';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// Remark plugin to fix relative slide paths in markdown
function remarkFixSlidePaths() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.includes('../slides/')) {
        node.url = node.url.replace('../slides/', '/slides/');
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://the-focus-ai.github.io',
  base: process.env.BASE_PATH
    ? process.env.BASE_PATH
    : process.env.DEPLOY === 'github-pages'
      ? '/2025-11-20-ai-engineering-code-summit'
      : process.env.DEPLOY === 'thefocus'
        ? '/reports/aiecode-2025-11/'
        : '/',
  markdown: {
    remarkPlugins: [remarkFixSlidePaths],
  },
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