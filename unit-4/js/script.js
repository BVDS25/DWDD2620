async function loadDestinations() {
  const res = await fetch('json/destinations.json');
  const destinations = await res.json();

  const container = document.getElementById('destinations');

  destinations.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" class="card-img" />
      <div class="card-body">
        <h2 class="card-title">${dest.name}</h2>
        <p class="card-desc">${dest.description}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">${dest.length}</span>
          <span class="card-cost">${dest.cost}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

loadDestinations();
