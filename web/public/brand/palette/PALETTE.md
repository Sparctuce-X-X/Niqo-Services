# Palette — Niqo Services

Strict palette. Use these values verbatim. No gradients, no neon, no off-brand colours.

| Token | HEX | RGB | HSL | Usage |
|---|---|---|---|---|
| **navy-950** | `#0F172A` | `15, 23, 42` | `222°, 47%, 11%` | Primary text, dark surfaces, seal background |
| **navy-800** | `#1E3A8A` | `30, 58, 138` | `226°, 64%, 33%` | Secondary, links, hover |
| **or-700** | `#A16207` | `161, 98, 7` | `38°, 92%, 33%` | Accent — hairlines, fine details |
| **or-400** | `#D4A053` | `212, 160, 83` | `36°, 59%, 58%` | Accent on dark backgrounds |
| **ivoire** | `#F8FAFC` | `248, 250, 252` | `210°, 40%, 98%` | Light surface, seal silhouette |
| **ardoise-500** | `#64748B` | `100, 116, 139` | `215°, 16%, 47%` | Secondary text, captions |
| **ardoise-950** | `#020617` | `2, 6, 23` | `229°, 84%, 5%` | Body text on light |
| **blanc** | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%` | Card surface, max contrast |
| **destructive** | `#DC2626` | `220, 38, 38` | `0°, 72%, 51%` | Errors only |

## Usage principles

- **Two grounds only:** ivoire (paper) and navy-950 (authority). Everything sits on one of these.
- **Gold is an accent, not a fill.** `or-700` for hairlines and fine details on light; `or-400`
  for the same on dark (navy) grounds. Treat it like gold leaf — a little, precisely placed.
- **navy-800** is reserved for interactive text (links, hover) — never as a large fill that would
  compete with the navy-950 ground.
- **ardoise** carries secondary text and captions. `ardoise-950` is the true body-text ink on light.
- **destructive** appears only in error states. Never decorative.

See `palette.png` for the swatch board.
