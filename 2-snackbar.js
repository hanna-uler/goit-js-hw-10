import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-A92OCY9B.js";const r=document.querySelector(".form");r.addEventListener("submit",m);function n(o,e){return new Promise((i,t)=>{setTimeout(()=>{o==="fulfilled"?i(e):t(e)},e)})}function m(o){o.preventDefault();const e=r.state.value,i=r.delay.value;n(e,i).then(t=>s.success({theme:"dark",title:"OK",message:`Fulfilled promise in ${t}ms`,backgroundColor:"#59A10D",closeOnClick:!0,position:"topRight",timeout:3e3})).catch(t=>s.error({theme:"dark",title:"Error",message:`Rejected promise in ${t}ms`,backgroundColor:"#EF4040",closeOnClick:!0,position:"topRight",timeout:3e3}))}
//# sourceMappingURL=2-snackbar.js.map
