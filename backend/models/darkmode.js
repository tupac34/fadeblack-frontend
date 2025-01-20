// darkmode.js

// Get the dark mode toggle checkbox
const darkModeToggle = document.getElementById('darkModeSwitch');

// Check if dark mode preference is already stored in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Listen for changes in the toggle switch
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled'); // Save preference
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled'); // Save preference
}
