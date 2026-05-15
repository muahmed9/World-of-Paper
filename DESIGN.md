# Pallet Ross Institutional Design System

## Brand & Style

The design system is anchored in a sophisticated, high-end aesthetic that blends **Minimalism** with **Modern Corporate** precision. It is designed to evoke a sense of architectural clarity, permanence, and luxury through the strategic use of negative space and a restrained color palette. 

The target audience is high-discerning clientele who value editorial-quality presentation and effortless navigation. The UI relies on "quiet luxury"—where the quality of the typography and the rhythm of the layout communicate authority more than decorative elements. Visual interest is generated through large-scale imagery and smooth, purposeful transitions rather than heavy UI ornamentation.

## Colors

The palette is dominated by a high-contrast relationship between **Deep Onyx** and **Pure White**, creating a crisp, editorial feel. 

- **Primary:** The Deep Onyx (#0D0C22) serves as the foundation for all text and structural elements, providing a grounded, authoritative presence.
- **Secondary/Accent:** Vibrant Rose (#EA4C89) is used sparingly as a "surgical" accent for high-value calls to action or interactive states, ensuring it retains its impact without breaking the sophisticated atmosphere.
- **Neutrals:** Soft Alabaster (#F3F3F4) provides subtle tonal layering for background sections, preventing the interface from feeling overly stark while maintaining a light, airy quality.

## Typography

The typography utilizes **Hanken Grotesk** to replicate the modern, sharp, and highly legible qualities of the reference style. The system relies on extreme weight contrast—using very heavy weights for displays and light-to-medium weights for body text.

Large-scale headlines should utilize negative letter-spacing to create a "compacted" luxury feel. Labels and small metadata should be set in uppercase with increased letter-spacing to provide a technical, curated contrast to the bold display types.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy for desktop, transitioning to a fluid model for mobile devices. The layout is defined by generous margins and "breathing room" around key assets.

- **Desktop (1440px+):** A 12-column grid with a significant 64px outer margin. Gutters are kept wide (32px) to maintain the airy, spacious aesthetic.
- **Tablet (768px - 1024px):** An 8-column grid with 32px margins. 
- **Mobile (<768px):** A 4-column fluid grid. Vertical spacing is significantly increased between sections (e.g., 120px+) to force a deliberate, slow-scrolling experience that mimics a premium physical magazine.

## Elevation & Depth

Hierarchy is achieved primarily through **Tonal Layers** and **Low-contrast Outlines** rather than shadows. 

- **Surfaces:** Use `#FFFFFF` for the primary canvas and `#F3F3F4` for secondary containers or "wells." 
- **Borders:** Instead of drop shadows, use 1px solid borders in a very light grey (adjusting Onyx to 10% opacity) to define cards and sections. This maintains a flat, architectural rigour.
- **Depth:** When depth is required (e.g., modals), use a subtle backdrop blur (12px) with a semi-transparent Deep Onyx overlay to keep the focus sharp and professional.

## Shapes

The shape language is disciplined and "Soft" (0.25rem - 0.75rem). While many modern systems go fully rounded or sharp, this design system uses subtle corner radii to soften the industrial nature of the grid without becoming "bubbly" or playful.

- **Standard Buttons & Inputs:** 0.25rem (4px) radius.
- **Cards & Large Containers:** 0.75rem (12px) radius.
- **Interactive Media/Images:** Should maintain a 0.5rem (8px) radius to distinguish them from the raw background.

## Design Tokens (Tailwind)

```javascript
{
    "colors": {
        "tertiary-fixed": "#fcdebd",
        "primary-fixed": "#e3dffe",
        "surface-container": "#eeeeef",
        "inverse-on-surface": "#f0f1f2",
        "on-tertiary": "#ffffff",
        "tertiary": "#000000",
        "surface-tint": "#5d5c76",
        "on-primary-container": "#83819d",
        "vibrant-rose": "#EA4C89",
        "secondary-fixed-dim": "#ffb1c6",
        "on-secondary-container": "#61002f",
        "surface-container-low": "#f3f3f4",
        "error": "#ba1a1a",
        "surface": "#f9f9fa",
        "pure-white": "#FFFFFF",
        "on-secondary-fixed-variant": "#8e0048",
        "soft-alabaster": "#F3F3F4",
        "primary": "#000000",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#ffd9e1",
        "primary-container": "#1a1930",
        "on-error": "#ffffff",
        "secondary-container": "#fc5a97",
        "inverse-primary": "#c7c3e2",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#3f001c",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e2e2e3",
        "inverse-surface": "#2f3132",
        "tertiary-container": "#271905",
        "surface-dim": "#dadadb",
        "on-surface": "#1a1c1d",
        "deep-onyx": "#0D0C22",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#c7c3e2",
        "surface-variant": "#e2e2e3",
        "outline-variant": "#c8c5cd",
        "tertiary-fixed-dim": "#dec2a3",
        "on-tertiary-fixed": "#271905",
        "on-tertiary-container": "#988064",
        "on-surface-variant": "#47464d",
        "surface-container-high": "#e8e8e9",
        "secondary": "#b31d5f",
        "on-primary-fixed-variant": "#46445d",
        "outline": "#78767d",
        "background": "#f9f9fa",
        "on-error-container": "#93000a",
        "surface-bright": "#f9f9fa",
        "on-tertiary-fixed-variant": "#57432b",
        "on-primary-fixed": "#1a1930",
        "on-background": "#1a1c1d"
    },
    "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
    },
    "spacing": {
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "margin-tablet": "32px",
        "unit": "8px",
        "gutter": "32px",
        "container-max": "1440px"
    },
    "fontFamily": {
        "display-xl": ["Tajawal", "sans-serif"],
        "body-md": ["Tajawal", "sans-serif"],
        "headline-md": ["Tajawal", "sans-serif"],
        "headline-lg-mobile": ["Tajawal", "sans-serif"],
        "label-sm": ["Tajawal", "sans-serif"],
        "display-xl-mobile": ["Tajawal", "sans-serif"],
        "headline-lg": ["Tajawal", "sans-serif"],
        "body-lg": ["Tajawal", "sans-serif"]
    },
    "fontSize": {
        "display-xl": ["72px", { "lineHeight": "80px", "letterSpacing": "-0.04em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "display-xl-mobile": ["44px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }]
    }
}
```
