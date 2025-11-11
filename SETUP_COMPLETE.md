# 🎉 HondMorvan v2 - Setup Compleet

Gefeliciteerd! Het Astro + Decap CMS project is succesvol opgezet.

## ✅ Wat is er klaar?

### Core Setup

- ✅ Astro 5.x project met TypeScript
- ✅ Content Collections (pages, testimonials)
- ✅ Decap CMS admin interface (`/admin/`)
- ✅ Responsive layout met origineel kleurenschema
- ✅ GitHub Actions workflow voor auto-deployment
- ✅ Alle 6 hoofdpagina's (home, contact, tarieven, kaart, gastenboek, links)
- ✅ Custom domain configuratie (hondmorvan.nl)

### Features

- ✅ Mobile-first responsive design
- ✅ SEO-geoptimaliseerd
- ✅ Dutch (Nederlands) interface
- ✅ Image upload support in CMS
- ✅ Testimonials/gastenboek met ratings
- ✅ Markdown-based content editing

## 🚀 Hoe te Gebruiken

### Lokaal Ontwikkelen

```bash
# Dev server starten
bun run dev
# → http://localhost:4321/

# Admin panel (lokaal)
# → http://localhost:4321/admin/
```

### Content Bewerken

**Via Browser (Decap CMS):**

1. Ga naar `/admin/`
2. Voor lokaal testen: Kies "Work with Local Repository"
3. Voor productie: Login met GitHub

**Via Bestanden:**

- Pagina's: `src/content/pages/*.md`
- Gastenboek: `src/content/testimonials/*.md`

### Deployment

```bash
# Build voor productie
bun run build

# Preview productie build
bun run preview
```

**Auto-deployment:**
Push naar `main` branch → GitHub Actions bouwt en deploy automatisch

## 📝 Volgende Stappen

### 1. GitHub OAuth Setup (voor productie Decap CMS)

**Optie A: GitHub OAuth (Simpelst)**

1. Ga naar: <https://github.com/settings/developers>
2. New OAuth App
   - Name: `HondMorvan CMS`
   - Homepage: `https://hondmorvan.nl`
   - Callback: `https://api.netlify.com/auth/done`
3. Kopieer Client ID en Secret
4. Gebruik Netlify Identity (gratis) voor OAuth

**Optie B: Lokaal/Test Mode**
In `public/admin/config.yml` uncommment:

```yaml
backend:
  name: test-repo
```

### 2. Repository Settings

**Enable GitHub Pages:**

1. Settings → Pages
2. Source: `GitHub Actions`
3. Custom domain: `hondmorvan.nl`
4. ✅ Enforce HTTPS

### 3. DNS Configuratie

Bij domain registrar (waar hondmorvan.nl is geregistreerd):

```
Type: CNAME
Name: www
Value: drikusroor.github.io

Type: A  
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### 4. Content Migreren

De oude site content staat in `downloaded-site/`. Je kunt:

**Handmatig:**

- Kopieer teksten van `downloaded-site/hondmorvan.nl/*.html`
- Plak in `src/content/pages/*.md` (markdown format)

**Automatisch:**

```bash
# Script komt nog - handmatig is snel genoeg voor 6 pagina's
```

**Afbeeldingen:**

```bash
# Kopieer alle benodigde afbeeldingen
cp downloaded-site/hondmorvan.nl/images/* public/images/
```

### 5. Training voor Luda

**Decap CMS Tutorial:**

1. **Login**
   - Ga naar `hondmorvan.nl/admin/`
   - Klik "Login with GitHub"
   - Autoriseer (eerste keer)

2. **Pagina Bewerken**
   - Klik "Pagina's" in zijbalk
   - Selecteer pagina (bijv. "Home")
   - Bewerk tekst in editor
   - Preview rechts
   - Klik "Save" (draft) of "Publish"

3. **Review Toevoegen**
   - Klik "Gastenboek"
   - Klik "New Testimonial"
   - Vul velden in:
     - Gast naam
     - Datum (datepicker)
     - Locatie (optioneel)
     - Beoordeling (1-5 sterren)
     - Bericht
   - Upload foto (optioneel)
   - "Publish"

4. **Afbeelding Uploaden**
   - Bij image veld: klik "+"
   - Selecteer bestand of drag & drop
   - Afbeelding wordt automatisch geüpload

## 🎨 Customization

### Kleuren Aanpassen

In `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-background: #FFC58A;  /* Achtergrond (peachy)  */
  --color-primary: #993300;      /* Hoofdkleur (donkerrood) */
  --color-text: #2c3e50;         /* Tekstkleur */
  --color-white: #ffffff;        /* Wit */
  --color-accent: #FFFF00;       /* Accent (geel) */
}
```

### Navigatie Aanpassen

In `src/layouts/BaseLayout.astro`, sectie `<nav>`:

```html
<li><a href="/nieuwe-pagina">Nieuw Item</a></li>
```

### Extra Pagina Toevoegen

1. Maak `src/content/pages/nieuwe-pagina.md`
2. Maak `src/pages/nieuwe-pagina.astro` (kopieer van bestaande)
3. Voeg toe aan navigatie
4. Voeg toe aan Decap CMS config

## 🐛 Troubleshooting

### Dev Server Start Niet

```bash
# Kill bestaande Astro processes
pkill -f astro
# Probeer opnieuw
bun run dev
```

### Content Collections Fout

```bash
# Regenerate types
rm -rf .astro
bun run dev
```

### Build Fout

```bash
# Clean build
rm -rf dist .astro
bun run build
```

### Decap CMS Laadt Niet

- Check browser console (F12)
- Controleer `public/admin/config.yml` syntax
- Verify GitHub OAuth settings

## 📚 Documentatie

- **Astro**: <https://docs.astro.build>
- **Decap CMS**: <https://decapcms.org/docs/>
- **Content Collections**: <https://docs.astro.build/en/guides/content-collections/>

## 🎯 Roadmap

### Nu Klaar

- [x] Basis setup
- [x] Content collections
- [x] Decap CMS
- [x] Responsive layout
- [x] GitHub Actions

### Binnenkort

- [ ] Content migratie van oude site
- [ ] Afbeeldingen optimaliseren & importeren
- [ ] Fotogalerij component
- [ ] Google Maps integratie
- [ ] Contactformulier (Formspree)
- [ ] Dutch documentation voor Luda

### Toekomst

- [ ] Engelse versie (i18n)
- [ ] Boekingskalender
- [ ] Blog/nieuws
- [ ] Newsletter
- [ ] Social media integratie

## 📞 Support

Voor vragen of problemen, check:

1. Deze README
2. `DEPLOYMENT_OPTIONS.md` (technische details)
3. `WEBSITE_ANALYSIS.md` (oude site analyse)
4. Astro docs: <https://docs.astro.build>

---

**Status**: ✅ Klaar voor lokale ontwikkeling en content migratie!
**Next**: Migreer oude site content en setup GitHub OAuth voor productie.
