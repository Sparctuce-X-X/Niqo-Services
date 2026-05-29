/**
 * Niqo Services — Tailwind 4 theme extension
 * Drop into tailwind.config.ts (Next.js 15 + Tailwind 4 compatible).
 *
 *   import { niqoTheme } from './niqo-services-brand-kit/tokens/tailwind.config.snippet';
 *   export default {
 *     theme: { extend: { ...niqoTheme } },
 *   } satisfies Config;
 */

export const niqoTheme = {
  colors: {
    navy: {
      800: '#1E3A8A',
      950: '#0F172A',
    },
    or: {
      400: '#D4A053',
      700: '#A16207',
    },
    ivoire: '#F8FAFC',
    ardoise: {
      500: '#64748B',
      950: '#020617',
    },
    blanc: '#FFFFFF',
    destructive: '#DC2626',
  },
  fontFamily: {
    title: ['Manrope', 'system-ui', 'sans-serif'],
    tracked: ['Inter', 'system-ui', 'sans-serif'],
    body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'monospace'],
  },
  letterSpacing: {
    title: '-0.02em',
    tracked: '0.28em',
    'tracked-wide': '0.55em',
  },
} as const;

export default niqoTheme;
