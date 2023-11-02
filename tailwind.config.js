/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundClip: {
        'text': 'text',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'right-bg-gradient': 'url(/bg-gradient-rt.svg)',
        'left-bg-gradient': 'url(/bg-gradient-lt.svg)',
      },
      backgroundPosition: {
        'right': 'right 75%',
      },
      boxShadow: {
        'listen-btn': '0 1px 38px 0 rgba(190, 12, 12, 0.82)',
        'down-arrow': '0 0 34px 2px rgba(255, 33, 80, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      backgroundClip: ['responsive'],
    },
  },
  plugins: [],
}
