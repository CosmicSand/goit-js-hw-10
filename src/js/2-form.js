const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const email = event.currentTarget.elements.email.value.trim();
  const message = event.currentTarget.elements.message.value.trim();
  const data = {
    email,
    message,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});

if (localStorage.getItem('feedback-form-state')) {
  const dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = dataFromLS.email;
  form.elements.message.value = dataFromLS.message;
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value.trim() ||
    !event.currentTarget.elements.message.value.trim()
  ) {
    alert('Please fill in all the fields!');
  } else {
    const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(storedData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
