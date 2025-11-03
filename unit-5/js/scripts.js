// scripts.js - Main JavaScript file for Glow Skincare website

// Import all modules
import { createHeader } from '../modules/header.mjs';
import { createNavigation } from '../modules/navigation.mjs';
import { createFooter } from '../modules/footer.mjs';

// Main application initialization
class GlowSkincareApp {
    constructor() {
        this.init();
    }

    // Initialize the application
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadComponents());
        } else {
            this.loadComponents();
        }
    }

    // Load all dynamic components
    loadComponents() {
        try {
            // Generate dynamic header
            createHeader();
            console.log('✅ Header loaded successfully');

            // Generate dynamic navigation with wayfinding
            createNavigation();
            console.log('✅ Navigation loaded successfully');

            // Generate dynamic footer
            createFooter();
            console.log('✅ Footer loaded successfully');

            // Add page-specific functionality
            this.addPageFunctionality();
            
            console.log('🎉 Glow Skincare app initialized successfully');
        } catch (error) {
            console.error('❌ Error loading components:', error);
        }
    }

    // Add any page-specific functionality
    addPageFunctionality() {
        // Add smooth scrolling for anchor links
        this.addSmoothScrolling();
        
        // Add image loading optimization
        this.optimizeImageLoading();
        
        // Add accessibility improvements
        this.addAccessibilityFeatures();
    }

    // Add smooth scrolling for internal links
    addSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Optimize hero image loading
    optimizeImageLoading() {
        const heroImages = document.querySelectorAll('img[src*="hero"]');
        
        heroImages.forEach(img => {
            // Add loading attribute for better performance
            img.setAttribute('loading', 'eager');
            
            // Add error handling
            img.addEventListener('error', function() {
                console.warn(`Failed to load image: ${this.src}`);
                this.style.display = 'none';
            });

            // Add load success handling
            img.addEventListener('load', function() {
                this.style.opacity = '0';
                this.style.transition = 'opacity 0.3s ease-in-out';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 50);
            });
        });
    }

    // Add accessibility improvements
    addAccessibilityFeatures() {
        // Add skip navigation link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-skin-accent text-white p-2 z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main landmark if not present
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }

        // Improve keyboard navigation
        document.addEventListener('keydown', (e) => {
            // ESC key functionality
            if (e.key === 'Escape') {
                // Close any open mobile menus, modals, etc.
                const openMenus = document.querySelectorAll('[aria-expanded="true"]');
                openMenus.forEach(menu => {
                    menu.setAttribute('aria-expanded', 'false');
                });
            }
        });
    }
}

// Initialize the application
new GlowSkincareApp();