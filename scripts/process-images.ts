import { execSync } from "child_process";
import { existsSync, readdirSync, statSync } from "fs";
import { join, parse } from "path";

const SOURCE_DIR = process.argv[2] || ".";
const DEST_DIR = "/Users/drikusroor/repos/hond-morvan-v2/src/assets/images";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

console.log("🖼️  Image Processing Script");
console.log("==========================");
console.log(`Source: ${SOURCE_DIR}`);
console.log(`Destination: ${DEST_DIR}`);
console.log("");

let processed = 0;
let failed = 0;
let skipped = 0;

try {
	// Create destination directory
	execSync(`mkdir -p "${DEST_DIR}"`);

	// Get all image files
	const files = readdirSync(SOURCE_DIR).filter((file) => {
		const ext = parse(file).ext.toLowerCase();
		return IMAGE_EXTENSIONS.includes(ext);
	});

	for (const file of files) {
		const sourcePath = join(SOURCE_DIR, file);

		// Skip if not a file
		if (!statSync(sourcePath).isFile()) continue;

		const { name } = parse(file);
		const outputPath = join(DEST_DIR, `${name}.webp`);

		// Skip if already exists
		if (existsSync(outputPath)) {
			console.log(`⊘ Skipped: ${file} (already exists)`);
			skipped++;
			continue;
		}

		try {
			// Get original file size
			const originalSize = statSync(sourcePath).size;
			const originalSizeStr = formatBytes(originalSize);

			// Process image using ImageMagick
			execSync(
				`magick "${sourcePath}" -resize '2048x2048>' -quality 82 -define webp:method=6 "${outputPath}"`,
				{ stdio: "pipe" },
			);

			// Get new file size
			const newSize = statSync(outputPath).size;
			const newSizeStr = formatBytes(newSize);
			const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

			console.log(
				`✓ Processed: ${file} (${originalSizeStr} → ${newSizeStr}, ${reduction}% reduction)`,
			);
			processed++;
		} catch (error) {
			console.log(`✗ Failed: ${file}`);
			failed++;
		}
	}

	console.log("");
	console.log("==========================");
	console.log("Summary:");
	console.log(`  ✓ Processed: ${processed} images`);
	console.log(`  ⊘ Skipped: ${skipped} images`);
	console.log(`  ✗ Failed: ${failed} images`);
	console.log(`  📁 Output: ${DEST_DIR}`);
} catch (error) {
	console.error("Error:", error.message);
	process.exit(1);
}

function formatBytes(bytes: number): string {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const sizes = ["B", "KB", "MB"];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
