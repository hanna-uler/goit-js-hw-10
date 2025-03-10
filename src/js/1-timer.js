// Trial #2
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

document.addEventListener("DOMContentLoaded", () => {
  flatpickr("#datetime-picker", options);
});



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