// get the form element
const form = document.getElementById('contact-form');

// get the form inputs
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('comments');


// set local storage items
localStorage.setItem('name', nameInput.value);
localStorage.setItem('email', emailInput.value.toLowerCase());
localStorage.setItem('message', messageInput.value);


// set form inputs to stored values on page load
window.onload = function() {
  nameInput.value = localStorage.getItem('name') || '';
  emailInput.value = localStorage.getItem('email') || '';
  messageInput.value = localStorage.getItem('message') || '';
}
