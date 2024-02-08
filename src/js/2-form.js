const formElem = document.querySelector('.feedback-form');

function handleInput(event) {
  const { name, value } = event.target;
  const formData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  formData[name] = value;
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
  localStorage.removeItem('feedback-form-state');
  formElem.reset();
  const formData = {
    email: formElem.querySelector('[name="email"]').value,
    message: formElem.querySelector('[name="message"]').value,
  };
  console.log(formData);
});
