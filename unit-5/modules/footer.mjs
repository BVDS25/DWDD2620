// footer.mjs - Dynamic footer with copyright and student info

export function createFooter() {
    const footerElement = document.getElementById('footer');
    
    // Create container
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4 py-6';
    
    // Create footer content wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0';
    
    // Create copyright section
    const copyrightSection = document.createElement('div');
    copyrightSection.className = 'text-center md:text-left';
    
    const copyrightText = document.createElement('p');
    copyrightText.className = 'text-sm text-gray-300';
    
    // Create copyright symbol and text
    const currentYear = new Date().getFullYear();
    copyrightText.innerHTML = `
        <span class="text-lg">&copy;</span> ${currentYear} Glow Skincare. All rights reserved.
    `;
    
    copyrightSection.appendChild(copyrightText);
    
    // Create student info section
    const studentSection = document.createElement('div');
    studentSection.className = 'text-center md:text-right';
    
    const studentInfo = document.createElement('div');
    studentInfo.className = 'flex flex-col space-y-1';
    
    // Student name
    const studentName = document.createElement('p');
    studentName.className = 'text-sm font-medium text-white';
    studentName.textContent = 'Bianca Villarreal';
    
    // Class name
    const className = document.createElement('p');
    className.className = 'text-xs text-gray-300';
    className.textContent = 'DWDD2620 - Fall 2025';
    
    studentInfo.appendChild(studentName);
    studentInfo.appendChild(className);
    studentSection.appendChild(studentInfo);
    
    // Create additional links section (optional)
    const linksSection = document.createElement('div');
    linksSection.className = 'flex space-x-4 text-sm';
    
    // Privacy link
    const privacyLink = document.createElement('a');
    privacyLink.href = '#';
    privacyLink.className = 'text-gray-300 hover:text-white transition-colors duration-200';
    privacyLink.textContent = 'Privacy Policy';
    
    // Terms link
    const termsLink = document.createElement('a');
    termsLink.href = '#';
    termsLink.className = 'text-gray-300 hover:text-white transition-colors duration-200';
    termsLink.textContent = 'Terms of Service';
    
    linksSection.appendChild(privacyLink);
    linksSection.appendChild(termsLink);
    
    // Assemble footer
    wrapper.appendChild(copyrightSection);
    wrapper.appendChild(linksSection);
    wrapper.appendChild(studentSection);
    
    container.appendChild(wrapper);
    
    // Add separator line
    const separator = document.createElement('hr');
    separator.className = 'border-gray-600 my-4';
    container.insertBefore(separator, wrapper);
    
    // Add brand tagline
    const tagline = document.createElement('div');
    tagline.className = 'text-center mt-4';
    const taglineText = document.createElement('p');
    taglineText.className = 'text-xs text-gray-400 italic';
    taglineText.innerHTML = `&copy; Bianca Delgado &copy; ${currentYear} &bull; DWDD2620`;
    tagline.appendChild(taglineText);
    container.appendChild(tagline);
    
    footerElement.appendChild(container);
    
    console.log('✅ Footer generated successfully');
}