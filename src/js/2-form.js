const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerInput(e) {
  formData.email = input.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    return alert('Fill please all fields');
  }
}

function handlerPopulate() {
  const message = localStorage.getItem(STORAGE_KEY);
  const messageObj = JSON.parse(message);
  if (message) {
    input.value = messageObj.email;
    textarea.value = messageObj.message;
    formData.email = messageObj.email;
    formData.message = messageObj.message;
  }
}

handlerPopulate();
