const loginForm = document.querySelector('.login-back');
const loginButton = document.querySelector('.login-button');
const closeButton = document.querySelector('.close-btn');

loginButton.addEventListener('click', () => {
  loginForm.classList.toggle('shown');
})

closeButton.addEventListener('click', () => {
  loginForm.classList.toggle('shown');
})


