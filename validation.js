const emailInput = document.getElementById('email');
const form = document.getElementById('contact-form');
const validateMessage = document.getElementById('validate');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const isLowercase = email === email.toLowerCase();
  if (!isLowercase) {
    validateMessage.innerText = 'Please enter a lowercase email address';
    validateMessage.style.color = 'red';
    return;
  }
  form.submit();
});