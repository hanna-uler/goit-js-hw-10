import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", createPromise);
const delInpEl = formEl.querySelector(".delay-input");
let time = 0;
function execFnk(resolve, reject) {
    time = 
    setTimeout(toDoSome, time)
}

function createPromise(event) {
    const promise = new Promise(execFnk);
    
}

// Playing with iziToast
// const formEl = document.querySelector(".form");
// formEl.addEventListener("click", alert);
// function alert(event) {
//     if (formEl.querySelector(".rtf").textContent === "") {
//            return iziToast.success({
//                 title: 'OK',
//                 message: 'Please choose a date in the future',
//                 closeOnClick: true,
//                 position: 'topRight',
//                 timeout: 3000,
//                 backgroundColor: #326101,
// messageColor: #FFFFFF,
// messageSize: 16px, 
// messageLineHeight: 24px, 
                    
//            });
//     }
// };