// Get form and all inputs
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');

// Load data from local storage
inputs.forEach(input => {
  const value = localStorage.getItem(input.id);
  if (value) {
    input.value = value;
  }
});

// Save data to local storage on change
inputs.forEach(input => {
  input.addEventListener('input', event => {
    localStorage.setItem(input.id, event.target.value);
  });
});

// Clear data from local storage on form submission
form.addEventListener('submit', () => {
  inputs.forEach(input => {
    localStorage.removeItem(input.id);
  });
});
