// src/plugins/targetBlank.ts

import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import type { Element } from "hast";

export const targetBlank: RehypePlugin = ({ domain = "" } = {}) => {
	return (tree) => {
		visit(tree, "element", (e: Element) => {
			if (e.tagName !== "a" || !e.properties?.href) {
				return;
			}

			const href = e.properties.href.toString();
			if (!href.startsWith("http") || href.includes(domain)) {
				return;
			}

			e.properties!["target"] = "_blank";
			e.properties!["rel"] = "noopener noreferrer";

			// If the link is textual, append an external link icon

			if (e.children && e.children.length > 0) {
				const lastChild = e.children[e.children.length - 1];
				if (lastChild.type === "text") {
					e.children.push({
						type: "element",
						tagName: "span",
						properties: { className: ["external-link-icon"] },
						children: [{ type: "text", value: " ↗" }],
					});
				}
			}
		});
	};
};
