// Trial #3

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

function makePromise(chosenBtn, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(chosenBtn === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
};

function onSubmit(event) {
    event.preventDefault();
    const chosenBtn = formEl.state.value;
    const delay = formEl.delay.value;

    makePromise(chosenBtn, delay)
        .then(value => console.log(value))
        .catch(error => console.log(error));
};


// Trial #2 Not successfull
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const formEl = document.querySelector(".form");

// // const state = formEl.state.value;

// const makePromise = (chosenBtn, delay) => {
    
//     setTimeout(() => {
//         if (chosenBtn === "rejected") {
//             return Promise.reject(delay);
//         } else {
//             return Promise.resolve(delay);
//         }
//     }, delay);
// };


// const onSubmit = event => {
//     event.preventDefault();
//     const delay = formEl.delay.value;
//     const chosenBtn = formEl.state.value;
//     makePromise(delay)
//     .then(delay => console.log(`✅ Fulfilled promise in ${delay}ms`))
//     .catch(error => console.error(`❌ Rejected promise in ${error}ms`));
// };

// formEl.addEventListener("submit", onSubmit);



// Trial #1 - Kind of works but def with a bug
// * It reads State value at the time of running 
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const formEl = document.querySelector(".form");
// formEl.addEventListener("submit", onSubmit);
// // const delInpEl = formEl.querySelector(".delay-input");

// function makePromise({ value, delay }) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(formEl.state.value === "fulfilled") {
//                 resolve(`✅ Fulfilled promise in ${delay}ms`);
//             } else {
//                 reject(`❌ Rejected promise in ${delay}ms`);
//             }
//         }, delay);
//     });
// };

// function onSubmit(event) {
//     event.preventDefault();
//     let options = {};
//     options.value = formEl.state.value;
//     options.delay = formEl.delay.value;
//     makePromise(options)
//         .then(value => console.log(value))
//         .catch(error => console.log(error));
// };
