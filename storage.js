const typedName = document.querySelector('#name');
const typedEmail = document.querySelector('#email');
const messageInput = document.querySelector('#comments');
const forms = document.getElementById('contact-form');
const formData = JSON.parse(localStorage.getItem('formData')) || {};
const savedData = JSON.parse(localStorage.getItem('formData'));
console.log(formData)
if (formData.name) {
  typedName.value = formData.name;
}
if (formData.email) {
  typedEmail.value = formData.email;
}
if (formData.comments) {
  messageInput.value = formData.message;
}
forms.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
if (savedData) {
  typedEmail.value = savedData.email;
  messageInput.value = savedData.message;
  typedName.value = savedData.name;
}
// error is here
forms.addEventListener('submit', () => {
  localStorage.clear();
});
