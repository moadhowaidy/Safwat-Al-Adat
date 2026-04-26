import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bone:        '#FAF7F0',
          white:       '#FFFFFF',
          cream:       '#F2EDDF',
          gold:        '#C9A227',
          goldHover:   '#A88420',
          goldSoft:    '#E8D08A',
          olive:       '#5C7340',
          oliveDark:   '#3F5028',
          oliveHover:  '#4A5E33',
          charcoal:    '#1F1A12',
          taupe:       '#8A8175',
          border:      '#E8E0CF',
          shadowSoft:  'rgba(31, 26, 18, 0.06)',
        }
      },
      fontFamily: {
        'sans-en': ['Inter', 'sans-serif'],
        'serif-en': ['"Playfair Display"', 'serif'],
        'sans-ar': ['Cairo', 'sans-serif'],
        'serif-ar': ['Amiri', 'serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
