# Typography — Niqo Services

Four families, each with a single job. The contrast between the geometric **Manrope** titles
and the wide-tracked **Inter** caps is the typographic signature.

## Families & roles

| Role | Family | Weights | Notes |
|---|---|---|---|
| **Titles** | Manrope | 500 / 600 / 700 | Letter-spacing −0.015em to −0.02em on sizes > 36px |
| **Tracked caps** (eyebrow, labels) | Inter | 500 / 600 | Letter-spacing +0.28em to +0.55em, uppercase |
| **Body** | Source Sans 3 | 400 / 500 / 600 | Comfortable measure (~68ch) |
| **Mono** (data, code, references) | JetBrains Mono | 400 / 500 | Reference codes, tabular data |

All four are on Google Fonts (commercial-safe, SIL Open Font License).

## Google Fonts

Single combined request (recommended):

```
https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Inter:wght@500;600&family=Source+Sans+3:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap
```

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700&family=Inter:wght@500;600&family=Source+Sans+3:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

Individual families:
- Manrope — https://fonts.google.com/specimen/Manrope
- Inter — https://fonts.google.com/specimen/Inter
- Source Sans 3 — https://fonts.google.com/specimen/Source+Sans+3
- JetBrains Mono — https://fonts.google.com/specimen/JetBrains+Mono

## Suggested scale (desktop)

| Style | Family | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Display | Manrope | 76 / 1.02 | 600 | −0.02em |
| H1 | Manrope | 52 / 1.06 | 600 | −0.018em |
| H2 | Manrope | 38 / 1.12 | 600 | −0.015em |
| H3 | Manrope | 27 / 1.2 | 500 | −0.01em |
| Body L | Source Sans 3 | 19 / 1.6 | 400 | 0 |
| Body | Source Sans 3 | 17 / 1.62 | 400 | 0 |
| Small | Source Sans 3 | 15 / 1.5 | 400 | 0 |
| Eyebrow | Inter | 12.5 / 1 | 500 | +0.28em (uppercase) |
| Data / code | JetBrains Mono | 14–15 | 400/500 | 0 |

## Rules

- **One all-caps element:** the wordmark. Eyebrows/labels are uppercase tracked Inter; everything
  else is sentence case.
- Never set body copy in Manrope or Inter — body is always Source Sans 3.
- Mono is for data, reference codes (`NQ·2026·011`), and code — not for running prose.
- No Title Case Every Word. Sentence case for headings and body.
