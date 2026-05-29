# Niqo Services — Brand Kit

Premium digital engineering & consulting cabinet · Brazzaville (Republic of Congo) · Paris.
Positioning: *Cabinet Premium* — the authority of McKinsey, Lazard, and top-tier private-banking
maisons. Not a tech startup, not a luxury African house. Authority, gravitas, restraint.

Emblem: the **okapi** (*Okapia johnstoni*) — a rare forest mammal endemic to the Congo basin,
rendered as a single-colour heraldic profile seal in the tradition of premium maisons.

---

## Contents

```
niqo-services-brand-kit/
├── README.md
├── logos/
│   ├── svg/      7 vector logos (primary, horizontal, seal, favicon — light & dark)
│   └── png/      12 raster exports @1x/2x/3x (primary, primary-dark, horizontal,
│                 horizontal-dark, seal) — transparent where applicable
├── favicons/     favicon.ico (16/32/48), favicon-16/32/48.png, apple-touch-icon-180,
│                 android-chrome-192/512, site.webmanifest
├── tokens/       tokens.json (W3C), tailwind.config.snippet.ts (TW4), globals.css
├── palette/      palette.png + PALETTE.md (HEX / RGB / HSL / usage)
├── typography/   TYPOGRAPHY.md (rules, scale, Google Fonts URLs)
├── social/       og-image-1200x630, linkedin-cover-1584x396, linkedin-logo-400x400,
│                 twitter-x-1500x500
├── print/        business-card recto/verso (HTML + PNG), letterhead-a4.html,
│                 email-signature.html
└── docs/         BRAND_GUIDELINES.html (10 sections, print-ready)
```

## Palette (strict)

`navy-950 #0F172A` · `navy-800 #1E3A8A` · `or-700 #A16207` · `or-400 #D4A053` ·
`ivoire #F8FAFC` · `ardoise-500 #64748B` · `ardoise-950 #020617` · `blanc #FFFFFF` ·
`destructive #DC2626`. Full reference in `palette/PALETTE.md`.

## Typography

Manrope (titles) · Inter (tracked caps) · Source Sans 3 (body) · JetBrains Mono (data).
All Google Fonts (SIL OFL, commercial-safe). Details + URLs in `typography/TYPOGRAPHY.md`.

## Logo usage

- **Primary** = stacked wordmark (NIQO / gold hairline / SERVICES). Use on its own where the
  brand is already established.
- **Horizontal** = seal + wordmark, for headers and signatures.
- **Seal** = the okapi alone, for favicons, avatars, stamps, and tight spaces (legible to 16px).
- Clear space = one ear-height around the mark. Minimum size 16px. Never recolour outside the
  palette; never add borders, ribbons, frames, or text inside the seal; never distort.

---

## Files included & substitutions

Everything in the structure above is included. The following **substitutions** were made — each
is intentional and noted here per the brief:

1. **Print PDFs → print-ready HTML.** `business-card-recto/verso`, `letterhead-a4`, and
   `BRAND_GUIDELINES` are delivered as **HTML** (exact mm `@page` sizing, 3 mm bleed on the
   cards) rather than binary `.pdf`. Open any of them in a browser and **Print → Save as PDF**
   to produce a pixel-faithful, print-ready PDF. (PNG previews of the business cards are included
   as specified.) Reason: PDF binaries can't be authored losslessly in this toolchain; the HTML
   masters are fully editable and reproduce the exact layout. Ask and these can be exported to PDF
   for you.

2. **`favicon-48.png` added.** A 48px tile was generated and embedded inside the multi-size
   `favicon.ico` (which contains 16/32/48). Harmless addition.

3. **Seal = the front-facing okapi illustration.** The kit's emblem is your commissioned
   front-facing okapi mark (ivory + gold neck stripes on navy), used **everywhere** — seal,
   favicons, lockups, social, print, and guidelines. Because it is a raster illustration, the
   seal/horizontal/favicon **SVG** files embed it as an `<image>` (rather than being pure paths),
   and `niqo-services-seal@Nx.png` is the navy-ground emblem tile (opaque) rather than a
   transparent silhouette. The wordmark SVGs (`primary`, `primary-dark`) remain pure text/vector.
   The source emblem lives at `logos/niqo-services-emblem.png`.

All filenames are lowercase-kebab-case with the `@1x/@2x/@3x` retina convention as specified.
Wordmark PNGs (primary light, horizontal light) use transparency; the okapi emblem keeps its
navy ground (integral to the illustration).

© MMXXVI Niqo Services — Brazzaville · Paris
