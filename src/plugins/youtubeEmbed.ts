// src/plugins/youtubeEmbed.ts

import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import type { Element } from "hast";

const YOUTUBE_REGEX =
	/^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S*)?$/;

export const youtubeEmbed: RehypePlugin = () => {
	return (tree) => {
		visit(tree, "element", (node: Element, index, parent) => {
			// Look for paragraph elements containing only a link
			if (node.tagName !== "p" || !parent || index === null) {
				return;
			}

			// Check if paragraph contains only an anchor element
			if (node.children.length === 1) {
				const child = node.children[0];

				// Check for anchor element with YouTube URL
				if (child.type === "element" && (child as Element).tagName === "a") {
					const href = (child as Element).properties?.href?.toString() || "";
					const match = href.match(YOUTUBE_REGEX);

					if (match) {
						const videoId = match[1];

						// Replace the paragraph with an iframe embed
						const iframe: Element = {
							type: "element",
							tagName: "div",
							properties: {
								className: ["youtube-embed"],
								style:
									"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1.5rem 0;",
							},
							children: [
								{
									type: "element",
									tagName: "iframe",
									properties: {
										src: `https://www.youtube-nocookie.com/embed/${videoId}`,
										frameborder: "0",
										allow:
											"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
										allowfullscreen: true,
										style:
											"position: absolute; top: 0; left: 0; width: 100%; height: 100%;",
									},
									children: [],
								},
							],
						};

						parent.children[index] = iframe;
					}
				}
			}
		});
	};
};
