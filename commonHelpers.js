import{e as l}from"./assets/error-18a6c7dd.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-3029c4a4.js";let i;const e=document.querySelector("[data-start]"),h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,locale:{firstDayOfWeek:1},onOpen:function(){document.querySelectorAll(".flatpickr-weekday").forEach(o=>{o.textContent=o.textContent.trim().slice(0,2)})},onClose:function(t){console.log(t[0]),i=t[0].getTime(),i>=Date.now()?(e.removeAttribute("disabled"),e.classList.add("button-enabled")):(f.error({title:"Error",message:"Please choose a date in the future",position:"topRight",iconUrl:`${l}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B51B1B"}),e.setAttribute("disabled",!0),e.classList.remove("button-enabled"))}};m("#datetime-picker",h);function y(t){const n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:r,minutes:d,seconds:u}}e.addEventListener("click",()=>{e.setAttribute("disabled",!0),e.classList.remove("button-enabled"),setInterval(()=>{const t=Date.now(),o=i-t,c=y(o),{days:a,hours:s,minutes:n,seconds:r}=c;(a>=0||s>=0||n>=0||r>=0)&&(document.querySelector("[data-days").textContent=a.toString().padStart(2,"0"),document.querySelector("[data-hours]").textContent=s.toString().padStart(2,"0"),document.querySelector("[data-minutes]").textContent=n.toString().padStart(2,"0"),document.querySelector("[data-seconds]").textContent=r.toString().padStart(2,"0"))},1e3)});
//# sourceMappingURL=commonHelpers.js.map
