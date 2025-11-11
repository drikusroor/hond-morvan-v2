# Decap CMS - Lokaal Testen

## ✅ Configuratie voor Lokaal Testen

De CMS is nu geconfigureerd met `test-repo` backend voor lokaal testen.

### Hoe te gebruiken

1. **Start dev server** (als deze nog niet draait):

   ```bash
   bun run dev
   ```

2. **Open admin panel**:
   - Ga naar: `http://localhost:4322/admin/`

3. **Test de interface**:
   - Klik op "Pagina's" → selecteer een pagina
   - Bewerk tekst in de editor
   - Klik op "Gastenboek" → voeg een review toe
   - Upload afbeeldingen

### ⚠️ Belangrijk

**Met `test-repo` backend:**

- ✅ Je kunt de CMS interface testen
- ✅ Alle widgets werken (editor, image upload, etc.)
- ❌ Wijzigingen worden NIET opgeslagen naar bestanden
- ❌ Na page refresh zijn wijzigingen weg

### 💾 Voor Echte Edits

**Optie 1: Direct bewerken (Aanbevolen voor nu)**

- Bewerk bestanden in `src/content/pages/*.md`
- Hot reload update automatisch
- Wijzigingen blijven behouden

**Optie 2: Git Gateway (Later, voor productie)**
Schakel terug naar GitHub backend in `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: drikusroor/hond-morvan-v2
  branch: main
```

Vereist:

- GitHub OAuth app setup
- Netlify Identity of eigen OAuth server

## 🎯 Huidige Status

- ✅ CMS interface werkt lokaal
- ✅ Test-repo voor UI testing
- ⏳ GitHub backend voor echte edits (setup later)

## 📝 Content Bewerken (Nu)

**Rechtstreeks via bestanden:**

```bash
# Pagina's
src/content/pages/home.md
src/content/pages/contact.md
src/content/pages/tarieven.md
src/content/pages/kaart.md
src/content/pages/links.md

# Testimonials
src/content/testimonials/*.md
```

Bewerk in VS Code → Save → Zie wijzigingen direct in browser!
