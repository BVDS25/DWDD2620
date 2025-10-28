// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js}",
    "./css/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#f9fafb',
        'theme-text': '#1f2937',
        'theme-primary': '#2563eb',
        'theme-accent': '#4f46e5',
      },
    },
  },
  plugins: [],
}