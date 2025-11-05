/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color palette matching @theme
        'primary': '#FACC15',      // Yellow - Stars, main brand color
        'secondary': '#2563EB',    // Blue - Navigation, links, CTAs
        'accent': '#10B981',       // Green - Success states, highlights
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

