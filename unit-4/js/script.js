async function loadDestinations() {
  try {
    console.log('Fetching destinations...');
    // Fetch from the root level destinations.json
    const res = await fetch('/destinations.json');
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const destinations = await res.json();
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
