// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { targetBlank } from "./src/plugins/targetBlank";
import { youtubeEmbed } from "./src/plugins/youtubeEmbed";

// https://astro.build/config
export default defineConfig({
	site: "https://drikusroor.github.io/hond-morvan-v2",
	integrations: [mdx(), sitemap()],

	// GitHub Pages deployment with custom domain
	base: "/hond-morvan-v2/",

	// Build configuration
	build: {
		assets: "assets",
	},

	// Markdown configuration
	markdown: {
		rehypePlugins: [
			[targetBlank, { domain: ["drikusroor.github.io"] }],
			youtubeEmbed,
		],
		shikiConfig: {
			theme: "github-light",
		},
	},
});
