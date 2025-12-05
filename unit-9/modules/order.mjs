// Order/Cart Page Module - Render and manage cart on order page
import { getCart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart } from './cart.mjs';

// Render cart items and totals
export function renderCart() {
  const emptyCartDiv = document.querySelector('#emptyCart');
  const cartItemsDiv = document.querySelector('#cartItems');
  const itemsList = document.querySelector('#itemsList');
  const subtotalElement = document.querySelector('#subtotal');
  const itemCountElement = document.querySelector('#itemCount');
  
  if (!emptyCartDiv || !cartItemsDiv || !itemsList || !subtotalElement || !itemCountElement) {
    console.error('Required cart elements not found');
    return;
  }
  
  const cart = getCart();
  
  if (cart.length === 0) {
    emptyCartDiv.classList.remove('hidden');
    cartItemsDiv.classList.add('hidden');
    return;
  }
  
  emptyCartDiv.classList.add('hidden');
  cartItemsDiv.classList.remove('hidden');
  
  // Clear existing items
  itemsList.innerHTML = '';
  
  // Render each cart item
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row gap-4 items-center';
    
    itemDiv.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title}" class="w-24 h-24 object-cover rounded">
      <div class="flex-grow text-center sm:text-left">
        <h3 class="font-serif font-bold text-primary mb-1">${item.title}</h3>
        <p class="text-sm text-grey-600 mb-2">${item.size}</p>
        <p class="text-lg font-bold text-secondary">$${item.cost.toFixed(2)}</p>
      </div>
      <div class="flex items-center gap-3">
        <button class="decrease-qty bg-grey-200 hover:bg-grey-300 text-dark w-8 h-8 rounded flex items-center justify-center font-bold" data-id="${item.itemNumber}">-</button>
        <span class="text-lg font-semibold w-8 text-center">${item.quantity}</span>
        <button class="increase-qty bg-grey-200 hover:bg-grey-300 text-dark w-8 h-8 rounded flex items-center justify-center font-bold" data-id="${item.itemNumber}">+</button>
      </div>
      <div class="text-center sm:text-right">
        <p class="text-xl font-bold text-dark mb-2">$${(item.cost * item.quantity).toFixed(2)}</p>
        <button class="remove-item text-grey-500 hover:text-red-600 text-sm underline" data-id="${item.itemNumber}">Remove</button>
      </div>
    `;
    
    itemsList.appendChild(itemDiv);
  });
  
  // Update totals
  subtotalElement.textContent = `$${getCartTotal().toFixed(2)}`;
  itemCountElement.textContent = getCartItemCount();
  
  // Add event listeners for quantity buttons
  document.querySelectorAll('.increase-qty').forEach(btn => {
    btn.addEventListener('click', function() {
      const itemNumber = this.getAttribute('data-id');
      const cart = getCart();
      const item = cart.find(i => i.itemNumber === itemNumber);
      if (item) {
        updateQuantity(itemNumber, item.quantity + 1);
        renderCart();
      }
    });
  });
  
  document.querySelectorAll('.decrease-qty').forEach(btn => {
    btn.addEventListener('click', function() {
      const itemNumber = this.getAttribute('data-id');
      const cart = getCart();
      const item = cart.find(i => i.itemNumber === itemNumber);
      if (item) {
        updateQuantity(itemNumber, item.quantity - 1);
        renderCart();
      }
    });
  });
  
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', function() {
      const itemNumber = this.getAttribute('data-id');
      if (confirm('Remove this item from your cart?')) {
        removeFromCart(itemNumber);
        renderCart();
      }
    });
  });
}

// Initialize cart page functionality
export function initializeCartPage() {
  const clearCartBtn = document.querySelector('#clearCartBtn');
  const checkoutBtn = document.querySelector('#checkoutBtn');
  
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to clear your entire cart?')) {
        clearCart();
        renderCart();
      }
    });
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      const total = getCartTotal();
      const itemCount = getCartItemCount();
      alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\nItems: ${itemCount}\n\nYour order has been placed successfully!`);
      clearCart();
      renderCart();
    });
  }
  
  // Initial render
  renderCart();
}
