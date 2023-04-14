const emailInput = document.getElementById('email');
const form = document.getElementById('contact-form');
const validateMessage = document.getElementById('validate');
function validate() {
  const email = emailInput.value.trim();
  const isLowercase = email.toLowerCase();
  if (email !== isLowercase) {
    validateMessage.innerText = 'Please enter a lowercase email address';
    validateMessage.style.color = 'red';
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  if (validate() === false) {
    event.preventDefault();
  }
});
