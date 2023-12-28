import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('.delay');
const createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', event => {
  event.preventDefault();
  const delay = delayInput.value;
  const radioChecked = document.querySelector('input[name="state"]:checked');

  // ==================== Перевірка вводу затримки ====================

  if (!delayInput.value) {
    izitoast.error({
      title: 'Error',
      message: 'Please enter a delay!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      titleColor: '#fff',
      messageColor: '#fff',
      messageSize: '16px',
      progressBarColor: '#B51B1B',
    });
    return;
  }

  // ==================== Перевірка вибору стану ====================

  if (!radioChecked) {
    izitoast.error({
      title: 'Error',
      message: 'Please choose a state!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      titleColor: '#fff',
      messageColor: '#fff',
      messageSize: '16px',
      progressBarColor: '#B51B1B',
    });
    return;
  }

  // ==================== Створення проміса ====================

  const promise = new Promise((resolve, reject) => {
    if (radioChecked.value === 'fulfilled') {
      resolve(delay);
    } else {
      reject(delay);
    }
  });
  promise
    .then(delay => {
      setTimeout(() => {
        izitoast.success({
          title: 'Success',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#1F8A0F',
          titleColor: '#fff',
          messageColor: '#fff',
          messageSize: '16px',
          progressBarColor: '#0B4D0B',
        });
      }, delay);
    })
    .catch(delay => {
      setTimeout(() => {
        izitoast.error({
          title: 'Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#EF4040',
          titleColor: '#fff',
          messageColor: '#fff',
          messageSize: '16px',
          progressBarColor: '#B51B1B',
        });
      }, delay);
    });
});
