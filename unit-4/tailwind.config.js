// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
    "./css/**/*.css",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#f9fafb',
        'theme-text': '#1f2937',
        'theme-primary': '#25977D',
        'theme-accent': '#07392C',
      },
    },
  },
  plugins: [],
}