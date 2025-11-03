// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load reviews data and display
    loadReviews();
    
    // Implement navigation wayfinding
    implementWayfinding();
});

// Function to load and display reviews
async function loadReviews() {
    try {
        const response = await fetch('data/reviews.json');
        const reviews = await response.json();
        
        const container = document.getElementById('reviews-container');
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create review cards
        reviews.forEach(review => {
            const reviewCard = createReviewCard(review);
            container.appendChild(reviewCard);
        });
        
    } catch (error) {
        console.error('Error loading reviews:', error);
        displayErrorMessage();
    }
}

// Function to create a review card element
function createReviewCard(review) {
    const card = document.createElement('div');
    
    // Apply Tailwind classes using JavaScript
    card.className = 'bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300';
    
    // Create star rating using ternary operator
    const stars = createStarRating(review.rating);
    
    // Format date
    const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    card.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <div>
                <h3 class="font-semibold text-gray-900 text-lg">${review.name}</h3>
                <p class="text-sm text-gray-500">${formattedDate}</p>
            </div>
            <div class="flex items-center space-x-1">
                ${stars}
            </div>
        </div>
        
        <div class="mb-4">
            <p class="text-sm font-medium text-blue-600 mb-2">${review.product}</p>
            <p class="text-gray-700 leading-relaxed">${review.review}</p>
        </div>
        
        <div class="flex items-center justify-between text-sm text-gray-500">
            <span class="rating-text">${review.rating}/5 stars</span>
            <span class="helpful-text">Helpful review</span>
        </div>
    `;
    
    return card;
}

// Function to create star rating with ternary operator for different colors
function createStarRating(rating) {
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        // Ternary operator to determine star color and fill
        const starClass = i <= rating 
            ? 'star star-filled text-yellow-400' 
            : 'star star-empty text-gray-300';
        
        // SVG star icon with ternary operator for filled vs empty
        const starSVG = i <= rating 
            ? `<svg class="w-5 h-5 ${starClass}" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
               </svg>`
            : `<svg class="w-5 h-5 ${starClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
               </svg>`;
            
        starsHTML += `<span class="inline-block" data-rating="${i}">${starSVG}</span>`;
    }
    
    return starsHTML;
}

// Function to implement navigation wayfinding
function implementWayfinding() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('text-blue-600', 'font-semibold');
                navLink.classList.add('text-gray-700');
            });
            
            // Add active class to clicked link using Tailwind classes
            this.classList.remove('text-gray-700');
            this.classList.add('text-blue-600', 'font-semibold');
            
            // Smooth scroll to section if it exists
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Function to display error message if reviews fail to load
function displayErrorMessage() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = `
        <div class="col-span-full text-center py-12">
            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                <p class="text-red-600 font-medium">Unable to load reviews at this time.</p>
                <p class="text-red-500 text-sm mt-2">Please try again later.</p>
            </div>
        </div>
    `;
}

// Add responsive behavior for better mobile experience
function addResponsiveBehavior() {
    // Add touch-friendly hover effects on mobile
    const reviewCards = document.querySelectorAll('.bg-white');
    
    reviewCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('shadow-lg');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('shadow-lg');
            }, 150);
        });
    });
}

// Call responsive behavior after reviews are loaded
window.addEventListener('load', addResponsiveBehavior);