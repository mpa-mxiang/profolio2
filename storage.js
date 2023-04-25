const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const messageInput = document.querySelector('#comments');
const forms = document.getElementById('contact-form');
const formData = JSON.parse(localStorage.getItem('formData')) || {};
const savedData = JSON.parse(localStorage.getItem('formData'));
if (formData.name) {
  formName.value = formData.name;
}
if (formData.email) {
  formEmail.value = formData.email;
}
if (formData.comments) {
  messageInput.value = formData.message;
}
forms.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
if (savedData) {
  formEmail.value = savedData.email;
  messageInput.value = savedData.message;
  formName.value = savedData.name;
}

forms.addEventListener('submit', () => {
  localStorage.clear();
});
