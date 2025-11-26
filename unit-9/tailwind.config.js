/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
    "./modules/**/*.mjs"
  ],
  theme: {
    extend: {
      colors: {
        // Custom ClearSkin color scheme
        'primary': '#E8B4A8',      // Soft rose/pink
        'secondary': '#8B7B6B',    // Warm taupe
        'accent': '#C4A88A',       // Beige/sand
        'dark': '#3D3229',         // Dark brown
        'light': '#FAF7F5',        // Off-white/cream
        
        // Custom grey palette
        'grey': {
          50: '#F9F9F9',
          100: '#F0F0F0',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#999999',
          600: '#737373',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      screens: {
        'xs': '320px',
        'small': '768px',  // Custom breakpoint for navigation
      },
    },
  },
  plugins: [],
}
