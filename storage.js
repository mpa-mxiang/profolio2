// Get the form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');

// Load the form data from local storage
const formData = JSON.parse(localStorage.getItem('formData')) || {};

// Set the form values if they exist in local storage
if (formData.name) {
  nameInput.value = formData.name;
}

if (formData.email) {
  emailInput.value = formData.email;
}

if (formData.comments) {
  commentsInput.value = formData.comments;
}

// Save the form data to local storage whenever the user changes an input field
form.addEventListener('input', () => {
  console.log("form input");
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.comments = commentsInput.value;
  
  localStorage.setItem('formData', JSON.stringify(formData));
});

const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  console.log("saved input");
  document.getElementById('name').value = savedData.name;
  document.getElementById('email').value = savedData.email;
  document.getElementById('comments').value = savedData.comments;
}
