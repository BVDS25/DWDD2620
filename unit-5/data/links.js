// links.js - Navigation data for Glow Skincare website

export const links = [
    {
        name: 'Home',
        href: 'index.html',
        page: 'index.html',
        description: 'Welcome to Glow Skincare',
        icon: '🏠'
    },
    {
        name: 'Products',
        href: 'products.html',
        page: 'products.html',
        description: 'Our skincare product collection',
        icon: '🧴'
    },
    {
        name: 'Cart',
        href: 'cart.html',
        page: 'cart.html',
        description: 'Your shopping cart',
        icon: '🛒'
    },
    {
        name: 'Profile',
        href: 'profile.html',
        page: 'profile.html',
        description: 'Manage your account',
        icon: '👤'
    }
];

// Additional navigation configuration
export const navigationConfig = {
    // CSS classes for navigation styling
    containerClass: 'container mx-auto px-4 py-2',
    listClass: ' flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 justify-center items-center',
    
    // List item styling
    listItemClass: 'p-2 rounded-lg',
    
    // Active state styling
    activeClass: 'block px-4 py-2 rounded-lg bg-skin-accent text-white font-semibold transition-all duration-200 transform',
    
    // Inactive state styling
    inactiveClass: 'block px-4 py-2 rounded-lg text-skin-dark hover:bg-skin-accent hover:text-white font-medium transition-all duration-200 transform hover:scale-105',
    
    // Mobile menu configuration
    mobileToggleClass: 'md:hidden bg-skin-accent text-white p-2 rounded-lg mb-2 w-full',
    
    // Animation settings
    animations: {
        clickScale: 0.95,
        clickDelay: 100
    }
};

// Helper function to get current page
export function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

// Helper function to check if a link is active
export function isActiveLink(linkPage) {
    const currentPage = getCurrentPage();
    return currentPage === linkPage || (currentPage === '' && linkPage === 'index.html');
}