import { renderSocialIcons } from '../modules/socialIcons.mjs';
import { renderCopyright } from '../modules/copyright.mjs';
import { initializeProfilePage } from '../modules/profile.mjs';

document.querySelector('#socialIcons').appendChild(renderSocialIcons());
document.querySelector('#copyright').appendChild(renderCopyright());

// Initialize profile page functionality
initializeProfilePage();
