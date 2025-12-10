import { renderSocialIcons } from '../modules/socialIcons.mjs';
import { renderCopyright } from '../modules/copyright.mjs';
import { initializeCartPage } from '../modules/order.mjs';

document.querySelector('#socialIcons').appendChild(renderSocialIcons());
document.querySelector('#copyright').appendChild(renderCopyright());

// Initialize cart page functionality
initializeCartPage();
