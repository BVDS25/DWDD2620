// Profile Module - Manage user profile creation, display, and deletion
const PROFILE_KEY = 'clearSkinProfile';

// Check if profile exists and display appropriate section
function checkProfile() {
  const createSection = document.querySelector('#createProfileSection');
  const viewSection = document.querySelector('#viewProfileSection');
  
  if (!createSection || !viewSection) {
    console.error('Profile sections not found');
    return;
  }
  
  const profile = localStorage.getItem(PROFILE_KEY);
  
  if (profile) {
    // Profile exists - show view section
    const profileData = JSON.parse(profile);
    displayProfile(profileData);
    createSection.classList.add('hidden');
    viewSection.classList.remove('hidden');
  } else {
    // No profile - show create section
    createSection.classList.remove('hidden');
    viewSection.classList.add('hidden');
  }
}

// Display profile data
function displayProfile(data) {
  const displayName = document.querySelector('#displayName');
  const displayEmail = document.querySelector('#displayEmail');
  const displayPhone = document.querySelector('#displayPhone');
  const displaySkinType = document.querySelector('#displaySkinType');
  
  if (displayName) displayName.textContent = data.fullName;
  if (displayEmail) displayEmail.textContent = data.email;
  if (displayPhone) displayPhone.textContent = data.phone;
  if (displaySkinType) displaySkinType.textContent = data.skinType;
}

// Initialize profile page functionality
export function initializeProfilePage() {
  const profileForm = document.querySelector('#profileForm');
  const deleteBtn = document.querySelector('#deleteProfileBtn');
  
  // Handle form submission - Create Profile
  if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Validate all fields are filled
      const fullName = document.querySelector('#fullName').value.trim();
      const email = document.querySelector('#email').value.trim();
      const phone = document.querySelector('#phone').value.trim();
      const skinType = document.querySelector('#skinType').value;
      
      if (!fullName || !email || !phone || !skinType) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Create profile object
      const profileData = {
        fullName,
        email,
        phone,
        skinType
      };
      
      // Save to localStorage
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
      
      // Display success message and refresh view
      alert('Profile created successfully!');
      checkProfile();
      profileForm.reset();
    });
  }
  
  // Handle profile deletion
  if (deleteBtn) {
    deleteBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
        localStorage.removeItem(PROFILE_KEY);
        alert('Profile deleted successfully.');
        checkProfile();
      }
    });
  }
  
  // Initial check on page load
  checkProfile();
}
