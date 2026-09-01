import { defineCollection, z } from "astro:content";

// Pages collection - for main site pages (home, contact, etc.)
const pages = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		headerImage: z.string().optional(),
		leftColumnImages: z.array(z.string()).optional(),
		rightColumnImages: z.array(z.string()).optional(),
		bottomImages: z.array(z.string()).optional(),
		galleryImages: z.array(z.string()).optional(),
	}),
});

// Testimonials collection - for guest reviews
const testimonials = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		date: z.coerce.date(),
		// Original period label from the old site (e.g. "augustus/september 2025").
		// Shown instead of the exact date when the source only recorded a month.
		period: z.string().optional(),
		location: z.string().optional(),
		rating: z.number().min(1).max(5).default(5),
		photo: z.string().optional(),
	}),
});

// Bookings collection - for rental availability tracking
const bookings = defineCollection({
	type: "content",
	schema: z.object({
		guestName: z.string().optional(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		status: z.enum(["gereserveerd", "optie", "geblokkeerd"]).default("optie"),
		notes: z.string().optional(),
	}),
});

// Configuration collection - for site-wide settings
const config = defineCollection({
	type: "data",
	schema: z.object({
		// Contact information
		phone: z.string().optional(),
		email: z.string().email().optional(),

		// Pricing
		seasons: z
			.array(
				z.object({
					months: z.string(),
					price: z.number(),
				}),
			)
			.optional(),

		linenPrice2: z.number().optional(),
		linenPrice4: z.number().optional(),
		cleaningPrice: z.number().optional(),

		// Availability
		availability: z
			.array(
				z.object({
					period: z.string(),
					status: z.enum(["beschikbaar", "gereserveerd", "verhuurd"]),
				}),
			)
			.optional(),
	}),
});

export const collections = {
	pages,
	testimonials,
	bookings,
	config,
};
