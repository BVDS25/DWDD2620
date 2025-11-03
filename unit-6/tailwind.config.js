/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./css/**/*.css"],
  theme: {
    extend: {
      // Font Family Overrides
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'custom': ['Poppins', 'sans-serif'],
        'handwrite': ['The Girl Next Door', 'cursive']
      },
      
      // Color Overrides
      colors: {
        'primary': '#3B82F6',
        'secondary': '#10B981',
        'accent': '#F59E0B',
        'custom': '#8B5CF6'
      },
      
      // Custom Breakpoint Overrides
      screens: {
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices  
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px'  // 2X Large devices
      }
    },
  },
  plugins: [],
}