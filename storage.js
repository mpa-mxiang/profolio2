const typedName = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#comments');
const form = document.getElementById('contact-form');
const formData = JSON.parse(localStorage.getItem('formData')) || {};
const savedData = JSON.parse(localStorage.getItem('formData'));
if (formData.name) {
  typedName.value = formData.name;
}
if (formData.email) {
  emailInput.value = formData.email;
}
if (formData.comments) {
  messageInput.value = formData.message;
}
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
if (savedData) {
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
  typedName.value = savedData.name;
}
// error is here
form.addEventListener('submit', () => {
  localStorage.clear();
});
