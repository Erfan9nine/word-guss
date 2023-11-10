// const emails = document.querySelector("input");

// const { Button } = require("bootstrap");

// function clicker() {
//     let regexer = /^[\w.]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;

// const truer = regexer.test(emails.value);

//   if (truer ) {
//     console.log(" match");
//   } else {
//     console.log("dosent match");
//   }
// }
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.querySelector('button');
const live_weight=document.getElementById('live-weight');
const live_height=document.getElementById('live-height');
const result = document.getElementById('result');
console.log(height,weight);
let h ; 
height.addEventListener('change',function (){
    h=+height.value;
    live_height.textContent=h;
   
})
let w;
weight.addEventListener('change',function (){
    w=+weight.value;
    live_weight.textContent=w;
   
})


btn.addEventListener('click',function(){
    const calc =+( weight.value/(Math.pow(height.value/100,2))).toFixed(1);
 
  if (calc>19.0) {
    result.innerHTML="your Bmi is " +" "+calc +" " +" awsome";
    result.style.color='green';
  }else{
      result.style.color='red';
      result.innerHTML="your Bmi is " +" "+calc +" " +" awfull";
   
  }
})
