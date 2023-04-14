const form = document.querySelectorAll('#contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');

const formData = JSON.parse(localStorage.getItem('formData')) || {};

if (formData.name) {
  nameInput.value = formData.name;
}

if (formData.email) {
  emailInput.value = formData.email;
}

if (formData.comments) {
  commentsInput.value = formData.comments;
}

form.addEventListener('input', (event) => {
  console.log('Input event triggered!');
  formData[event.target.name] = event.target.value;

  try {
    localStorage.setItem('formData', JSON.stringify(formData));
  } catch (e) {
    console.error('Error saving data to localStorage:', e);
  }
});

const savedData = JSON.parse(localStorage.getItem('formData'));

if (savedData) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  commentsInput.value = savedData.comments;
}
