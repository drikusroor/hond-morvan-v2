# SSG + Admin Panel - GitHub Pages Deployment Options

## Good News: Decap CMS Works with GitHub Pages! ✅

**Decap CMS (formerly Netlify CMS) can absolutely work with GitHub Pages.** Despite the name, it's not tied to Netlify hosting.

### How Decap CMS Works with GitHub Pages

1. **Static Admin Interface**: `/admin/index.html` is just a static page
2. **GitHub as Backend**: Uses GitHub API for authentication and file storage
3. **No Server Needed**: Everything runs client-side in the browser
4. **Commits to GitHub**: When she saves changes, Decap commits directly to the repo
5. **GitHub Pages Rebuilds**: GitHub Actions automatically rebuild and deploy

### Setup Flow

```
User edits content in Decap CMS
    ↓
Decap commits changes to GitHub repo
    ↓
GitHub Actions triggers build (Astro/11ty/etc.)
    ↓
GitHub Pages deploys updated site
    ↓
Changes live on hondmorvan.nl
```

---

## Option 1: Astro + Decap CMS + GitHub Pages ⭐ **RECOMMENDED**

### Why This Works

- ✅ Decap CMS provides friendly admin UI at `hondmorvan.nl/admin/`
- ✅ GitHub Pages hosting (free)
- ✅ Custom domain support (hondmorvan.nl)
- ✅ HTTPS automatic via GitHub
- ✅ No Vercel/Netlify needed
- ✅ She logs in with GitHub account (or GitHub OAuth)

### What She Sees

1. Goes to `hondmorvan.nl/admin/`
2. Logs in with GitHub (one-time setup)
3. Sees friendly editor interface
4. Edits text, uploads images, changes prices
5. Clicks "Save" → Site updates in 1-2 minutes

### Technical Setup

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Decap CMS Config

```yaml
# public/admin/config.yml
backend:
  name: github
  repo: drikusroor/hond-morvan-v2
  branch: main

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "pages"
    label: "Pagina's"
    files:
      - label: "Home"
        name: "home"
        file: "src/content/pages/home.md"
        fields:
          - {label: "Titel", name: "title", widget: "string"}
          - {label: "Inhoud", name: "body", widget: "markdown"}
      - label: "Tarieven"
        name: "tarieven"
        file: "src/content/pages/tarieven.md"
        fields:
          - {label: "Titel", name: "title", widget: "string"}
          - label: "Seizoenen"
            name: "seasons"
            widget: "list"
            fields:
              - {label: "Naam", name: "name", widget: "string"}
              - {label: "Prijs", name: "price", widget: "number"}
              - {label: "Maanden", name: "months", widget: "string"}
```

### Authentication Options

**A. GitHub OAuth (Easier for her)**

- She needs a GitHub account
- One-time OAuth setup
- Logs in with "Login with GitHub" button
- No technical knowledge needed

**B. GitHub PAT (Personal Access Token)**

- More technical
- She needs to generate token
- Paste in admin on first visit
- Stored in browser

**Recommendation: Use GitHub OAuth** - Set it up once, she just clicks "Login with GitHub"

---

## Option 2: Windows Desktop App for Git + Markdown

If you want to avoid web-based CMS entirely, here are Windows apps she could use:

### A. **Obsidian + Obsidian Git Plugin** ⭐ **Best Desktop Option**

**What it is:** Beautiful markdown editor with Git integration

**Pros:**

- ✅ Very user-friendly (like a notes app)
- ✅ Live preview while editing
- ✅ Drag-and-drop images
- ✅ Git sync with one button click
- ✅ Works offline
- ✅ Free for personal use

**Cons:**

- ❌ Still needs basic Git understanding
- ❌ Initial setup required

**How it works:**

1. She opens Obsidian
2. Edits markdown files like documents
3. Clicks "Sync" button → pushes to GitHub
4. GitHub Actions deploys site

**Setup:**

```
Install Obsidian → 
Install Obsidian Git plugin → 
Clone repo → 
Edit files → 
Click "Commit and Push"
```

### B. **GitHub Desktop + Typora/MarkText**

**Two-app approach:**

1. **Typora** (€15 one-time) or **MarkText** (free)
   - WYSIWYG markdown editor
   - No code visible, just formatted text
   - Easy image insertion

2. **GitHub Desktop**
   - Visual Git interface
   - Click to sync changes
   - No command line

**How it works:**

1. Edit files in Typora/MarkText
2. Open GitHub Desktop → see changes
3. Write commit message (e.g., "Prijzen 2026 bijgewerkt")
4. Click "Push origin"
5. GitHub Actions builds and deploys

### C. **Prose.io** (Web-based, No Install)

**What it is:** Simple web editor for GitHub repos

**Pros:**

- ✅ No installation needed
- ✅ Works in browser
- ✅ Clean interface
- ✅ Direct GitHub integration

**Cons:**

- ❌ Less features than Decap CMS
- ❌ Basic UI
- ❌ No image upload (needs external solution)

**URL:** `prose.io/#drikusroor/hond-morvan-v2`

---

## Comparison Table

| Solution | Ease of Use | Image Upload | Offline | Cost |
|----------|-------------|--------------|---------|------|
| **Decap CMS** | ⭐⭐⭐⭐⭐ | ✅ Easy | ❌ No | Free |
| **Obsidian + Git** | ⭐⭐⭐⭐ | ✅ Drag & drop | ✅ Yes | Free |
| **Typora + GitHub Desktop** | ⭐⭐⭐⭐ | ✅ Easy | ✅ Yes | €15 one-time |
| **MarkText + GitHub Desktop** | ⭐⭐⭐⭐ | ✅ Easy | ✅ Yes | Free |
| **Prose.io** | ⭐⭐⭐ | ❌ Limited | ❌ No | Free |
| **Direct GitHub.com** | ⭐⭐ | ✅ Possible | ❌ No | Free |

---

## My Recommendation: **Decap CMS** ⭐

### Why?

1. **Works perfectly with GitHub Pages** - No Vercel/Netlify needed
2. **Easiest for non-technical user** - Looks like WordPress
3. **No Windows app to install** - Works in any browser
4. **Image upload built-in** - Drag and drop
5. **Preview before publishing** - See changes before saving
6. **Validation** - Won't let her break the site
7. **Mobile friendly** - Can edit from tablet/phone
8. **Undo/Revert** - Git history means nothing is lost

### What She Needs

1. **GitHub account** (free) - Setup once
2. **Modern browser** (Chrome/Firefox/Edge)
3. **Internet connection** (to access admin panel)

### Setup Time

- Initial setup by you: ~2 hours
- Training her: ~30 minutes
- Her learning curve: She'll be comfortable in 1 session

---

## Project Structure with Decap CMS

```
hond-morvan-v2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages
├── src/
│   ├── content/
│   │   ├── pages/
│   │   │   ├── home.md         # Editable via CMS
│   │   │   ├── tarieven.md
│   │   │   ├── contact.md
│   │   │   └── ...
│   │   ├── testimonials/       # Each review = 1 file
│   │   │   ├── 2024-jan.md
│   │   │   └── 2024-feb.md
│   │   └── config.ts
│   ├── layouts/
│   ├── components/
│   └── pages/
├── public/
│   ├── admin/
│   │   ├── index.html          # Decap CMS admin UI
│   │   └── config.yml          # CMS configuration
│   └── images/
│       └── uploads/            # Her uploaded images go here
├── astro.config.mjs
└── package.json
```

---

## GitHub Pages + Custom Domain Setup

### DNS Configuration (at domain registrar)

```
Type: CNAME
Host: www
Value: drikusroor.github.io

Type: A
Host: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### Repository Settings

1. Settings → Pages
2. Source: GitHub Actions (not branch)
3. Custom domain: `hondmorvan.nl`
4. Enforce HTTPS: ✅ Enabled

### CNAME File

```
# public/CNAME
hondmorvan.nl
```

---

## Decap CMS Features She Can Use

### 1. Rich Text Editor

- Bold, italic, headings
- Bullet lists
- Links
- No markdown knowledge needed

### 2. Image Management

- Drag & drop upload
- Image optimization (automatic)
- Alt text fields
- Delete unused images

### 3. Content Collections

**Pages (fixed):**

- Home
- Contact
- Tarieven
- Kaart
- Links

**Testimonials (repeatable):**

- Add new review
- Edit existing
- Delete old ones
- Reorder

**Pricing (structured):**

```yaml
seasons:
  - name: "April, mei"
    price: 360
    months: "april,mei"
  - name: "Juli, augustus"
    price: 425
    months: "juli,augustus"
```

### 4. Availability Calendar

```yaml
availability:
  - period: "11 juli - 19 september 2026"
    status: "beschikbaar"
  - period: "24 oktober - 31 oktober 2026"
    status: "beschikbaar"
```

She edits this in a simple form, no YAML knowledge needed.

---

## Alternative: Obsidian (If She Prefers Desktop)

### Why Choose Obsidian?

- She's used to working with files (like Web Page Maker)
- Prefers offline work
- Comfortable with folder structure
- Wants full control

### Obsidian Setup Guide (for her)

1. **Install Obsidian** (free)
2. **Open folder as vault** → Select repo folder
3. **Install Obsidian Git plugin**
4. **Configure Git:**
   - Username: [her GitHub username]
   - Email: [her GitHub email]
   - Auto-commit: Every 10 minutes
   - Auto-push: Every hour

5. **Edit files:**
   - Left sidebar: File navigator
   - Main area: Editor (WYSIWYG mode)
   - Right sidebar: Preview

6. **Sync changes:**
   - Cmd/Ctrl + P → "Git: Commit and Push"
   - Or automatic every hour

### Obsidian Content Structure

```
vault/
├── Home.md                 # Homepage content
├── Tarieven.md            # Pricing
├── Contact.md
├── Gastenboek/           # Folder of testimonials
│   ├── 2024-01-Jan.md
│   ├── 2024-02-Piet.md
│   └── ...
└── Attachments/          # Images
    ├── gite-herfst.jpg
    └── ...
```

Files look like:

```markdown
---
title: Home
description: Vakantiehuis in de Morvan
---

# Honden welkom!

In Regional Natuurpark 'Le Morvan'...

![Vakantiehuis](Attachments/gite-herfst.jpg)
```

She sees formatted text, not code.

---

## Implementation Plan: Decap CMS + GitHub Pages

### Phase 1: Setup (You do this)

**Week 1:**

- [ ] Initialize Astro project
- [ ] Configure GitHub Pages deployment
- [ ] Install Decap CMS
- [ ] Create content collections
- [ ] Configure GitHub OAuth
- [ ] Test admin login
- [ ] Import existing content
- [ ] Setup custom domain

### Phase 2: Training (Together)

**1 Hour Session:**

- [ ] Show her admin panel
- [ ] Login process
- [ ] Edit a page
- [ ] Upload an image
- [ ] Change pricing
- [ ] Add testimonial
- [ ] Publish changes
- [ ] See live site update

### Phase 3: Handover

**Documentation for her (in Dutch):**

- Login instructions
- How to edit each page type
- How to upload images
- How to add testimonials
- How to update availability
- Screenshots of each step
- Your contact for help

---

## Code Example: Decap CMS Config

```yaml
# public/admin/config.yml
backend:
  name: github
  repo: drikusroor/hond-morvan-v2
  branch: main
  
locale: nl

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  # Static Pages
  - name: "pages"
    label: "Pagina's"
    files:
      - label: "Home"
        name: "home"
        file: "src/content/pages/home.md"
        fields:
          - {label: "Titel", name: "title", widget: "string"}
          - {label: "Beschrijving", name: "description", widget: "text"}
          - {label: "Inhoud", name: "body", widget: "markdown", 
             buttons: [bold, italic, link, heading-two, heading-three, quote, bulleted-list]}
          - label: "Header afbeelding"
            name: "headerImage"
            widget: "image"
            required: false
      
      - label: "Contact"
        name: "contact"
        file: "src/content/pages/contact.md"
        fields:
          - {label: "Titel", name: "title", widget: "string"}
          - {label: "Telefoon", name: "phone", widget: "string"}
          - {label: "Email", name: "email", widget: "string"}
          - label: "Beschikbaarheid 2026"
            name: "availability"
            widget: "list"
            fields:
              - {label: "Periode", name: "period", widget: "string"}
              - {label: "Status", name: "status", widget: "select", 
                 options: ["beschikbaar", "gereserveerd", "verhuurd"]}
      
      - label: "Tarieven"
        name: "tarieven"
        file: "src/content/pages/tarieven.md"
        fields:
          - {label: "Titel", name: "title", widget: "string"}
          - {label: "Jaar", name: "year", widget: "string", default: "2025/2026"}
          - label: "Seizoenen"
            name: "seasons"
            widget: "list"
            fields:
              - {label: "Maanden", name: "months", widget: "string"}
              - {label: "Prijs per week", name: "price", widget: "number"}
          - {label: "Linnengoed (2 personen)", name: "linenPrice2", widget: "number"}
          - {label: "Linnengoed (4 personen)", name: "linenPrice4", widget: "number"}
          - {label: "Eindschoonmaak", name: "cleaningPrice", widget: "number"}
          - {label: "Voorwaarden", name: "body", widget: "markdown"}
  
  # Testimonials Collection
  - name: "testimonials"
    label: "Gastenboek"
    folder: "src/content/testimonials"
    create: true
    slug: "{{year}}-{{month}}-{{name}}"
    fields:
      - {label: "Gast naam", name: "name", widget: "string"}
      - {label: "Datum", name: "date", widget: "datetime", format: "YYYY-MM-DD"}
      - {label: "Locatie", name: "location", widget: "string", required: false}
      - {label: "Beoordeling", name: "rating", widget: "number", 
         min: 1, max: 5, step: 0.5, default: 5}
      - {label: "Bericht", name: "body", widget: "text"}
      - {label: "Foto", name: "photo", widget: "image", required: false}
```

---

## User Experience: What She Sees

### Login Screen

```
┌─────────────────────────────────────┐
│  🏡 HondMorvan Beheer               │
├─────────────────────────────────────┤
│                                     │
│  [Login met GitHub]                 │
│                                     │
└─────────────────────────────────────┘
```

### Dashboard

```
┌─────────────────────────────────────┐
│  📄 Pagina's        ➕ Nieuw         │
├─────────────────────────────────────┤
│  • Home                             │
│  • Contact                          │
│  • Tarieven                         │
│  • Kaart                            │
│  • Links                            │
│  • Gastenboek                       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ⭐ Gastenboek      ➕ Nieuwe review │
├─────────────────────────────────────┤
│  📝 2024-11 - Familie Jansen        │
│  📝 2024-10 - Peter & Maria         │
│  📝 2024-09 - De Vries              │
└─────────────────────────────────────┘
```

### Editing Tarieven

```
┌─────────────────────────────────────┐
│  Tarieven bewerken                  │
├─────────────────────────────────────┤
│  Titel: ________________________    │
│         Tarieven en voorwaarden     │
│                                     │
│  Jaar:  ________________________    │
│         2025/2026                   │
│                                     │
│  Seizoenen:                         │
│  ┌───────────────────────────────┐ │
│  │ Maanden: April, mei           │ │
│  │ Prijs: 360                    │ │
│  │ [❌ Verwijder]                 │ │
│  └───────────────────────────────┘ │
│  [➕ Nieuw seizoen toevoegen]       │
│                                     │
│  [Opslaan] [Preview] [Annuleren]   │
└─────────────────────────────────────┘
```

Simple, clean, user-friendly!

---

## Final Recommendation

**Go with Decap CMS + GitHub Pages + GitHub OAuth**

### Why This is Perfect

1. ✅ No Vercel needed - GitHub Pages works great
2. ✅ She gets easy web interface
3. ✅ You maintain full Git history
4. ✅ Free hosting forever
5. ✅ Custom domain (hondmorvan.nl)
6. ✅ Automatic HTTPS
7. ✅ She can edit from any device
8. ✅ Preview before publishing
9. ✅ Can't accidentally break site
10. ✅ You can help remotely if needed

### If She Really Wants Desktop App

**Second choice: Obsidian + Obsidian Git Plugin**

- More control
- Offline work
- Still uses Git properly
- Beautiful interface

But honestly, Decap CMS is easier and more foolproof for someone in their 60s who just wants to update text and images occasionally.

---

## Next Steps

Want me to:

1. **Scaffold the Astro + Decap CMS project?**
2. **Create the GitHub Actions workflow?**
3. **Write the Dutch documentation for her?**
4. **Set up the content collections based on current site?**

Let me know and I'll get started! 🚀
