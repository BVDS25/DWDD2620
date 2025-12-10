import { renderSocialIcons } from '../modules/socialIcons.mjs';
import { renderCopyright } from '../modules/copyright.mjs';
import { loadReviews } from '../modules/reviews.mjs';

document.querySelector('#socialIcons').appendChild(renderSocialIcons());
document.querySelector('#copyright').appendChild(renderCopyright());

// Load and display reviews
loadReviews('reviewsContainer');
