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