// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { targetBlank } from "./src/plugins/targetBlank";
import { youtubeEmbed } from "./src/plugins/youtubeEmbed";

// https://astro.build/config
export default defineConfig({
	site: "https://hondmorvan.nl",
	integrations: [mdx(), sitemap()],

	// GitHub Pages deployment with custom domain
	base: "/",

	// Build configuration
	build: {
		assets: "images",
	},

	// Markdown configuration
	markdown: {
		rehypePlugins: [[targetBlank, { domain: ["hondmorvan.nl"] }], youtubeEmbed],
		shikiConfig: {
			theme: "github-light",
		},
	},

	vite: {
		build: {
			rollupOptions: {
				output: {
					assetFileNames: "images/[name][extname]",
				},
			},
		},
	},
});
