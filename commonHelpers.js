import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-3029c4a4.js";let c;const o=document.querySelector("[data-start]"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onOpen:function(){document.querySelectorAll(".flatpickr-weekday").forEach(e=>{e.textContent=e.textContent.trim().slice(0,2)})},onClose(t){console.log(t[0]),c=t[0].getTime(),c<Date.now()?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B51B1B"}),o.disabled=!0,o.classList.remove("button-enabled")):(o.disabled=!1,o.classList.add("button-enabled"))}};l("#datetime-picker",f);function h(t){const n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:r,minutes:d,seconds:u}}o.addEventListener("click",()=>intervalId=setInterval(()=>{const t=Date.now(),e=c-t,i=h(e),{days:a,hours:s,minutes:n,seconds:r}=i;(a>=0||s>=0||n>=0||r>=0)&&(document.querySelector("[data-days").textContent=a.toString().padStart(2,"0"),document.querySelector("[data-hours]").textContent=s.toString().padStart(2,"0"),document.querySelector("[data-minutes]").textContent=n.toString().padStart(2,"0"),document.querySelector("[data-seconds]").textContent=r.toString().padStart(2,"0"))},1e3));
//# sourceMappingURL=commonHelpers.js.map