import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if (selectedDates[0].getTime() <= Date.now()) {
            startBtnEl.classList.remove("is-active");
            return iziToast.error({
                title: 'Alert',
                message: 'Please choose a date in the future',
                closeOnClick: true,
                position: 'topRight',
                timeout: 3000,
});
        } else {
            userSelectedDate = selectedDates[0].getTime();
            startBtnEl.classList.add("is-active");
        }
    },
};

flatpickr("#datetime-picker", options);

const startBtnEl = document.querySelector(".timer-start-btn");
const daysCountEl = document.querySelector("[data-days]");
const hrsCountEl = document.querySelector("[data-hours]");
const minCountEl = document.querySelector("[data-minutes]");
const secCountEl = document.querySelector("[data-seconds]");

let userSelectedDate = 0;
let timerStartNum = {};

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
    const intervalId = setInterval(getStartNum, 1000);
    
};

function getStartNum() {
        // const currentTime = Date.now();
        const timeDifference = userSelectedDate - Date.now();
        if (timeDifference < 0) {
            clearInterval(intervalId);
            return;
        } else {
            convertMs(timeDifference);
            updateClockface(timerStartNum);
        }
    }
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




// // Mod 10, Les-1 Repo
// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     if (this.isActive) {
//       clearInterval(this.intervalId);
//       this.isActive = false;

//       stopBtn.textContent = "Reset";
//       return;
//     }

//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//     stopBtn.textContent = "Stop";
//   }

//   /**
//    * - Приймає час в мілісекундах
//    * - Вираховує скільки в них вміщається годин/хвилин/секунд
//    * - Повертає об'єкт з властивостями hours, mins, secs
//    * - Адська копіпаста з stackoverflow 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /**
//    * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
//    */
//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".js-clockface");

// const timer = new Timer({
//   onTick: updateClockface,
// });

// startBtn.addEventListener("click", timer.start.bind(timer));
// stopBtn.addEventListener("click", timer.stop.bind(timer));

// /**
//  * - Приймає час як обʼєкт з годинами/хвилинами/секундами
//  * - Рендерить інтерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// Trial #2 - Linked library, date-picker works properly, nothing else added
// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         console.log(selectedDates[0]);
//     },
// };
// flatpickr("#datetime-picker", options);


// Trial #1
// import flatpickr from "flatpickr";

// import "flatpickr/dist/flatpickr.min.css";


// const dateInputEl = document.querySelector("#datetime-picker");
// const pickerOptions = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

// dateInputEl.addEventListener("input", () {
//     flatpickr("#datepicker", pickerOptions);
//   });

// document.addEventListener("DOMContentLoaded", function () {
//     flatpickr("#datepicker", pickerOptions);
//   });


// let userSelectedDate = 