// Function to store user preferences in localStorage
function storeUserPreference(color) {
    localStorage.setItem('preferredColor', color);
  }
  
  // Function to apply the stored user preferences
  function applyUserPreferences() {
    const storedColor = localStorage.getItem('preferredColor');
    if (storedColor) {
      document.body.style.backgroundColor = storedColor;
      document.getElementById('userPreference').textContent = `Your preferred background color is: ${storedColor}`;
    }
  }
  
  // Function to trigger animation on button click
  function triggerAnimation() {
    const button = document.getElementById('animateBtn');
    button.classList.add('animated'); // Add the animation class to the button
  }
  
  // Event listener for button click to trigger animation
  document.getElementById('animateBtn').addEventListener('click', () => {
    triggerAnimation();
    storeUserPreference('#e74c3c'); // Store the red color when the button is clicked
  });
  
  // Apply stored preferences when the page loads
  window.onload = applyUserPreferences;
  