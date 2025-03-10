import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtnEl = document.querySelector(".timer-start-btn");
let userSelectedDate = 0;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        if (selectedDates[0].getTime() <= Date.now()) {
            startBtnEl.classList.remove("is-active");
            return window.alert("Please choose a date in the future");
        } else {
            userSelectedDate = selectedDates[0].getTime();
            startBtnEl.classList.add("is-active");
        }
    },
};
flatpickr("#datetime-picker", options);

startBtnEl.addEventListener("click", foo1);
function foo1(event) {
    const intervalId = setInterval(foo2, 1000);
    function foo2() {
        // const currentTime = Date.now();
        const timeDifference = userSelectedDate - Date.now();
        if (timeDifference < 0) {
            return;
        } else {
            // console.log(timeDifference);
        }
    }
}

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