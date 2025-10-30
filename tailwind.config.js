/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './unit-1/**/*.{html,js}',
    './unit-2/**/*.{html,js}',
    './unit-3/**/*.{html,js}',
    './unit-4/index.html',
    './unit-4/js/**/*.js',
    './unit-4/src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#526343',
        'brand-secondary': '#B2B9AB',
        'brand-secondary-200': '#DEE5D7',
        'brand-tertiary': '#B4DACC',
        'brand-hover': '#D5DDCE',
        // Unit-4 theme colors
        'theme-bg': '#f9fafb',
        'theme-text': '#1f2937',
        'theme-primary': '#25977D',
        'theme-accent': '#07392C',
      },
    },
  },
  
}
