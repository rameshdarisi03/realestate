---
name: Aureate Heritage
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c19'
  on-tertiary-container: '#848480'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to evoke an atmosphere of "Quiet Luxury"—an aesthetic that prioritizes restraint, architectural precision, and material honesty over loud ornamentation. It targets high-net-worth individuals in the Indian real estate market, offering a sense of exclusivity, permanence, and world-class sophistication.

The visual style is a blend of **Minimalism** and **High-Contrast Luxury**. It utilizes expansive white space to frame high-resolution photography of premium villas and apartments, treating the UI as a gallery rather than a utility. Every interaction should feel deliberate and smooth, mirroring the seamless service of a luxury concierge.

## Colors

The palette is rooted in a timeless, high-contrast foundation that reflects the materials of luxury architecture: stone, precious metals, and deep shadows.

- **Primary (Deep Charcoal):** `#1A1A1A`. Used for critical typography, deep backgrounds, and primary navigation elements. It provides the "weight" and authority of the brand.
- **Secondary (Champagne Gold):** `#C5A059`. Reserved for high-value accents, active states, call-to-action buttons, and signature iconography. This represents the premium nature of the properties.
- **Tertiary (Ivory White):** `#F9F7F2`. A soft, warm off-white used for page backgrounds to reduce the harshness of pure white and provide a paper-like, editorial feel.
- **Neutral (Slate Gray):** `#707070`. Used for secondary body text and subtle borders to maintain legibility without competing with the primary charcoal.

## Typography

This design system employs a classic high-contrast pairing. The serif **Playfair Display** provides an editorial, authoritative voice for property titles and section headers. The sans-serif **Inter** ensures absolute clarity and modern functionality for descriptions, data points, and interface labels.

To maintain the luxury feel:
- Use `display-lg` for hero sections with tight letter-spacing.
- Use `label-caps` for small metadata (e.g., square footage, location tags) to create a structured, professional look.
- Body text should always prioritize generous line-height (`1.6`) to ensure a relaxed reading experience.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to ensure the content remains centered and curated like a high-end magazine. 

- **Desktop:** 12-column grid with wide 32px gutters. Large 120px vertical gaps between sections allow each property to "breathe" and command full attention.
- **Mobile:** 4-column grid with 20px margins. Content should reflow vertically, prioritizing full-bleed imagery to maximize impact on smaller screens.
- **Rhythm:** Spacing should be used aggressively. Avoid crowding elements; if in doubt, increase the padding.

## Elevation & Depth

To maintain a sophisticated aesthetic, this design system avoids heavy, artificial shadows. Instead, it uses **Tonal Layering** and **Micro-Shadows**:

- **Surfaces:** Most depth is created by placing Ivory White containers against very subtle light-gray backgrounds or using Deep Charcoal overlays on photography.
- **Shadows:** When necessary (e.g., on a hovering property card), use extremely diffused, low-opacity shadows: `0px 20px 40px rgba(0,0,0,0.04)`.
- **Outlines:** Use thin, 1px borders in `#E5E5E5` for form inputs and structural separators to keep the UI crisp and flat.

## Shapes

The design system adopts a **Sharp (0)** roundedness strategy. In the world of high-end real estate and architecture, straight lines and right angles signify precision, structural integrity, and modernism. 

All buttons, cards, and input fields must have 0px corner radii. The only exception is for profile avatars or specific organic iconography, which should remain perfectly circular.

## Components

### Buttons
- **Primary:** Deep Charcoal background with Ivory White text. Sharp corners. Hover state: Champagne Gold background.
- **Secondary:** Transparent background with a 1px Deep Charcoal border. 
- **Ghost:** Champagne Gold text with no background, used for "View Details" links.

### Property Cards
- Use a "Floating Image" style. The image occupies the top 70% of the card, with a minimal metadata area below. No borders; use generous white space to separate cards.

### Input Fields
- Underline style preferred over boxed style for a more "architectural" look. 1px Deep Charcoal bottom border that thickens to 2px on focus.

### Additional Components
- **Image Gallery:** Must support a "Full-Screen Cinematic" mode.
- **Property Specs Bar:** A horizontal strip using `label-caps` typography to display "Beds," "Baths," and "Sq. Ft." separated by thin vertical dividers.
- **Floor Plan Viewer:** A high-contrast, zoomable interface using Charcoal lines on an Ivory background.