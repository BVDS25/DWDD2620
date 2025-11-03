# Unit 6 - Tailwind CSS Customization

This project demonstrates custom Tailwind CSS configurations including font families, colors, and breakpoints.

## Features

### HTML Structure
- ✅ Proper head tag with favicon, viewport, and stylesheet links
- ✅ Header with SVG icons (account and shopping cart)
- ✅ Navigation with three internal page links
- ✅ Main content with h1 and three sections
- ✅ Footer with copyright and student info

### Tailwind Customizations
- ✅ Custom font family overrides (Inter, Merriweather, Fira Code, Poppins)
- ✅ Custom color palette (primary, secondary, accent, custom)
- ✅ Custom breakpoint configuration
- ✅ All styling done with Tailwind classes

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build CSS (watch mode for development):
   ```bash
   npm run dev
   ```

3. Build CSS (one-time build):
   ```bash
   npm run build
   ```

4. Open `index.html` in your browser

## File Structure

```
unit-6/
├── index.html              # Main HTML file
├── package.json           # Node.js dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── site.webmanifest      # Web app manifest
├── css/
│   ├── input.css         # Tailwind input file
│   └── styles.css        # Generated CSS (after build)
└── images/               # Image assets directory
```

## Customizations Made

### Font Families
- **Sans**: Inter (Google Fonts)
- **Serif**: Merriweather (Google Fonts)
- **Mono**: Fira Code (Google Fonts)
- **Custom**: Poppins (Google Fonts)

### Colors
- **Primary**: #3B82F6 (Blue)
- **Secondary**: #10B981 (Green)
- **Accent**: #F59E0B (Orange)
- **Custom**: #8B5CF6 (Purple)

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Assignment Requirements Checklist

- [x] HTML head tag with favicon, viewport, stylesheet, and title
- [x] Header with Tailwind styling and SVG icons
- [x] Navigation with three internal page links
- [x] Main with h1 and three sections with h2 tags
- [x] Font family overrides demonstration
- [x] Color overrides with hex values displayed
- [x] Breakpoint overrides demonstration
- [x] Footer with Tailwind styling, copyright, name, and class

## Author
Bianca Delgado - DWDD2620 Fall 2025