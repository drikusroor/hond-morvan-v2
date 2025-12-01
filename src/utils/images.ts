/**
 * Image path utility for consistent image references
 * Handles base path configuration for GitHub Pages deployment
 */

/**
 * Common image paths
 */
const IMAGES = {
	// // Header images per page
	// HEADER_HOME: "/images/hondmorvan-header1.png",
	// HEADER_CONTACT: "/images/hondmorvan-contactheader1.png",
	// HEADER_GASTENBOEK: "/images/hondmorvan-gastenboekheader1.png",
	// HEADER_KAART: "/images/hondmorvan-kaartheader1.png",
	// HEADER_LINKS: "/images/hondmorvan-linksheader1.png",
	// HEADER_TARIEVEN: "/images/hondmorvan-header1.png",
	// // Home page
	// HOME_LEFT: "/images/hondmorvan-homelinks1.png",
	// HOME_RIGHT_1: "/images/hondmorvan-homerechts1.png",
	// HOME_RIGHT_2: "/images/hondmorvan-homerechts2.png",
	// HOME_RIGHT_3: "/images/hondmorvan-homerechts3.png",
	// HOME_BOTTOM: "/images/gite herfst.JPG",
	// // Gastenboek page
	// GASTENBOEK_LEFT_1: "/images/hondmorvan-gastenboeklinks1.png",
	// GASTENBOEK_LEFT_2: "/images/hondmorvan-gastenboeklinks2.png",
	// GASTENBOEK_RIGHT: "/images/gastenboek-1.jpg",
	// Kaart page
	// KAART_LEFT_1: "/images/hondmorvan-kaartlinks1.png",
	// KAART_LEFT_2: "/images/gite 2016 10.jpg",
	// KAART_CENTER_1: "/images/kaart.png",
	// KAART_CENTER_2: "/images/hondmorvan-kaartoverzichtmidden.png",
	// KAART_RIGHT_1: "/images/hondmorvan-kaartrechts1.png",
	// KAART_RIGHT_2: "/images/hondmorvan-kaartrechts4.png",
	// KAART_RIGHT_3: "/images/hondmorvan-kaartrechts3.png",
	// // Tarieven page
	// TARIEVEN_LEFT_1: "/images/hondmorvan-tarievenlinks1.png",
	// TARIEVEN_LEFT_2: "/images/hondmorvan-tarievenlinks2.png",
	// TARIEVEN_RIGHT_1: "/images/hondmorvan-tarievenrechts1.png",
	// TARIEVEN_RIGHT_2: "/images/hondmorvan-tarievenrechts2.png",
	// TARIEVEN_RIGHT_3: "/images/hondmorvan-tarievenrechts4.png",
	// TARIEVEN_RIGHT_4: "/images/hondmorvan-tarievenrechts5.png",
	// // Links page
	// LINKS_LEFT_1: "/images/hondmorvan-linklinks1.png",
	// LINKS_LEFT_2: "/images/hondmorvan-linklinks2.png",
	// LINKS_RIGHT_1: "/images/hondmorvan-linklrechts1.png",
	// LINKS_RIGHT_2: "/images/hondmorvan-linklrechts4.png",
	// LINKS_RIGHT_3: "/images/hondmorvan-linklrechts3.png",
	// LINKS_RIGHT_4: "/images/hondmorvan-linklrechts5.png",
	// // Contact page
	// CONTACT_LEFT_1: "/images/hondmorvan-contactlinks1.png",
	// CONTACT_LEFT_2: "/images/hondmorvan-contactlinks2.png",
	// CONTACT_RIGHT_1: "/images/hondmorvan-contactrechts1.png",
	// CONTACT_RIGHT_2: "/images/hondmorvan-contactrechts2.png",
	// CONTACT_RIGHT_3: "/images/hondmorvan-contactrechts3.png",
	// CONTACT_RIGHT_4: "/images/hondmorvan-contactrechts4.png",
} as const;

export const images = import.meta.glob<{ default: ImageMetadata }>(
	"/src/assets/images/*.{jpeg,jpg,png,gif,webp}",
);

export const getImage = (imagePath: string) => {
	if (!imagePath) {
		throw new Error("getImage - imagePath is undefined or empty");
	}

	// Strip base path
	imagePath = imagePath.replace(import.meta.env.BASE_URL, "");

	// Normalize path to start with /src/assets

	const normalizedImagePath = "/src/assets/" + imagePath;
	imagePath = normalizedImagePath;

	const keys = Object.keys(images);
	const re = new RegExp(`^${imagePath}$`);
	const matchedKey = keys.find((key) => re.test(key));

	if (!matchedKey) {
		console.warn(
			`getImage - No match found for imagePath: "${imagePath}" in images keys:`,
			keys,
		);
		throw new Error(
			`"${imagePath}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif,webp}"`,
		);
	} else {
		console.log("getImage - matchedKey:", matchedKey);
		imagePath = matchedKey;
	}

	// Strip base path if present
	if (imagePath.startsWith(import.meta.env.BASE_URL)) {
		imagePath = imagePath.slice(import.meta.env.BASE_URL.length - 1);
	}

	const image = images[imagePath]();
	if (!image) {
		throw new Error(
			`"${imagePath}" does not exist in glob: "src/assets/images/*.{jpeg,jpg,png,gif,webp}"`,
		);
	}
	return image;
};
