// footer.mjs - Dynamic footer with copyright and student info

export function createFooter() {
    const footerElement = document.getElementById('footer');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 pt-8 pb-12';
    
    // Create footer content wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'text-center space-y-4';
    
    // Create copyright section with student info
    const footerContent = document.createElement('div');
    footerContent.className = 'space-y-2';
    
    // Main copyright text
    const copyrightText = document.createElement('p');
    copyrightText.className = 'text-white font-medium text-md';
    const currentYear = new Date().getFullYear();
    copyrightText.innerHTML = `&copy; ${currentYear} Bianca Delgado`;
    
    // Class name
    const classInfo = document.createElement('p');
    classInfo.className = 'text-gray-300 text-xs mt-3';
    classInfo.textContent = 'DWDD2620 - Fall 2025';
    
    // Assemble footer
    footerContent.appendChild(copyrightText);
    footerContent.appendChild(classInfo);
    
    wrapper.appendChild(footerContent);
    
    container.appendChild(wrapper);
    footerElement.appendChild(container);
    
    console.log('✅ Footer generated successfully');
}