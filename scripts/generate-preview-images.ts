#!/usr/bin/env bun
/**
 * Post-build script to generate low quality JPG/PNG preview images from WebP files.
 *
 * These low quality placeholders are used in Decap CMS editor preview mode
 * since the CMS preview doesn't support WebP format well.
 *
 * Run this after remove-image-hashes.ts
 */

import { readdir, mkdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const DIST_DIR = "./dist";
const IMAGES_DIR = join(DIST_DIR, "images");

// Low quality settings for preview images
const JPEG_QUALITY = 30;
const PNG_COMPRESSION_LEVEL = 9; // Max compression (0-9)
const MAX_WIDTH = 400;
const MAX_HEIGHT = 400;

async function getWebpFilesRecursively(dir: string): Promise<string[]> {
	const webpFiles: string[] = [];

	try {
		const entries = await readdir(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = join(dir, entry.name);
			if (entry.isDirectory()) {
				webpFiles.push(...(await getWebpFilesRecursively(fullPath)));
			} else if (entry.name.toLowerCase().endsWith(".webp")) {
				webpFiles.push(fullPath);
			}
		}
	} catch (error) {
		// Directory might not exist
	}

	return webpFiles;
}

async function generatePreviewImage(webpPath: string): Promise<void> {
	const { dir, name } = parse(webpPath);

	// Generate both JPG and PNG versions
	const jpgPath = join(dir, `${name}.jpg`);
	const pngPath = join(dir, `${name}.png`);

	try {
		const image = sharp(webpPath);
		const metadata = await image.metadata();

		// Resize to fit within max dimensions while maintaining aspect ratio
		const resizeOptions =
			metadata.width &&
			metadata.height &&
			(metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT)
				? { width: MAX_WIDTH, height: MAX_HEIGHT, fit: "inside" as const }
				: {};

		// Generate low quality JPG
		await sharp(webpPath)
			.resize(resizeOptions)
			.jpeg({ quality: JPEG_QUALITY })
			.toFile(jpgPath);

		console.log(`Generated: ${jpgPath}`);

		// Generate low quality PNG
		await sharp(webpPath)
			.resize(resizeOptions)
			.png({ compressionLevel: PNG_COMPRESSION_LEVEL })
			.toFile(pngPath);

		console.log(`Generated: ${pngPath}`);
	} catch (error) {
		console.error(`Failed to process ${webpPath}:`, error);
	}
}

async function main() {
	console.log("🖼️  Generating low quality preview images for Decap CMS...\n");

	const webpFiles = await getWebpFilesRecursively(IMAGES_DIR);

	if (webpFiles.length === 0) {
		console.log("No WebP images found.");
		return;
	}

	console.log(`Found ${webpFiles.length} WebP images.\n`);

	for (const webpFile of webpFiles) {
		await generatePreviewImage(webpFile);
	}

	console.log("\n✅ Preview images generated!");
}

main().catch(console.error);
