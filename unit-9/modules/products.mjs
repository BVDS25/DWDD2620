// Products Module - Load and display products with modal functionality
import { addToCart } from './cart.mjs';

let modal = null;
let closeModalBtn = null;
let currentProduct = null;

// Open modal with product details
function openModal(product) {
  if (!modal) return;
  
  currentProduct = product;
  document.querySelector('#modalTitle').textContent = product.title;
  document.querySelector('#modalImage').src = product.imageUrl;
  document.querySelector('#modalImage').alt = product.title;
  document.querySelector('#modalDescription').textContent = product.description;
  document.querySelector('#modalSize').textContent = product.size;
  document.querySelector('#modalSkinType').textContent = product.skinType;
  document.querySelector('#modalIngredients').textContent = product.keyIngredients;
  document.querySelector('#modalPrice').textContent = `$${product.cost.toFixed(2)}`;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  if (!modal) return;
  
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  currentProduct = null;
}

// Initialize modal functionality
export function initializeModal() {
  modal = document.querySelector('#productModal');
  closeModalBtn = document.querySelector('#closeModal');
  
  if (!modal || !closeModalBtn) return;
  
  closeModalBtn.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.classList.contains('min-h-full')) {
      closeModal();
    }
  });
  
  // Modal add to cart
  const modalAddToCartBtn = document.querySelector('#modalAddToCart');
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', function() {
      if (currentProduct) {
        addToCart(currentProduct);
        this.textContent = 'Added!';
        this.classList.add('bg-accent');
        
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.classList.remove('bg-accent');
        }, 1000);
      }
    });
  }
}

// Load and display products
export async function loadProducts(containerId) {
  try {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const container = document.querySelector(`#${containerId}`);
    
    if (!container) {
      console.error(`Container #${containerId} not found`);
      return;
    }
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card cursor-pointer';
      
      productCard.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.title}" class="w-full h-64 object-cover rounded-t-lg">
        <div class="p-6">
          <h2 class="text-xl font-serif font-bold text-primary mb-2 h-12">${product.title}</h2>
          <p class="text-grey-600 mb-3 text-sm h-24">${product.description}</p>
          <div class="mb-3">
            <p class="text-sm text-grey-500"><strong>Best for:</strong> ${product.skinType}</p>
          </div>
          <div class="mb-4">
          </div>
          <p class="text-2xl font-bold text-secondary mb-4">$${product.cost.toFixed(2)}</p>
          <button class="btn-primary w-full add-to-cart-btn" data-id="${product.itemNumber}">
            Add to Cart
          </button>
        </div>
      `;
      
      container.appendChild(productCard);
      
      // Click on card (but not button) to open modal
      productCard.addEventListener('click', function(e) {
        if (!e.target.classList.contains('add-to-cart-btn')) {
          openModal(product);
        }
      });
    });
    
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent modal from opening
        const itemId = this.getAttribute('data-id');
        const product = products.find(p => p.itemNumber === itemId);
        
        if (product) {
          addToCart(product);
          
          // Visual feedback
          const originalText = this.textContent;
          this.textContent = 'Added!';
          this.classList.add('bg-accent');
          
          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('bg-accent');
          }, 1000);
        }
      });
    });
    
  } catch (error) {
    console.error('Error loading products:', error);
  }
}
