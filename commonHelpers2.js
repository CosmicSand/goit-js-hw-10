import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as o}from"./assets/vendor-3029c4a4.js";const s=document.querySelector(".delay"),a=document.querySelector(".create-btn");a.addEventListener("click",i=>{i.preventDefault();const r=s.value,t=document.querySelector('input[name="state"]:checked');if(!s.value){o.error({title:"Error",message:"Please enter a delay!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B51B1B"});return}if(!t){o.error({title:"Error",message:"Please choose a state!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B51B1B"});return}new Promise((e,l)=>{t.value==="fulfilled"?e(r):l(r)}).then(e=>{setTimeout(()=>{o.success({title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C"})},e)}).catch(e=>{setTimeout(()=>{o.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#FFBEBE"})},e)})});
//# sourceMappingURL=commonHelpers2.js.map
