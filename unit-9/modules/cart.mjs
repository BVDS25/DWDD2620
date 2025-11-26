// Shopping Cart Module
const CART_KEY = 'clearSkinCart';

// Get cart from localStorage
export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add item to cart
export function addToCart(product) {
  const cart = getCart();
  const existingItem = cart.find(item => item.itemNumber === product.itemNumber);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  saveCart(cart);
  return cart;
}

// Remove item from cart
export function removeFromCart(itemNumber) {
  let cart = getCart();
  cart = cart.filter(item => item.itemNumber !== itemNumber);
  saveCart(cart);
  return cart;
}

// Update item quantity
export function updateQuantity(itemNumber, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.itemNumber === itemNumber);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemNumber);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  
  return cart;
}

// Get cart total
export function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.cost * item.quantity), 0);
}

// Get cart item count
export function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Clear cart
export function clearCart() {
  localStorage.removeItem(CART_KEY);
  return [];
}
