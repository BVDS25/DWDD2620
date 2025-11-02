// navigation.mjs - Dynamic navigation with wayfinding

export function createNavigation() {
    const navElement = document.getElementById('navigation');
    
    // Navigation items
    const navItems = [
        { name: 'Home', href: 'index.html', page: 'index.html' },
        { name: 'Products', href: 'products.html', page: 'products.html' },
        { name: 'Cart', href: 'cart.html', page: 'cart.html' },
        { name: 'Profile', href: 'profile.html', page: 'profile.html' }
    ];
    
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Create container
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 py-2';
    
    // Create navigation list
    const navList = document.createElement('ul');
    navList.className = 'flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 justify-center items-center';
    
    // Create navigation items
    navItems.forEach(item => {
        const listItem = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.name;
        
        // Determine if this is the current page
        const isActive = currentPage === item.page || 
                        (currentPage === '' && item.page === 'index.html');
        
        // Apply styles based on active state
        if (isActive) {
            link.className = 'block px-4 py-2 rounded-lg bg-skin-accent text-white font-semibold transition-all duration-200 transform';
        } else {
            link.className = 'block px-4 py-2 rounded-lg text-skin-dark hover:bg-skin-accent hover:text-white font-medium transition-all duration-200 transform hover:scale-105';
        }
        
        // Add click handler for smooth transitions
        link.addEventListener('click', (e) => {
            // Add a subtle loading effect
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = item.href;
            }, 100);
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
    // Create mobile menu button (hidden by default, shown on very small screens if needed)
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'md:hidden bg-skin-accent text-white p-2 rounded-lg mb-2 w-full';
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