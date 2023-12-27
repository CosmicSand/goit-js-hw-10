import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const buttonStart = document.querySelector('[data-start]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
  },
  onOpen: function dayNames() {
    document.querySelectorAll('.flatpickr-weekday').forEach(el => {
      el.textContent = el.textContent.trim().slice(0, 2);
    });
    // document.querySelector('div.flatpickr-calendar').style.width = '280px';
    // document.querySelector('div.flatpickr-calendar').style.padding = '16px';
    // document.querySelector('div.flatpickr-weekdays').style.width = '248px';
    // document.querySelector('div.flatpickr-rContainer').style.display = 'flex';
    // document.querySelector('div.flatpickr-rContainer').style.width = '248px';
    // document.querySelector('div.flatpickr-rContainer').style.flexDirection =
    //   'column';
    // document.querySelector('div.flatpickr-rContainer').style.marginTop = '24px';
    // document.querySelector('div.flatpickr-rContainer').style.gap = '16px';
    // document.querySelector('div.flatpickr-days').style.display = 'flex';
    // document.querySelector('div.flatpickr-days').style.width = '248px';
    // document.querySelector('div.dayContainer').style.display = 'flex';
    // document.querySelector('div.dayContainer').style.width = '248px';
    // document.querySelector('div.dayContainer').style.minWidth = '248px';

    // document.querySelector('div.flatpickr-day').style.width = '20px';
    // document.querySelector('div.flatpickr-day').style.height = '20px';
  },
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0].getTime();
    if (userSelectedDate < Date.now()) {
      izitoast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',

        backgroundColor: '#EF4040',
        titleColor: '#fff',
        messageColor: '#fff',
        messageSize: '16px',
        progressBarColor: '#B51B1B',
      });
      buttonStart.disabled = true;
      buttonStart.classList.remove('button-enabled');
    } else {
      buttonStart.disabled = false;
      buttonStart.classList.add('button-enabled');
    }
  },
};
const dateTimeInput = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

buttonStart.addEventListener(
  'click',
  () =>
    (intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = userSelectedDate - currentTime;
      const time = convertMs(deltaTime);
      const { days, hours, minutes, seconds } = time;

      if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0) {
        document.querySelector('[data-days').textContent = days
          .toString()
          .padStart(2, '0');
        document.querySelector('[data-hours]').textContent = hours
          .toString()
          .padStart(2, '0');
        document.querySelector('[data-minutes]').textContent = minutes
          .toString()
          .padStart(2, '0');
        document.querySelector('[data-seconds]').textContent = seconds
          .toString()
          .padStart(2, '0');
      }
    }, 1000))
);
