/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    colors: {
      // Core colors
      white: '#ffffff',
      
      // Semantic color palette
      primary: '#FACC15',      // Yellow - Stars, main brand color
      secondary: '#2563EB',    // Blue - Navigation, links, CTAs
      accent: '#10B981',       // Green - Success states, highlights
      
      // Neutral grays (keep current usage)
      gray: {
        50: '#f9fafb',
        200: '#e5e7eb',
        300: '#d1d5db',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        900: '#111827'
      },
      
      // Status colors
      success: '#10B981',      // Green - Success messages
      warning: '#F59E0B',      // Orange - Warning states  
      error: '#EF4444',        // Red - Error messages
      info: '#3B82F6',         // Light blue - Info messages
      
      // Legacy star colors (for backward compatibility)
      'star-gold': '#FACC15',  // Same as primary
      'star-gray': '#D1D5DB'
    },
  },
  plugins: [],
}

