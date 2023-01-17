// console.log('say hi');

import { getNode } from "../dom/getNode.js";



const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000){
  setTimeout(callback,timeout);

};

delay(()=>{
  first.style.top = '-100px';
});
first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

// second.style.transform = 'rotate(360deg)';

console.log(first);
console.log(second);

first.addEventListener('load',()=>{
  console.log('hello');
})