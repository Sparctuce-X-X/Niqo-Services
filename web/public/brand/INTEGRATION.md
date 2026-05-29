# Intégration du brand kit dans le projet Next.js

Comment câbler `/brand/` dans la landing Niqo Services (Next.js 15 + Tailwind 4 + App Router).

## Structure projet recommandée

```
/Users/dominiquehuang/Niqo Services/
├── brand/                  ← source de vérité (ce dossier, ne pas modifier directement)
├── web/                    ← projet Next.js (à créer : `npx create-next-app@latest web`)
│   ├── app/
│   ├── public/brand/       ← symlink ou copie depuis ../brand/ (assets statiques)
│   ├── lib/brand-tokens.ts ← copie depuis ../brand/tokens/tailwind.config.snippet.ts
│   └── tailwind.config.ts
├── case-studies/
├── assets/
└── CLAUDE.md
```

Le brand kit reste **source de vérité** dans `/brand/`. Le projet Next.js consomme ses assets via copie ou symlink — jamais en modifiant l'original.

## 1. Polices — `app/layout.tsx`

```ts
import { Manrope, Inter, Source_Sans_3, JetBrains_Mono } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-title',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-tracked',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${inter.variable} ${sourceSans.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-ivoire text-ardoise-950">{children}</body>
    </html>
  );
}
```

## 2. Tokens couleur — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';
import { niqoTheme } from './lib/brand-tokens';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: niqoTheme.colors,
      fontFamily: {
        title: ['var(--font-title)', 'system-ui', 'sans-serif'],
        tracked: ['var(--font-tracked)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: niqoTheme.letterSpacing,
    },
  },
} satisfies Config;
```

## 3. Métadonnées SEO + OG — `app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: 'Niqo Services — Cabinet de services numériques',
  description:
    "Cabinet de conseil et d'ingénierie numérique haut de gamme. Brazzaville · Paris.",
  metadataBase: new URL('https://niqo.services'),
  openGraph: {
    title: 'Niqo Services',
    description: 'Cabinet de services numériques · Brazzaville · Paris',
    images: ['/brand/social/og-image-1200x630.png'],
    locale: 'fr_FR',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/brand/favicons/favicon-32.png', sizes: '32x32' },
      { url: '/brand/favicons/favicon-16.png', sizes: '16x16' },
    ],
    apple: '/brand/favicons/apple-touch-icon-180.png',
  },
  manifest: '/brand/favicons/site.webmanifest',
};
```

## 4. Utiliser le wordmark / emblème dans un composant

```tsx
import Image from 'next/image';

export function NiqoWordmark({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const src =
    variant === 'dark'
      ? '/brand/logos/png/niqo-services-primary-dark@2x.png'
      : '/brand/logos/png/niqo-services-primary@2x.png';
  return <Image src={src} alt="Niqo Services" width={400} height={160} priority />;
}

export function NiqoEmblem() {
  return (
    <Image
      src="/brand/logos/png/niqo-services-emblem.png"
      alt="Niqo Services"
      width={240}
      height={240}
    />
  );
}
```

> Tant que la v2 du brand kit (avec emblème vectorisé) n'est pas livrée, utiliser `niqo-services-emblem.png` partout où il faut le sceau. Une fois la v2 livrée, remplacer par les SVG `niqo-services-seal.svg` / `niqo-services-favicon.svg`.

## 5. Copie initiale des assets

Au moment d'initialiser `web/`, exécuter depuis la racine du projet :

```bash
cp -R brand web/public/brand
cp brand/tokens/tailwind.config.snippet.ts web/lib/brand-tokens.ts
```

Ou en symlink (préférable, évite la duplication — mais Vercel demande parfois une copie réelle) :

```bash
ln -s ../../brand web/public/brand
```

## 6. À régénérer dans la v2 du brand kit

Une fois le SVG de l'emblème reçu de Claude Design, les fichiers suivants seront remplacés :

- `logos/svg/niqo-services-seal{,-dark}.svg`
- `logos/svg/niqo-services-favicon.svg`
- `logos/svg/niqo-services-horizontal{,-dark}.svg`
- `logos/png/niqo-services-{seal,horizontal,horizontal-dark}@{1,2,3}x.png`
- `favicons/*` (tous)
- `social/og-image-1200x630.png`
- `social/linkedin-cover-1584x396.png`
- `social/linkedin-logo-400x400.png`
- `social/twitter-x-1500x500.png`

Wordmark, tokens, palette, typographie, business cards, letterhead, signature email et guidelines restent inchangés.
