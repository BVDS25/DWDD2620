// Movie data and DOM elements
let movies = [];
const moviesGrid = document.getElementById('movies-grid');
const modalsContainer = document.getElementById('modals-container');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadMovies();
    displayMovieCards();
    createModals();
    setupHamburgerMenu();
});

// Load movies from JSON file
async function loadMovies() {
    try {
        const response = await fetch('data/movies.json');
        movies = await response.json();
    } catch (error) {
        console.error('Error loading movies:', error);
        moviesGrid.innerHTML = '<p class="col-span-full text-center text-red-500">Error loading movies. Please try again later.</p>';
    }
}

// Display movie cards in the grid
function displayMovieCards() {
    moviesGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

// Create individual movie card
function createMovieCard(movie) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'movie-card group cursor-pointer';
    
    cardDiv.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${movie.image_url}" 
                 alt="${movie.title}" 
                 class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-heading font-semibold text-primary mb-2">${movie.title}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">${movie.description}</p>
            <button onclick="openModal(${movie.id})" 
                    class="w-full bg-secondary text-primary font-semibold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                See More
            </button>
        </div>
    `;
    
    return cardDiv;
}

// Create modal dialogs for all movies
function createModals() {
    movies.forEach(movie => {
        const modal = createModal(movie);
        modalsContainer.appendChild(modal);
    });
}

// Create individual modal
function createModal(movie) {
    const modalDiv = document.createElement('div');
    modalDiv.id = `modal-${movie.id}`;
    modalDiv.className = 'modal-backdrop hidden';
    modalDiv.onclick = (e) => {
        if (e.target === modalDiv) closeModal(movie.id);
    };
    
    modalDiv.innerHTML = `
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 class="text-2xl font-heading font-bold text-primary">${movie.title}</h2>
                <button onclick="closeModal(${movie.id})" 
                        class="text-gray-400 hover:text-gray-600 text-2xl font-bold">
                    ×
                </button>
            </div>
            
            <!-- Modal Body -->
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Movie Image -->
                    <div>
                        <img src="${movie.image_url}" 
                             alt="${movie.title}" 
                             class="w-full h-80 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                             onclick="showImagePath('${movie.image_url}')"
                             title="Click to view image URL">
                    </div>
                    
                    <!-- Movie Details -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                            <p class="text-gray-600 leading-relaxed">${movie.description}</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-semibold text-secondary">Production Studio</h4>
                                <p class="text-gray-600">${movie.production_studio}</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-secondary">Year Released</h4>
                                <p class="text-gray-600">${movie.year}</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-secondary">Budget</h4>
                                <p class="text-gray-600">${movie.budget}</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-secondary">Box Office</h4>
                                <p class="text-gray-600">${movie.box_office}</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-secondary">Runtime</h4>
                                <p class="text-gray-600">${movie.runtime}</p>
                            </div>
                            <div>
                                <h4 class="font-semibold text-secondary">Genre</h4>
                                <p class="text-gray-600">${movie.genre}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold text-secondary mb-2">Primary Actors</h4>
                            <p class="text-gray-600">${movie.primary_actors}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Modal Footer -->
            <div class="p-6 border-t border-gray-200 text-right">
                <button onclick="closeModal(${movie.id})" 
                        class="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors">
                    Close
                </button>
            </div>
        </div>
    `;
    
    return modalDiv;
}

// Open modal
function openModal(movieId) {
    const modal = document.getElementById(`modal-${movieId}`);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close modal
function closeModal(movieId) {
    const modal = document.getElementById(`modal-${movieId}`);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Setup hamburger menu functionality
function setupHamburgerMenu() {
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu);
    }
}

// Toggle mobile navigation menu
function toggleMobileMenu() {
    navMenu.classList.toggle('hidden');
    
    // Animate hamburger icon
    const lines = hamburgerBtn.querySelectorAll('.hamburger-line');
    hamburgerBtn.classList.toggle('active');
    
    if (hamburgerBtn.classList.contains('active')) {
        lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
    }
}

// Close mobile menu when clicking on nav links
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link') && window.innerWidth < 768) {
        toggleMobileMenu();
    }
});

// Close mobile menu when resizing to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('hidden');
        hamburgerBtn.classList.remove('active');
        
        // Reset hamburger icon
        const lines = hamburgerBtn.querySelectorAll('.hamburger-line');
        lines.forEach(line => {
            line.style.transform = 'none';
            line.style.opacity = '1';
        });
    } else {
        navMenu.classList.add('hidden');
    }
});

// Show image path when image is clicked
function showImagePath(imageUrl) {
    // Create a temporary input to copy the URL
    const tempInput = document.createElement('input');
    tempInput.value = imageUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        // Copy to clipboard
        document.execCommand('copy');
        
        // Show a temporary notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-md shadow-lg z-50 transition-opacity duration-300';
        notification.textContent = 'Image URL copied to clipboard!';
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
        
    } catch (err) {
        // Fallback: show alert with URL
        alert('Image URL: ' + imageUrl);
    }
    
    // Remove temporary input
    document.body.removeChild(tempInput);
}

// Escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal-backdrop:not(.hidden)');
        if (openModal) {
            const modalId = openModal.id.replace('modal-', '');
            closeModal(modalId);
        }
    }
});