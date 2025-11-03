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
    
    // Debug: Log the classes being applied
    console.log('Navigation classes applied:', navigationConfig.listClass);
    
    // Create navigation items from data
    links.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = navigationConfig.listItemClass;
        
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
    
    console.log(`✅ Navigation generated successfully - Current page: ${currentPage}`);
}