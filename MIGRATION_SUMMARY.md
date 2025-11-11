# HondMorvan.nl - Quick Migration Summary

## What We Have

**6 HTML Pages:**

1. index.html (Home)
2. contact.html
3. gastenboek.html (Guestbook/Testimonials)
4. kaart.html (Map)
5. tarieven.html (Pricing/Terms)
6. links.html

**84 Image Files (34 MB total):**

- 6 header images (page-specific)
- 37 navigation GIFs (image-based buttons with hover states)
- ~27 sidebar decorative images
- ~14 content/property photos

**Key Content:**

- Property description and features
- Pricing for 2025/2026
- Terms and conditions
- Guest testimonials
- Contact info (phone, email)
- Availability dates
- External links

## Current Tech Issues

❌ **Not mobile-friendly** - Fixed 1333px width
❌ **Poor SEO** - Image-based navigation, no alt text, same title on all pages
❌ **Not accessible** - No semantic HTML, broken tab order
❌ **Old tech** - Absolute positioning, inline styles, legacy JavaScript
❌ **Not maintainable** - All CSS duplicated in every file

## Recommended Approach: Astro Static Site

### Why Astro?

- ✅ **Ultra-fast** performance (perfect for SEO)
- ✅ **FREE hosting** (Netlify/Vercel)
- ✅ **Mobile-friendly** out of the box
- ✅ **Low maintenance** - no database, no WordPress updates
- ✅ **Modern code** - easy to enhance later
- ✅ **Great images** - automatic optimization
- ✅ **SEO-ready** - proper HTML structure

### Project Structure

```
src/
├── layouts/
│   └── MainLayout.astro (header, nav, footer)
├── components/
│   ├── Navigation.astro (replace image nav)
│   ├── TestimonialCard.astro
│   └── PricingTable.astro
├── pages/
│   ├── index.astro (home)
│   ├── contact.astro
│   ├── gastenboek.astro (testimonials)
│   ├── kaart.astro (map)
│   ├── tarieven.astro (pricing)
│   └── links.astro
└── public/
    └── images/ (all 84 images, optimized)
```

### What Needs to Be Done

**Phase 1: Content Extraction (1 week)**

- [x] Download entire site
- [ ] Extract text from all pages
- [ ] Optimize all images (compress, convert to WebP)
- [ ] Extract navigation text from image buttons
- [ ] Organize testimonials

**Phase 2: Design (1 week)**

- [ ] Create responsive mockups (mobile, tablet, desktop)
- [ ] Design new text-based navigation
- [ ] Plan color scheme (keep peachy orange theme or modernize)
- [ ] Typography system

**Phase 3: Development (2-3 weeks)**

- [ ] Set up Astro project
- [ ] Build layout components
- [ ] Create responsive navigation
- [ ] Migrate all 6 pages
- [ ] Add contact form (Formspree or similar)
- [ ] Embed Google Maps
- [ ] Add testimonials section
- [ ] Optimize images

**Phase 4: SEO & Testing (1 week)**

- [ ] Add proper meta tags (unique per page)
- [ ] Add alt text to all images
- [ ] Test on mobile devices
- [ ] Accessibility audit
- [ ] Performance testing (aim for 95+ Lighthouse score)
- [ ] Cross-browser testing

**Phase 5: Launch (3-5 days)**

- [ ] Deploy to Netlify/Vercel
- [ ] Configure domain (hondmorvan.nl)
- [ ] Set up SSL (automatic)
- [ ] Test live site
- [ ] Monitor analytics

### Key Features to Add

1. **Responsive Design**
   - Mobile hamburger menu
   - Flexible image gallery
   - Touch-friendly buttons

2. **SEO Improvements**
   - Unique titles: "Contact - Vakantiehuis Hond Morvan"
   - Meta descriptions
   - Structured data (vacation rental schema)
   - Proper heading hierarchy (h1, h2, h3)

3. **Performance**
   - Lazy loading images
   - WebP format with JPG fallback
   - Minified CSS/JS
   - CDN delivery

4. **Accessibility**
   - Skip to content link
   - Proper ARIA labels
   - Keyboard navigation
   - Screen reader friendly

5. **Modern Features**
   - Contact form with validation
   - Interactive availability calendar
   - Lightbox for photos
   - Social sharing buttons

## Alternative: WordPress

If the client needs to frequently update content themselves and isn't technical:

**Pros:**

- Easy to use admin panel
- Client can update pricing, availability, content
- Many booking plugins available
- Familiar interface

**Cons:**

- Hosting costs (€15-30/month)
- Maintenance required (updates, backups)
- Slower than static site
- Security concerns

**Recommendation:** WordPress only if client updates content weekly. For this site (content changes seasonally), static site is better.

## Timeline & Costs

### Astro Route

- **Development:** 4-6 weeks
- **Hosting:** FREE (Netlify/Vercel)
- **Domain:** €12/year
- **Ongoing costs:** €12/year (domain only)
- **Maintenance:** Minimal (content updates only)

### WordPress Route

- **Development:** 4-6 weeks  
- **Hosting:** €180-360/year
- **Domain:** €12/year
- **Plugins:** €50-150/year
- **Ongoing costs:** €242-522/year
- **Maintenance:** Regular updates needed

**Savings with static site: €230-510/year**

## Quick Wins

These can be implemented immediately on current site:

1. Add unique page titles
2. Add meta descriptions
3. Add alt text to images
4. Fix character encoding (ISO-8859-1 → UTF-8)
5. Add mobile viewport meta tag

## Next Step

**Decision needed:** Astro (static) or WordPress (CMS)?

Then we can:

1. Start content extraction
2. Create responsive designs
3. Begin development

---

**Full analysis:** See WEBSITE_ANALYSIS.md for complete technical details.
