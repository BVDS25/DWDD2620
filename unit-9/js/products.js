import { renderSocialIcons } from '../modules/socialIcons.mjs';
import { renderCopyright } from '../modules/copyright.mjs';
import { initializeModal, loadProducts } from '../modules/products.mjs';

document.querySelector('#socialIcons').appendChild(renderSocialIcons());
document.querySelector('#copyright').appendChild(renderCopyright());

// Initialize modal functionality
initializeModal();

// Load and display products
loadProducts('productsContainer');
