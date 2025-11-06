/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',      // Dark for movie theme
        'secondary': '#f4d03f',    // Gold for accents
        'accent': '#e74c3c',       // Red for highlights
        'dark': '#2c2c2c',
        'light': '#f8f9fa'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}