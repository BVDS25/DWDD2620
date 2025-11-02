# Glow Skincare - Unit 5

A responsive 4-page skincare website built with modular JavaScript components and Tailwind CSS.

## 📁 Project Structure

```
unit-5/
├── index.html          # Home page
├── products.html       # Products page  
├── cart.html          # Shopping cart page
├── profile.html       # User profile page
├── favicon.ico        # Site favicon (add this)
├── modules/           # JavaScript modules
│   ├── header.mjs     # Dynamic header component
│   ├── navigation.mjs # Navigation with wayfinding
│   └── footer.mjs     # Dynamic footer component
├── images/           # Hero images
│   ├── home-hero.jpg     # (add this)
│   ├── products-hero.jpg # (add this)
│   ├── cart-hero.jpg     # (add this)
│   ├── profile-hero.jpg  # (add this)
│   └── README.md      # Image requirements
└── README.md         # This file
```

## ✅ Features Completed

- [x] **HTML Head Tags**: Viewport, favicon, stylesheet, proper titles
- [x] **Dynamic Header**: Logo with SVG icons (profile & cart)
- [x] **Responsive Navigation**: Vertical mobile, horizontal desktop with wayfinding
- [x] **Dynamic Footer**: Copyright symbol, student name, class name
- [x] **4 Complete Pages**: All pages with scaling hero images
- [x] **Modular Architecture**: ES6 modules with createElement
- [x] **Tailwind CSS**: Custom color palette and responsive design

## 🎨 Design Theme

**Skincare Color Palette:**
- Primary: `#f7e7ce` (warm cream)
- Secondary: `#e8d5b7` (soft beige)  
- Accent: `#b5a082` (muted gold)
- Dark: `#8b7355` (warm brown)

## 🧩 JavaScript Modules

### header.mjs
- Dynamic logo with skincare droplet icon
- Clickable profile and cart SVG icons
- Hover effects and navigation

### navigation.mjs  
- 4 responsive nav links
- Automatic current page detection
- Mobile-friendly toggle
- Smooth transitions

### footer.mjs
- Copyright with current year
- Student information
- Additional links
- Brand tagline

## 🚀 To Run Locally

1. **Add Images**: Download 4 hero images (see `images/README.md`)
2. **Add Favicon**: Add `favicon.ico` to root
3. **Open**: Open `index.html` in browser or run local server

## 📱 Responsive Features

- **Mobile**: Vertical navigation, stacked layout
- **Desktop**: Horizontal navigation, optimized spacing
- **Hero Images**: Scale beautifully on all devices
- **Touch-Friendly**: Large click targets and smooth animations

## 🔗 Navigation

Each page includes automatic wayfinding that highlights the current page and provides smooth transitions between sections.

All components are generated dynamically using JavaScript modules for easy maintenance and updates.