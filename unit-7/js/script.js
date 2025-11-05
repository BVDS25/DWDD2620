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
            <p class="text-sm font-medium text-accent mb-2">${review.product}</p>
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
    // Build the Stars
    const thestars = document.createElement('div');
    thestars.className = "flex my-4";
    
    for (let i = 0; i < 5; i++) {
        // console.log(review.stars)
        const starImage = document.createElement('img');
        i < rating ? starImage.src = "images/starColor.svg" : starImage.src = "images/starGrey.svg";
        starImage.className = "w-4 mr-1";
        starImage.alt = i < rating ? "Filled star" : "Empty star";
        thestars.appendChild(starImage);
    }
    
    return thestars.outerHTML;
}

// Function to implement navigation wayfinding
function implementWayfinding() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('text-secondary', 'font-semibold');
                navLink.classList.add('text-gray-700');
            });
            
            // Add active class to clicked link using Tailwind classes
            this.classList.remove('text-gray-700');
            this.classList.add('text-secondary', 'font-semibold');
            
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
            <div class="bg-red-50 border border-error rounded-lg p-6">
                <p class="text-error font-medium">Unable to load reviews at this time.</p>
                <p class="text-error text-sm mt-2">Please try again later.</p>
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