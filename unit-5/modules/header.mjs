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
    profileButton.innerHTML = `
        <svg class="w-6 h-6 text-skin-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
    `;
    
    // Shopping cart icon with badge
    const cartButton = document.createElement('button');
    cartButton.className = 'relative p-2 rounded-full hover:bg-skin-primary transition-colors duration-200';
    cartButton.setAttribute('aria-label', 'Shopping Cart');
    cartButton.innerHTML = `
        <svg class="w-6 h-6 text-skin-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/>
        </svg>
        <span class="absolute -top-1 -right-1 bg-skin-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
        </span>
    `;
    
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