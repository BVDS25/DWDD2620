/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'star-gold': '#FFD700',
        'star-gray': '#D1D5DB'
      }
    },
  },
  plugins: [],
}

