import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtnEl = document.querySelector(".timer-start-btn");
const datePickerEl = document.querySelector("#datetime-picker");
const daysCountEl = document.querySelector("[data-days]");
const hrsCountEl = document.querySelector("[data-hours]");
const minCountEl = document.querySelector("[data-minutes]");
const secCountEl = document.querySelector("[data-seconds]");
startBtnEl.disabled = true;
datePickerEl.disabled = false;

let userSelectedDate = 0;
let timerStartNum = {};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() <= Date.now()) {
            datePickerEl.disabled = false;
            startBtnEl.disabled = true;
            return iziToast.error({
                backgroundColor: '#EF4040',
                theme: 'dark',
                title: 'Alert',
                message: 'Please choose a date in the future',
                closeOnClick: true,
                position: 'topRight',
                timeout: 3000,
});
        } else {
            userSelectedDate = selectedDates[0].getTime();
            datePickerEl.disabled = false;
            startBtnEl.disabled = false;
        }
    },
};

flatpickr("#datetime-picker", options);


function pad(value) {
    return String(value).padStart(2, "0");
};

function updateClockface({days, hours, minutes, seconds}) {
    daysCountEl.textContent = `${days}`;
    hrsCountEl.textContent = `${hours}`;
    minCountEl.textContent = `${minutes}`;
    secCountEl.textContent = `${seconds}`;
};


startBtnEl.addEventListener("click", setTimer);
function setTimer(event) {
    datePickerEl.disabled = true;
    startBtnEl.disabled = true;
    const intervalId = setInterval(getStartNum, 1000);
    function getStartNum() {
        const timeDifference = userSelectedDate - Date.now();
        if (timeDifference > 0) {
            convertMs(timeDifference);
            updateClockface(timerStartNum);
        } else {
            clearInterval(intervalId);
            datePickerEl.disabled = false;
            return;
        }
    };
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return timerStartNum = {days, hours, minutes, seconds};
};