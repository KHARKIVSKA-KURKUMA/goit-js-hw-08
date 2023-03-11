import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STRG_KEY = 'feedback-form-state';
const { email, message } = formEl;

formEl.addEventListener('input', throttle(saveState, 1000));

document.addEventListener('DOMContentLoaded', showState);
formEl.addEventListener('submit', onFormSubmit);

function saveState() {
  const data = { email: email.value, message: message.value };
  localStorage.setItem(STRG_KEY, JSON.stringify(data));
}

function showState() {
  const state = JSON.parse(localStorage.getItem(STRG_KEY));
  if (state) {
    email.value = state.email;
    message.value = state.message;
  } else {
    email.value = '';
    message.value = '';
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  const formData = {
    email: email.value,
    message: message.value,
  };
  console.log(formData);
  localStorage.removeItem(STRG_KEY);
  formEl.reset();
}
