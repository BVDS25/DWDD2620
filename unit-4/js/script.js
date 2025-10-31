async function loadDestinations() {
  try {
    console.log('Fetching destinations...');
    
    // Determine the correct path based on environment
    let jsonPath;
    
    // Check if we're on GitHub Pages (has github.io in URL)
    if (window.location.hostname.includes('github.io')) {
      // GitHub Pages deployment - use relative path from unit-4 folder
      jsonPath = 'json/destinations.json';
      console.log('Detected GitHub Pages deployment');
    } else if (window.location.port) {
      // Local development server (has port number)
      jsonPath = '/destinations.json';
      console.log('Detected local development server');
    } else {
      // Other deployment - try relative path
      jsonPath = './json/destinations.json';
      console.log('Using relative path for other deployment');
    }
    
    console.log(`Fetching from: ${jsonPath}`);
    const response = await fetch(jsonPath);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - Could not load ${jsonPath}`);
    }
    
    const destinations = await response.json();
    console.log(`Successfully loaded from: ${jsonPath}`);
    console.log('Destinations loaded:', destinations);

    const container = document.getElementById('destinations');
    
    if (!container) {
      console.error('Container element not found!');
      return;
    }

    destinations.forEach(dest => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" class="card-img" />
        <div class="card-body">
          <h2 class="card-title">${dest.name}</h2>
          <p class="card-desc">${dest.description}</p>
          <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-gray-500">⏱️ ${dest.length}</span>
            <span class="card-cost">${dest.cost}</span>
          </div>
          <div class="card-buttons">
            <button class="btn btn-primary">Book Now</button>
            <button class="btn btn-secondary">Itinerary</button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
    
    console.log('Cards rendered successfully!');
  } catch (error) {
    console.error('Error loading destinations:', error);
  }
}

loadDestinations();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
