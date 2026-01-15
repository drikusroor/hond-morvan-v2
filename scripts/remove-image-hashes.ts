#!/usr/bin/env bun
/**
 * Post-build script to remove hashes from Astro-optimized image filenames.
 *
 * Astro generates optimized images with pattern: originalName_hash.ext
 * This script renames them to: originalName.ext
 * and updates all references in HTML files.
 */

import { readdir, readFile, writeFile, rename } from "node:fs/promises";
import { join } from "node:path";

const DIST_DIR = "./dist";
const IMAGES_DIR = join(DIST_DIR, "images");

// Pattern: filename_hash.ext where hash is alphanumeric
const HASH_PATTERN = /^(.+)_([a-zA-Z0-9]+)(\.[a-z]+)$/;

interface RenameMapping {
	oldName: string;
	newName: string;
}

async function getFilesRecursively(dir: string): Promise<string[]> {
	const files: string[] = [];
	const entries = await readdir(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await getFilesRecursively(fullPath)));
		} else {
			files.push(fullPath);
		}
	}

	return files;
}

async function findHashedImages(): Promise<RenameMapping[]> {
	const mappings: RenameMapping[] = [];

	try {
		const files = await readdir(IMAGES_DIR);

		for (const file of files) {
			const match = file.match(HASH_PATTERN);
			if (match) {
				const [, name, , ext] = match;
				mappings.push({
					oldName: file,
					newName: `${name}${ext}`,
				});
			}
		}
	} catch (error) {
		console.error("Could not read images directory:", error);
	}

	return mappings;
}

async function renameImages(mappings: RenameMapping[]): Promise<void> {
	for (const { oldName, newName } of mappings) {
		const oldPath = join(IMAGES_DIR, oldName);
		const newPath = join(IMAGES_DIR, newName);

		try {
			await rename(oldPath, newPath);
			console.log(`Renamed: ${oldName} → ${newName}`);
		} catch (error) {
			console.error(`Failed to rename ${oldName}:`, error);
		}
	}
}

async function updateHtmlReferences(mappings: RenameMapping[]): Promise<void> {
	const allFiles = await getFilesRecursively(DIST_DIR);
	const htmlFiles = allFiles.filter((f) => f.endsWith(".html"));

	for (const htmlFile of htmlFiles) {
		let content = await readFile(htmlFile, "utf-8");
		let modified = false;

		for (const { oldName, newName } of mappings) {
			// Match references like /images/oldName or images/oldName
			const pattern = new RegExp(escapeRegex(oldName), "g");
			if (pattern.test(content)) {
				content = content.replace(pattern, newName);
				modified = true;
			}
		}

		if (modified) {
			await writeFile(htmlFile, content);
			console.log(`Updated references in: ${htmlFile}`);
		}
	}
}

function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function main() {
	console.log("🖼️  Removing hashes from optimized images...\n");

	const mappings = await findHashedImages();

	if (mappings.length === 0) {
		console.log("No hashed images found.");
		return;
	}

	console.log(`Found ${mappings.length} images with hashes.\n`);

	await renameImages(mappings);
	console.log("");

	await updateHtmlReferences(mappings);

	console.log("\n✅ Done!");
}

main().catch(console.error);
