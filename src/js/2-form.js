const formElem = document.querySelector('.feedback-form');

function handleInput(event) {
  const { name, value } = event.target;
  const trimmedValue = value.trim();
  const formData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  formData[name] = trimmedValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

formElem.addEventListener('input', handleInput);

document.addEventListener('DOMContentLoaded', () => {
  const formData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  Object.entries(formData).forEach(([name, value]) => {
    const inputElem = formElem.querySelector(`[name="${name}"]`);
    if (inputElem) {
      inputElem.value = value;
    }
  });
});

formElem.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = formElem.querySelector('[name="email"]').value;
  const messageValue = formElem.querySelector('[name="message"]').value;

  if (emailValue.trim() === '' || messageValue.trim() === '') {
    alert('Пожалуйста, заполните все поля формы.');
    return;
  }

  localStorage.removeItem('feedback-form-state');
  formElem.reset();
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formData);
});
