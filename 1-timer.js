/* empty css                      */import{f as l}from"./assets/vendor-CCO2o_no.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".timer-start-btn");let f=0;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){if(o[0].getTime()<=Date.now())return n.classList.remove("is-active"),window.alert("Please choose a date in the future");f=o[0].getTime(),n.classList.add("is-active")}};l("#datetime-picker",u);n.addEventListener("click",a);function a(o){setInterval(r,1e3);function r(){f-Date.now()<0}}
//# sourceMappingURL=1-timer.js.map
