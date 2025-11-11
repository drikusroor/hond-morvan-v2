# HondMorvan v2 🐕

Modern website voor HondMorvan vakantiehuis, gebouwd met Astro + Decap CMS.

## 🚀 Features

- ✅ **Astro** - Ultra-snelle static site generator
- ✅ **Decap CMS** - Gebruiksvriendelijk admin panel op `/admin/`
- ✅ **GitHub Pages** - Gratis hosting
- ✅ **TypeScript** - Type safety
- ✅ **Responsive Design** - Werkt op alle apparaten
- ✅ **SEO Optimized** - Goede vindbaarheid in Google

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `bun install` | Installeer dependencies |
| `bun run dev` | Start dev server op `localhost:4321` |
| `bun run build` | Bouw productie site naar `./dist/` |
| `bun run preview` | Preview productie build lokaal |

## 📝 Content Beheren

### Via Decap CMS (Aanbevolen)

1. Ga naar `hondmorvan.nl/admin/` (of `localhost:4321/admin/` lokaal)
2. Log in met GitHub account
3. Bewerk pagina's, voeg reviews toe, upload afbeeldingen
4. Klik op "Publish" → Site wordt automatisch bijgewerkt

### Via Git/Lokaal

Content staat in `src/content/pages/*.md` - bewerk de markdown bestanden en commit naar `main`.

## � Deployment

Push naar `main` branch → GitHub Actions bouwt en deploy automatisch naar GitHub Pages.

**Custom domain**: `hondmorvan.nl` (geconfigureerd in `public/CNAME`)

## 📱 Voor meer informatie

Zie `DEPLOYMENT_OPTIONS.md` voor uitgebreide setup instructies en `WEBSITE_ANALYSIS.md` voor technische details.
