// Trial #3

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
formEl.addEventListener("submit", onSubmit);

function makePromise(chosenBtn, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(chosenBtn === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
};

function onSubmit(event) {
    event.preventDefault();
    const chosenBtn = formEl.state.value;
    const delay = formEl.delay.value;

    makePromise(chosenBtn, delay)
        .then(value => iziToast.success({
                theme: 'dark',
                title: 'OK',
            message: `Fulfilled promise in ${value}ms`,
            backgroundColor: '#59A10D',
                closeOnClick: true,
                position: 'topRight',
            timeout: 3000,
        }))
        .catch(error => iziToast.error({
                theme: 'dark',
                title: 'Error',
                message: `Rejected promise in ${error}ms`,
                backgroundColor: '#EF4040',
                closeOnClick: true,
                position: 'topRight',
            timeout: 3000,
        })
            );
};
