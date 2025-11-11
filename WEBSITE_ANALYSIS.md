# Website Analysis: HondMorvan.nl

## Overview

**Technology Stack:**

- Generated with: "Web Page Maker" (WYSIWYG tool)
- Layout Method: Absolute positioning with pixel-perfect placement
- JavaScript: Legacy Macromedia/Adobe functions (MM_swapImage, etc.)
- External Integration: Disqus comments system

**Current Implementation:**

- Fixed-width layout (1333-1397px depending on page)
- All positioning is absolute with hardcoded pixel values
- No responsive design
- Inline CSS in each HTML file (duplicated across pages)
- Image-based navigation with hover states
- ISO-8859-1 character encoding (Latin-1)

---

## Layout Structure

### Page Dimensions

Each page uses a centered container with fixed width:

```css
div#container {
    position: relative;
    width: 1333px-1397px; /* varies by page */
    margin: auto;
    text-align: left;
}

body {
    text-align: center;
    margin: 0;
    background-color: #FFC58A; /* peachy/orange color */
}
```

### Layout Components (Absolute Positioned)

All pages follow a similar absolute-positioned structure:

1. **Header Section** (top: 0px)
   - Full-width header image (1333x337px)
   - Page-specific header variants (contact, gastenboek, kaart, etc.)

2. **Navigation Bar** (top: ~347-348px)
   - 6-7 navigation buttons
   - Image-based with hover states (rollover effect)
   - Positioned at left: 36px, 211px, 386px, 561px, 736px, 911px, 1086px
   - Links: Home, Foto's, Kaart, Gastenboek, Tarieven, Links, Contact

3. **Main Content Area** (top: ~382-412px)
   - Left sidebar images (left: 0-8px, width: 185-186px)
   - Main text content (left: 203-229px, width: 686-696px)
   - Right sidebar images (left: 917-922px, width: 413-422px)

4. **Footer/Bottom Images**
   - Large decorative images at bottom
   - Various heights depending on page

---

## Reusable Components

### 1. **Header Component**

Each page has a unique header image but same structure:

- `hondmorvan-header1.png` (general)
- `hondmorvan-contactheader1.png`
- `hondmorvan-gastenboekheader1.png`
- `hondmorvan-kaartheader1.png`
- etc.

**WordPress/SSG Implementation:**

- Create dynamic header component with page-specific images
- Could potentially replace with modern CSS header with text overlay

### 2. **Navigation Menu**

Current implementation uses 37 navigation GIF images:

- 6 different navigation states per page (22405640-646, 22597990-995, etc.)
- Each button has two states: normal (i.gif) and hover (a.gif)
- Navigation items:
  1. Home (index.html / empty link)
  2. Foto's (links to #)
  3. Kaart (kaart.html)
  4. Gastenboek (gastenboek.html)
  5. Tarieven (tarieven.html)
  6. Links (links.html)
  7. Contact (contact.html)

**WordPress/SSG Implementation:**

- Replace image-based navigation with CSS/HTML
- Use WordPress menu system or component-based navigation
- Maintain same visual style with CSS hover effects
- Extract text from images for SEO

### 3. **Typography System**

Utility classes for font sizes (ws6-ws72):

```css
.ws6 {font-size: 8px;}
.ws8 {font-size: 11px;}
.ws10 {font-size: 13px;}
.ws12 {font-size: 16px;}
.ws14 {font-size: 19px;}
.ws16 {font-size: 21px;}
.ws18 {font-size: 24px;}
.ws22 {font-size: 29px;}
/* etc. */
```

Default paragraph style:

```css
.wpmd {
    font-size: 13px;
    font-family: Arial, Helvetica, Sans-Serif;
    font-style: normal;
    font-weight: normal;
}
```

**WordPress/SSG Implementation:**

- Convert to modern rem-based typography system
- Map to semantic heading levels (h1, h2, h3, p, etc.)
- Create consistent spacing/rhythm

### 4. **Sidebar Images**

Pattern-based naming for page-specific decorative images:

- Left: `hondmorvan-{page}links1.png`, `hondmorvan-{page}links2.png`
- Right: `hondmorvan-{page}rechts1.png`, `hondmorvan-{page}rechts2.png`, etc.

**WordPress/SSG Implementation:**

- Store as featured images or custom fields
- Create sidebar component that pulls appropriate images
- Consider replacing with CSS-styled sidebars or actual content

### 5. **Color Scheme**

```css
- Background: #FFC58A (peachy/orange)
- Primary text: #993300 (dark red-brown)
- Headers: #993300 (dark red-brown)
- Body text: Black (default)
- Highlighted text: #FFFF00 background (yellow)
```

---

## Page Structure

### 6 Main Pages

1. **index.html** (Home)
   - Long-form content about the vacation house
   - Multiple decorative images
   - YouTube video link
   - Links to other pages

2. **contact.html**
   - Contact information (phone, email)
   - Availability calendar for 2026
   - Shorter content

3. **gastenboek.html** (Guestbook)
   - Contains guest reviews/testimonials
   - Long scrolling page (349 lines)
   - Multiple guest entries

4. **kaart.html** (Map)
   - Location/map information
   - Likely contains embedded map

5. **tarieven.html** (Rates/Pricing)
   - Pricing information for 2025/2026
   - Rental terms and conditions
   - Detailed legal text

6. **links.html**
   - External links and resources

---

## JavaScript Functionality

### Legacy Functions (Need Replacement)

1. **Image Rollover Effects:**

```javascript
MM_swapImage() / MM_swapImgRestore()
MM_preloadImages()
MM_findObj()
```

- Pre-loads hover state images
- Swaps images on mouseover/mouseout
- Used for navigation buttons

**Modern Replacement:**

- CSS :hover states with background-image
- Or CSS sprites
- Or modern image components

2. **Disqus Integration:**

```javascript
var disqus_shortname = 'hondmorvan';
```

- Used for comments/guestbook functionality
- Can be retained or replaced with WordPress comments

3. **Audio Playback (Unused):**

```javascript
function jsPlay(soundobj)
```

- Legacy function, appears unused

---

## Content Types to Extract

### 1. **Text Content**

- Main page description (home)
- Contact information
- Pricing details and terms
- Guestbook entries
- Links and resources

### 2. **Images (84 files)**

Categorized by type:

**A. Structural/Decorative (page-specific):**

- Headers: 6 files (one per page type)
- Left sidebars: ~12 files
- Right sidebars: ~15 files
- Navigation: 37 GIF files

**B. Content Images:**

- Property photos: `gite herfst.JPG`, `gite 2016 10.jpg`
- Map: `kaart.png`
- Nature photos: `morvan herfstbos.JPG`
- Guest/activity photos: Various JPGs
- Drawings: `tekening Mirte.jpg`

### 3. **Structured Data**

- Pricing table (2025/2026 rates)
- Availability calendar
- Contact details
- Terms and conditions
- Navigation structure

---

## Key Challenges for Migration

### 1. **Absolute Positioning**

- Entire layout uses `position: absolute` with pixel coordinates
- Not responsive at all
- Need complete layout redesign

**Solution:**

- Rebuild with modern CSS Grid or Flexbox
- Create responsive breakpoints
- Maintain visual hierarchy

### 2. **Image-Based Navigation**

- Navigation is entirely image-based
- Poor for SEO and accessibility
- Not mobile-friendly

**Solution:**

- Extract text from navigation images
- Build HTML/CSS navigation
- Add proper semantic markup
- Ensure keyboard navigation

### 3. **Inline Styles**

- All CSS is duplicated in each HTML file
- No external stylesheet
- Hard to maintain consistency

**Solution:**

- Extract common styles to external CSS
- Use CSS preprocessor (SASS/SCSS)
- Create design system/component library

### 4. **Character Encoding**

- Uses ISO-8859-1 (Latin-1)
- Special characters (é, è, ô, etc.) need conversion
- Example: "Château", "Côtes", "Vézelay"

**Solution:**

- Convert all content to UTF-8
- Update meta charset tag
- Test all special characters

### 5. **Duplicated Code**

- Same CSS in every page
- Same JavaScript in every page
- Same header/footer structure

**Solution:**

- Template system (WordPress theme or SSG layouts)
- Component reuse
- DRY principle

### 6. **Fixed Width**

- Layout width: 1333-1397px
- No mobile version
- Modern users expect responsive

**Solution:**

- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px+
- Flexible grid system

---

## WordPress Migration Strategy

### Theme Structure

```
hondmorvan-theme/
├── style.css (theme header + base styles)
├── functions.php
├── header.php (common header + navigation)
├── footer.php
├── index.php
├── page.php (for static pages)
├── single.php (for posts if needed)
├── page-templates/
│   ├── home.php
│   ├── contact.php
│   ├── tarieven.php
│   └── gastenboek.php
├── inc/
│   ├── custom-post-types.php
│   └── customizer.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── template-parts/
    ├── navigation.php
    ├── sidebar-left.php
    └── sidebar-right.php
```

### Page Mapping

1. **Home** → Front page template
2. **Contact** → Contact page template (with form plugin)
3. **Gastenboek** → Either:
   - Comments on a page
   - Custom post type "Testimonials"
   - WPForms testimonial submission
4. **Kaart** → Page with embedded Google Maps
5. **Tarieven** → Page with pricing table (ACF or Gutenberg blocks)
6. **Links** → Page or custom links widget

### Recommended Plugins

- **Contact Form 7** or **WPForms** - for contact form
- **Advanced Custom Fields (ACF)** - for flexible content
- **Testimonials Widget** - for guestbook
- **WP Google Maps** - for location page
- **WPML** or **Polylang** - if adding English version later

### Custom Fields Needed

- Availability dates (repeater field)
- Pricing (by season)
- Property features
- Image galleries (per room/area)
- Testimonials (name, date, content, rating)

---

## SSG Migration Strategy (e.g., Astro, Next.js, 11ty)

### Recommended: **Astro** (best for content-heavy sites)

```
src/
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── components/
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── Sidebar.astro
│   └── Footer.astro
├── pages/
│   ├── index.astro
│   ├── contact.astro
│   ├── gastenboek.astro
│   ├── kaart.astro
│   ├── tarieven.astro
│   └── links.astro
├── content/
│   ├── testimonials/
│   │   ├── 2024-01-guest1.md
│   │   └── 2024-02-guest2.md
│   └── config.ts
├── styles/
│   ├── global.css
│   └── variables.css
└── public/
    └── images/ (all images)
```

### Content Collections

```typescript
// src/content/config.ts
const testimonials = defineCollection({
  schema: z.object({
    guest: z.string(),
    date: z.date(),
    rating: z.number().min(1).max(5),
    location: z.string().optional(),
  })
});

const pricing = defineCollection({
  schema: z.object({
    season: z.string(),
    price: z.number(),
    months: z.array(z.string()),
  })
});
```

### Benefits of SSG

- Fast loading (pre-rendered HTML)
- No database needed
- Easy to host (Netlify, Vercel, GitHub Pages)
- Great SEO
- Version control for content
- Lower maintenance

---

## Responsive Design Requirements

### Breakpoints Strategy

```css
/* Mobile First Approach */

/* Mobile: 320px - 767px */
- Single column layout
- Stack navigation vertically (hamburger menu)
- Full-width images
- Readable font sizes (16px base)

/* Tablet: 768px - 1023px */
- Two-column layout (content + sidebar)
- Horizontal navigation
- Adjust image sizes

/* Desktop: 1024px - 1439px */
- Three-column layout (sidebar + content + sidebar)
- Full navigation
- Optimized image sizes

/* Large Desktop: 1440px+ */
- Maintain three-column with max-width
- Center container
- Scale images appropriately
```

### Current Fixed Elements to Make Flexible

1. Container width: 1333px → max-width with padding
2. Navigation: Absolute positioned → Flexbox/Grid
3. Sidebars: Fixed images → Responsive images or CSS backgrounds
4. Typography: Pixel sizes → rem/em units
5. Images: Fixed dimensions → responsive (max-width: 100%, height: auto)

---

## SEO Improvements Needed

### Current Issues

1. **Poor Heading Structure**
   - No proper h1, h2, h3 hierarchy
   - All sizing done with font classes

2. **Image-Based Text**
   - Navigation is images (no text for search engines)
   - Some content might be in images

3. **No Alt Text**
   - Most images have `alt=""` (empty)

4. **Meta Information**
   - Same title on all pages: "hond morvan honden frankrijk vakantie"
   - Same keywords on all pages

5. **No Structured Data**
   - No schema.org markup for:
     - Vacation rental
     - Reviews/testimonials
     - Location/address
     - Pricing

### Improvements Needed

```html
<!-- Unique per page -->
<title>Vakantiehuis Hond Morvan - Contact</title>
<meta name="description" content="Specific page description">

<!-- Proper heading structure -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>

<!-- Alt text for images -->
<img src="gite.jpg" alt="Vakantiehuis Les Bourdeaux in de Morvan">

<!-- Structured data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VacationRental",
  "name": "Gîte Les Bourdeaux",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dun-les-Places",
    "addressCountry": "FR"
  },
  "priceRange": "€360-€425"
}
</script>
```

---

## Accessibility Issues

### Current Problems

1. ❌ **No Skip Links** - Can't skip to main content
2. ❌ **Image-Based Navigation** - Screen readers can't properly announce
3. ❌ **No ARIA Labels** - No accessibility markup
4. ❌ **Poor Color Contrast** - Some text may not meet WCAG AA
5. ❌ **No Focus Indicators** - Keyboard navigation unclear
6. ❌ **Absolute Positioning** - Tab order likely broken

### Required Fixes

```html
<!-- Skip link -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- Semantic navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Main landmark -->
<main id="main">
  <!-- content -->
</main>

<!-- Form labels -->
<label for="email">Email:</label>
<input type="email" id="email" required>
```

---

## Content Extraction Checklist

### Text Content

- [ ] Home page description (main selling points)
- [ ] Property features list
- [ ] Amenities list
- [ ] Area description
- [ ] Activities nearby
- [ ] Contact information
- [ ] Pricing structure
- [ ] Terms and conditions
- [ ] All guestbook entries
- [ ] Link descriptions

### Images to Optimize

- [ ] Compress all JPG/PNG files
- [ ] Convert decorative PNGs to modern WebP
- [ ] Create responsive image sets (srcset)
- [ ] Generate thumbnails
- [ ] Add proper alt text
- [ ] Organize by category

### Structural Elements

- [ ] Extract navigation text from images
- [ ] Map page hierarchy
- [ ] Document internal linking
- [ ] List external links
- [ ] Note special features (YouTube video, Disqus)

---

## Modern Feature Additions

### Enhancements to Consider

1. **Image Gallery**
   - Lightbox for property photos
   - Slideshow on homepage
   - Before/after or seasonal photos

2. **Booking Calendar**
   - Interactive availability calendar
   - Booking request form
   - Email notifications

3. **Multi-language Support**
   - Dutch (current)
   - English (for international guests)
   - Maybe French/German

4. **Maps Integration**
   - Embedded Google Maps
   - Directions
   - Nearby attractions markers

5. **Testimonials Enhancement**
   - Star ratings
   - Guest photos (with permission)
   - Filter/sort options
   - Link to Disqus or native comments

6. **Mobile App Features**
   - Click-to-call
   - Click-to-email
   - Share buttons
   - Save to favorites

7. **Performance**
   - Lazy loading images
   - Critical CSS
   - Service worker for offline
   - CDN for images

---

## Implementation Phases

### Phase 1: Content & Planning (Week 1)

- Extract all text content
- Organize and optimize images
- Document current navigation structure
- Create sitemap and wireframes
- Choose platform (WordPress vs SSG)

### Phase 2: Design System (Week 1-2)

- Create responsive design mockups
- Define color palette (keep current or refresh)
- Typography system
- Component library
- Accessibility guidelines

### Phase 3: Development (Week 2-4)

- Set up WordPress theme or SSG project
- Build reusable components
- Implement responsive layouts
- Migrate content
- Create forms and interactive elements

### Phase 4: Testing & SEO (Week 4-5)

- Cross-browser testing
- Mobile device testing
- Accessibility audit (WCAG AA)
- SEO optimization
- Performance testing (Lighthouse)

### Phase 5: Launch & Migration (Week 5-6)

- Set up hosting
- Configure domain
- SSL certificate
- Redirect old URLs
- Monitor analytics

---

## Technology Recommendations

### Option A: WordPress (Best for non-technical client)

**Pros:**

- Easy content management
- Familiar interface
- Plugin ecosystem
- Easy for client to update
- Booking plugins available

**Cons:**

- Requires hosting with PHP/MySQL
- More maintenance (updates, security)
- Slower than static site

**Hosting:** SiteGround, Kinsta, or WP Engine

---

### Option B: Astro + Decap CMS (Best for performance)

**Pros:**

- Extremely fast
- Modern development
- Git-based content
- Free hosting (Netlify/Vercel)
- Great SEO

**Cons:**

- Steeper learning curve for client
- Need developer for major changes
- Limited dynamic features

**Hosting:** Netlify, Vercel, or Cloudflare Pages (free tier available)

---

### Option C: Next.js + Sanity CMS (Best for scalability)

**Pros:**

- Very flexible
- Great CMS experience
- Real-time preview
- Excellent image optimization
- Can add booking system

**Cons:**

- More complex setup
- CMS has costs after free tier
- Requires Node.js knowledge

**Hosting:** Vercel (free for hobby projects)

---

## Final Recommendation

**For this specific project, I recommend Astro + Decap CMS:**

**Reasoning:**

1. Simple content structure (6 pages)
2. Performance is crucial for SEO
3. Low maintenance requirements
4. Free hosting
5. Content doesn't change daily
6. Modern, clean code
7. Easy to add features later
8. Great image optimization
9. Can integrate booking form via service (Typeform, Calendly)
10. Git-based workflow ensures no data loss

**Alternative:** If the client needs to frequently update pricing/availability and isn't technical, WordPress with a custom theme is the better choice.

---

## Immediate Next Steps

1. **Get Client Input:**
   - Confirm all current content is still relevant
   - Any new content to add?
   - Desired new features?
   - Budget and timeline?

2. **Design Phase:**
   - Create modern mockups maintaining brand feel
   - Show responsive layouts
   - Get approval before development

3. **Content Preparation:**
   - Rewrite content with SEO in mind
   - Translate navigation images to text
   - Organize image library
   - Plan URL structure

4. **Technical Setup:**
   - Set up development environment
   - Initialize project (Astro/WordPress)
   - Configure build tools
   - Set up version control

---

## Estimated Timeline

- **Content Extraction & Planning:** 3-5 days
- **Design & Wireframes:** 5-7 days
- **Development:** 10-15 days
- **Testing & Refinement:** 5-7 days
- **Launch Preparation:** 2-3 days

**Total:** 4-6 weeks for complete rebuild

---

## Budget Considerations

### WordPress Route

- Theme development: Custom work
- Hosting: €10-30/month
- Premium plugins: €50-150/year
- Domain: €10-15/year
- SSL: Often free with hosting
- Maintenance: Ongoing

### Astro/Static Route

- Development: Custom work
- Hosting: FREE (Netlify/Vercel)
- Domain: €10-15/year
- SSL: FREE (included)
- Maintenance: Minimal
- CMS: FREE (Decap CMS)

**Static site saves approximately €200-400/year in hosting costs.**
