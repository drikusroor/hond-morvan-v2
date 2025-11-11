# Sidebar Layout Implementation Details

## Layout Structure

### Desktop View (1200px+)
```
┌─────────────────────────────────────────────────────────┐
│                    Header Banner                         │
├─────────────────────────────────────────────────────────┤
│                    Navigation                            │
├──────────┬──────────────────────────┬──────────────────┤
│          │                          │                  │
│  LEFT    │      MAIN CONTENT        │      RIGHT       │
│ SIDEBAR  │                          │     SIDEBAR      │
│          │                          │                  │
│  180px   │      Flexible            │      420px       │
│          │                          │                  │
├──────────┼──────────────────────────┼──────────────────┤
│                    Footer                               │
└─────────────────────────────────────────────────────────┘
```

### Tablet View (768px - 1200px)
```
┌──────────────────────────────────┐
│      Header Banner              │
├──────────────────────────────────┤
│      Navigation                  │
├──────────────────────────────────┤
│    MAIN CONTENT                  │
│    (Full Width)                  │
├──────────────────────────────────┤
│  LEFT SIDEBAR IMAGES             │
│  (Grid Layout - 2 columns)       │
├──────────────────────────────────┤
│  RIGHT SIDEBAR IMAGES            │
│  (Grid Layout - 2 columns)       │
├──────────────────────────────────┤
│      Footer                      │
└──────────────────────────────────┘
```

### Mobile View (< 768px)
```
┌─────────────────────────────┐
│   Header Banner             │
├─────────────────────────────┤
│   Navigation (Stacked)      │
├─────────────────────────────┤
│   MAIN CONTENT              │
│   (Full Width)              │
├─────────────────────────────┤
│   LEFT SIDEBAR IMAGE 1      │
├─────────────────────────────┤
│   LEFT SIDEBAR IMAGE 2      │
├─────────────────────────────┤
│   RIGHT SIDEBAR IMAGE 1     │
├─────────────────────────────┤
│   RIGHT SIDEBAR IMAGE 2     │
├─────────────────────────────┤
│   Footer                    │
└─────────────────────────────┘
```

## Page Configuration Summary

| Page | Left Sidebar | Right Sidebar | Total Images |
|------|--------------|---------------|--------------|
| Home | 1 image | 3 images | 4 |
| Gastenboek | 2 images | 1 image | 3 |
| Kaart | 1 image | 3 images | 4 |
| Tarieven | 2 images | 4 images | 6 |
| Links | 2 images | 4 images | 6 |
| Contact | 2 images | 4 images | 6 |

## CSS Grid Implementation

The layout uses CSS Grid for maximum flexibility:

```css
.page-with-sidebars {
  display: grid;
  grid-template-columns: auto 1fr auto;  /* Left | Content | Right */
  gap: 1.5rem;
  align-items: start;
}
```

## Responsive Breakpoints

### Large Screens (≥ 1200px)
- 3-column grid layout active
- Full sidebar widths respected (180px left, 420px right)
- Maximum content width: ~700px

### Medium Screens (768px - 1200px)
- Convert sidebars to single column
- Images displayed in 2-column grid
- Gap reduced to 1rem

### Small Screens (< 768px)
- All sidebars become single column
- Full-width images
- Gap reduced to 1rem
- Padding reduced for mobile optimization

## Image Properties

All sidebar images:
- **Display**: Block (no inline elements)
- **Width**: 100% (responsive)
- **Height**: Auto (maintains aspect ratio)
- **Border Radius**: 8px (rounded corners)
- **Box Shadow**: 0 2px 8px rgba(0, 0, 0, 0.1) (depth effect)
- **Background**: White (card-like appearance)

## TypeScript Interface

```typescript
interface SidebarImage {
  src: string;           // Path to image
  alt?: string;          // Alt text for accessibility
  width?: number;        // Optional: explicit width
  height?: number;       // Optional: explicit height
}

interface Props {
  title: string;                    // Page title
  description?: string;             // Page description
  leftSidebar?: SidebarImage[];     // Left sidebar images
  rightSidebar?: SidebarImage[];    // Right sidebar images
}
```

## Usage Example

```astro
---
import PageWithSidebars from '../layouts/PageWithSidebars.astro';

const leftSidebar = [
  { src: '/images/sidebar-left.png', alt: 'Left image' }
];

const rightSidebar = [
  { src: '/images/sidebar-right1.png', alt: 'Right image 1' },
  { src: '/images/sidebar-right2.png', alt: 'Right image 2' }
];
---

<PageWithSidebars 
  title="Page Title" 
  description="Page description"
  leftSidebar={leftSidebar}
  rightSidebar={rightSidebar}
>
  <h1>Your Content Here</h1>
  <p>Page content goes here...</p>
</PageWithSidebars>
```

## Performance Considerations

1. **Image Optimization**: All images are already optimized from original download
2. **Lazy Loading**: Can be added to images for performance improvement
3. **CSS Efficiency**: Single stylesheet for all layouts
4. **Grid Performance**: CSS Grid is hardware-accelerated in modern browsers
5. **Mobile Optimization**: Sidebar images stack efficiently on mobile

## Accessibility Features

- Alt text provided for all images
- Semantic HTML structure
- Proper heading hierarchy maintained
- Color contrast meets WCAG standards
- Responsive design supports all screen sizes
