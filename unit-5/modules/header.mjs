// header.mjs - Dynamic header with logo and icons

export function createHeader() {
    const headerElement = document.getElementById('header');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 py-3';
    
    // Create flex wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center justify-between';
    
    // Create logo section
    const logoSection = document.createElement('div');
    logoSection.className = 'flex items-center space-x-2';
    
    // Logo icon (skincare droplet)
    const logoIcon = document.createElement('div');
    logoIcon.innerHTML = `
        <svg class="w-8 h-8 text-skin-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8 6 8 10 8 14C8 18.4 9.6 20 12 20S16 18.4 16 14C16 10 16 6 12 2Z"/>
        </svg>
    `;
    
    // Logo text
    const logoText = document.createElement('h2');
    logoText.className = 'text-2xl font-bold text-skin-dark';
    logoText.textContent = 'Glow Skincare';
    
    logoSection.appendChild(logoIcon);
    logoSection.appendChild(logoText);
    
    // Create icons section
    const iconsSection = document.createElement('div');
    iconsSection.className = 'flex items-center space-x-4';
    
    // Profile icon
    const profileButton = document.createElement('button');
    profileButton.className = 'p-2 rounded-full hover:bg-skin-primary transition-colors duration-200';
    profileButton.setAttribute('aria-label', 'User Profile');
    
    const profileIcon = document.createElement('img');
    profileIcon.src = 'images/person.svg';
    profileIcon.alt = 'User Profile';
    profileIcon.className = 'w-6 h-6';
    profileButton.appendChild(profileIcon);
    
    // Shopping cart icon with badge
    const cartButton = document.createElement('button');
    cartButton.className = 'relative p-2 rounded-full hover:bg-skin-primary transition-colors duration-200';
    cartButton.setAttribute('aria-label', 'Shopping Cart');
    
    const cartIcon = document.createElement('img');
    cartIcon.src = 'images/cart.svg';
    cartIcon.alt = 'Shopping Cart';
    cartIcon.className = 'w-6 h-6';
    
    const cartBadge = document.createElement('span');
    cartBadge.className = 'absolute -top-1 -right-1 bg-skin-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center';
    cartBadge.textContent = '3';
    
    cartButton.appendChild(cartIcon);
    cartButton.appendChild(cartBadge);
    
    // Add click handlers
    profileButton.addEventListener('click', () => {
        window.location.href = 'profile.html';
    });
    
    cartButton.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
    
    // Add logo click handler
    logoSection.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    logoSection.className += ' cursor-pointer';
    
    // Assemble header
    iconsSection.appendChild(profileButton);
    iconsSection.appendChild(cartButton);
    
    wrapper.appendChild(logoSection);
    wrapper.appendChild(iconsSection);
    
    container.appendChild(wrapper);
    headerElement.appendChild(container);
    
    console.log('✅ Header generated successfully');
}