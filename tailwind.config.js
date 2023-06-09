/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          500: "#3772FF",
          200: "#808191",
          300: "#A3E3FF"
        },
        border: {
          500: "#000AFF"
        },
        primaryDark:{
          500: "#000000",
          300: "#242731",
          200: "#191B20",
          100: "#353945"
        },
        secondary:{
          200: "#242731"
        }
      }
    },
  },
  plugins: [],
}
