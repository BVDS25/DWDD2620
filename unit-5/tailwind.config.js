/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./products.html", 
    "./cart.html",
    "./profile.html",
    "./modules/**/*.mjs"
  ],
  theme: {
    extend: {
      colors: {
        'skin-primary': '#f7e7ce',
        'skin-secondary': '#e8d5b7',
        'skin-accent': '#b5a082',
        'skin-dark': '#8b7355'
      }
    },
  },
  plugins: [],
}