// navigation.mjs - Dynamic navigation with wayfinding

import { links, navigationConfig, getCurrentPage, isActiveLink } from '../data/links.js';

export function createNavigation() {
    const navElement = document.getElementById('navigation');
    
    // Get current page for wayfinding
    const currentPage = getCurrentPage();
    
    // Create container
    const container = document.createElement('div');
    container.className = navigationConfig.containerClass;
    
    // Create navigation list
    const navList = document.createElement('ul');
    navList.className = navigationConfig.listClass;
    
    // Create navigation items from data
    links.forEach(item => {
        const listItem = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        link.setAttribute('title', item.description);
        
        // Determine if this is the current page using helper function
        const isActive = isActiveLink(item.page);
        
        // Apply styles based on active state using config
        if (isActive) {
            link.className = navigationConfig.activeClass;
        } else {
            link.className = navigationConfig.inactiveClass;
        }
        
        // Add click handler for smooth transitions
        link.addEventListener('click', (e) => {
            // Add a subtle loading effect using config
            link.style.transform = `scale(${navigationConfig.animations.clickScale})`;
            setTimeout(() => {
                window.location.href = item.href;
            }, navigationConfig.animations.clickDelay);
        });
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    
    container.appendChild(navList);
    navElement.appendChild(container);
    
    // Add mobile menu toggle for small screens (if needed)
    addMobileMenuToggle(navElement, navList);
    
    console.log(`✅ Navigation generated successfully - Current page: ${currentPage}`);
}

function addMobileMenuToggle(navElement, navList) {
    // Create mobile menu button using config
    const mobileToggle = document.createElement('button');
    mobileToggle.className = navigationConfig.mobileToggleClass;
    mobileToggle.textContent = 'Menu';
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    let isMenuOpen = false;
    
    mobileToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            navList.classList.remove('hidden');
            mobileToggle.textContent = 'Close Menu';
        } else {
            navList.classList.add('hidden');
            mobileToggle.textContent = 'Menu';
        }
    });
    
    // Insert toggle before nav list
    navElement.querySelector('.container').insertBefore(mobileToggle, navList);
    
    // Show/hide based on screen size
    const handleResize = () => {
        if (window.innerWidth >= 768) { // md breakpoint
            navList.classList.remove('hidden');
            mobileToggle.style.display = 'none';
        } else {
            mobileToggle.style.display = 'block';
            if (!isMenuOpen) {
                navList.classList.add('hidden');
            }
        }
    };
    
    // Initial check
    handleResize();
    
    // Listen for resize
    window.addEventListener('resize', handleResize);
}