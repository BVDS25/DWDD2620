// Navigation Toggle Script
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('#navToggle');
  const navMenu = document.querySelector('#navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  }
});
