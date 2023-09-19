import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const LS_KEY = 'feedback-form-state';
let checkoutData = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};


if (checkoutData) {
  form.email.value = checkoutData.email ?? '';
  form.message.value = checkoutData.message ?? '';
console.log(form.email.value);
console.log(form.message.value);
}

form.addEventListener('input', throttle(savedInput, 500));

function savedInput(e) {
  checkoutData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(checkoutData));
}
// form.addEventListener('submit', submission);


// function savedInput(e) {
  
// }