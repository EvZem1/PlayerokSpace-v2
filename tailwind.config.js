/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // For Volturi Theme
      },
      colors: {
        'volturi-dark': '#0f0518',
        'volturi-purple': '#2a1b3d',
        'volturi-gold': '#d4af37',
      }
    },
  },
  plugins: [],
}