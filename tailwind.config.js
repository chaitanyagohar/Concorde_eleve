// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // UPDATE: Change 'libre-bodoni' to 'playfair' and update the variable
        'playfair': ['var(--font-playfair)'],
        'montserrat': ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};