import { defineConfig } from 'vite'

export default defineConfig({
  // Configure the dev server
  server: {
    port: 5173,
    open: true
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        'unit-1': './unit-1/index.html',
        'unit-2': './unit-2/index.html', 
        'unit-3': './unit-3/index.html',
        'unit-4': './unit-4/index.html'
      }
    }
  },
  
  // Configure CSS processing
  css: {
    postcss: './postcss.config.js'
  }
})