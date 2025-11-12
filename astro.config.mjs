// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://drikusroor.github.io/hond-morvan-v2',
    integrations: [mdx(), sitemap()],

    // GitHub Pages deployment with custom domain
    base: '/',

    // Build configuration
    build: {
        assets: 'assets',
    },

    // Markdown configuration
    markdown: {
        shikiConfig: {
            theme: 'github-light',
        },
    },
});
