async function loadDestinations() {
  try {
    console.log('Fetching destinations...');
    // Try multiple paths to find destinations.json
    const paths = [
      './json/destinations.json',     // Local relative path
      './destinations.json',          // If in same folder
      '/destinations.json',           // Root path (for Vite dev)
      'json/destinations.json'        // Another relative option
    ];
    
    let destinations = null;
    let lastError = null;
    
    for (const path of paths) {
      try {
        console.log(`Trying path: ${path}`);
        const res = await fetch(path);
        if (res.ok) {
          destinations = await res.json();
          console.log(`Successfully loaded from: ${path}`);
          break;
        }
      } catch (error) {
        lastError = error;
        console.log(`Failed to load from ${path}:`, error.message);
      }
    }
    
    if (!destinations) {
      throw new Error(`Could not load destinations.json from any path. Last error: ${lastError?.message}`);
    }
    
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
