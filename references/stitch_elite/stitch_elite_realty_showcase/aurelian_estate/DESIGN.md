---
name: Aurelian Estate
colors:
  surface: '#f7f9fe'
  surface-dim: '#d8dade'
  surface-bright: '#f7f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f8'
  surface-container: '#eceef2'
  surface-container-high: '#e6e8ed'
  surface-container-highest: '#e0e2e7'
  on-surface: '#191c1f'
  on-surface-variant: '#4e4639'
  inverse-surface: '#2d3134'
  inverse-on-surface: '#eff1f5'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#5d5e61'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e5'
  on-secondary-container: '#636467'
  tertiary: '#5e5e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#a6a5a1'
  on-tertiary-container: '#3b3b38'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e2e2e5'
  secondary-fixed-dim: '#c6c6c9'
  on-secondary-fixed: '#1a1c1e'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#f7f9fe'
  on-background: '#191c1f'
  surface-variant: '#e0e2e7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is rooted in the concept of "Quiet Luxury"—a philosophy that prioritizes substance, heritage, and meticulous craftsmanship over loud displays of wealth. It is tailored for the high-end Indian real estate market, blending modern architectural precision with the warmth of traditional hospitality.

The visual style is **Editorial Minimalism**. It mimics the layout of a premium architectural digest, utilizing expansive whitespace (the "luxury of space") and a strict adherence to a sophisticated grid. The emotional response should be one of serenity, exclusivity, and unwavering trust. 

Key stylistic pillars:
- **Exclusivity:** Large-scale imagery paired with minimal UI elements.
- **Precision:** Perfect alignment and consistent geometric proportions.
- **Warmth:** Use of metallic accents and soft cream backgrounds to avoid the clinical feel of standard SaaS products.

## Colors

The palette is designed to function across two distinct atmospheres while maintaining the same core accent.

### Light Mode (Morning Heritage)
- **Primary (Gold/Bronze):** `#C5A059` — Used for highlights, active states, and call-to-action elements.
- **Surface (Cream):** `#F9F7F2` — The primary background color to evoke the feel of premium textured paper.
- **Text (Charcoal):** `#1A1C1E` — High-contrast for readability, used for body and primary headlines.
- **Subtext (Slate):** `#6B6E72` — For secondary information and labels.

### Dark Mode (Obsidian Night)
- **Surface (Obsidian):** `#0D0E10` — A deep, rich black that provides a dramatic backdrop for property photography.
- **Container (Slate Gray):** `#1E2023` — For cards and elevated surfaces.
- **Primary (Gold/Bronze):** `#D4AF37` — Slightly more vibrant in dark mode to ensure luminescence against the obsidian.
- **Text (Off-White):** `#E8E9EB` — Softened white to prevent eye strain.

## Typography

The typography system relies on a high-contrast pairing between a classic serif and a functional sans-serif.

- **Headlines:** Use Playfair Display. This serif brings a sense of history and prestige. For large display sizes, use tight letter spacing to create a modern, editorial look.
- **Body:** Use Inter. It provides exceptional legibility for property descriptions and technical data.
- **Labels:** Labels and small captions should always be in Inter, capitalized with generous letter spacing (0.1em) to denote "metadata" clearly.

Across all levels, line heights are kept generous to maintain the feeling of "breathing room" mentioned in the brand pillars.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for desktop to control the hierarchy of high-end photography, and a fluid reflow for mobile.

- **Desktop (1440px+):** 12-column grid, 1280px max-width container, 32px gutters, and 64px outer margins.
- **Tablet (768px - 1439px):** 8-column grid, fluid width, 24px gutters.
- **Mobile (Up to 767px):** 4-column grid, 16px gutters, 20px margins.

**The Golden Gap:** Sections must be separated by a minimum of 120px on desktop. This intentional "void" is what separates this design system from standard commercial real estate sites, signaling that the user's time and attention are valued.

## Elevation & Depth

To maintain a sophisticated, flat-modern aesthetic, this design system avoids heavy drop shadows. Instead, it uses **Tonal Layers** and **Refined Outlines**.

- **Surface Tiers:** Depth is conveyed by shifting the background color slightly (e.g., a cream page with a slightly darker cream card).
- **Outlines:** Use 1px borders in a very low-contrast version of the primary text color (e.g., 10% opacity charcoal).
- **Interactive States:** When a card is hovered, use a very soft, "ambient" gold-tinted shadow (`0px 10px 30px rgba(197, 160, 89, 0.08)`) to lift it off the page without breaking the minimalist aesthetic.
- **Overlays:** For modals or mobile menus, use a 10px backdrop blur (Glassmorphism light) to maintain the context of the property photography behind the UI.

## Shapes

The shape language is **Strictly Geometric (Sharp)**. 

To mirror the straight lines of modern luxury architecture, the design system utilizes 0px border-radii for all primary containers, buttons, and input fields. Sharp corners communicate precision, authority, and a modern edge. 

Exceptions:
- **Image Containers:** Must always be sharp-edged.
- **Avatars:** Circular (pill-shaped) to provide a soft organic contrast for human faces.
- **Secondary decorative elements:** May use a subtle `0.25rem` (Soft) radius if they are purely functional and not part of the primary structural grid.

## Components

### Buttons
- **Primary:** Solid Charcoal (`#1A1C1E`) background with White text and 0px roundedness. On hover, background transitions to Gold (`#C5A059`).
- **Secondary/Ghost:** 1px Charcoal border, transparent background.

### Input Fields
- **Style:** Underline-only or 1px stroke with 0px roundedness.
- **Focus:** The border transitions from light gray to the primary Gold accent. Labels should use the `label-sm` typography spec.

### Cards (Property Listings)
- **Structure:** Full-bleed image at the top, followed by a generous 24px padding area for the property name (Playfair Display) and price.
- **Metatags:** Icons for "Beds/Baths/Sqft" should be minimal, 1px line icons in Gold.

### Lists & Tables
- **Property Specs:** Use a clean, horizontal list with subtle dividers. No zebra-striping; use whitespace to separate rows.

### Navigation
- **Header:** Sticky, with a transparent background that turns solid Cream/Obsidian upon scrolling. Links are in `label-sm` with a Gold underline on hover.