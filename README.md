# Hond Morvan V2

Hond Morvan V2 is the project to rebuild the original Hond Morvan website, which had been made using "Web Page Maker" that seems to be no longer available. The goal is to download / scrape the original website, its pages, images, etc. and [use this as a basis](./WEBSITE_ANALYSIS.md) for a WordPress theme + content, or for a Static Site Generator tool.

## Getting started

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Download original site

See also [Website Download Summary](./WEBSITE_DOWNLOAD_SUMMARY.md)

```bash
bun run download-website.ts
```

This project was created using `bun init` in bun v1.3.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
