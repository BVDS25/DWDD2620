/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    colors: {
      // Core colors
      white: '#ffffff',
      
      // Gray scale (used throughout your project)
      gray: {
        50: '#f9fafb',
        200: '#e5e7eb',
        300: '#d1d5db',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        900: '#111827'
      },
      
      // Blue (used for navigation and links)
      blue: {
        50: '#eff6ff',
        600: '#2563eb'
      },
      
      // Yellow (used for star ratings)
      yellow: {
        400: '#facc15'
      },
      
      // Red (used for error messages)
      red: {
        50: '#fef2f2',
        200: '#fecaca',
        500: '#ef4444',
        600: '#dc2626'
      },
      
      // Custom star colors
      'star-gold': '#FFD700',
      'star-gray': '#D1D5DB'
    },
  },
  plugins: [],
}

