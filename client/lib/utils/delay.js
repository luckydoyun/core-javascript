// console.log('say hi');

import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";



const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000){
  setTimeout(callback,timeout);

};

// console.log(first);
// console.log(second);

first.addEventListener('load',()=>{
  console.log('hello');
})
/* 
delayP().then( ()=>{
  first.style.top = '-100px';
  return delayP()
}).then(()=>{
  first.style.transform = 'rotate(360deg)';
  second.style.transform = 'rotate(360deg)';
  return delayP()
}).then(()=>{
  first.style.top = '0px';
}).catch((err)=>{
  console.log(`animation ${err}`);
});

function delayP(timeout = 1000){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('S U C C E S S !!');
      // reject('F A I L E D !!');
      
    }, timeout);
  })
}

delayP().then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err);
}); */

// console.log( delayP() );
// console.log( delayP() );

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: 'S U C C E S S @@',
  failedMessage: 'F A I L E D @@',
};


export function delayP(
  options = {}
 ){

  
  // defaultOptions 객체 복사
  let config = {...defaultOptions};
  // console.log(options);

  if(isNumber(options)){
    config.timeout = options;
  }
  
  // 객체 합성 mixin 필요 , 많이 사용하는 코드
  if(isObject(options))
    config = {...config, ...options};
  
  // config 확인 용도
  // console.log(config);

  // 객체 구조 분해 할당
  const 
  { shouldReject,
    timeout,
    successMessage,
    failedMessage} = config;


  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(shouldReject);
      // console.log(timeout);
      if(!shouldReject){
         resolve(successMessage);
      }
      else{
        reject(failedMessage);
      }
    }, timeout);
  })
}


/* -------------------------------------------------------------------------- */
/*                                 async awit                                 */
/* -------------------------------------------------------------------------- */

let result = 0;



/* async function testA() {
  let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("이해 완료!");
    }, 1000);
  })

  let result = await promise;
  return result;
}

console.log('즉시 찍기 result : ', result);

result = await testA();
// result = testA();

setTimeout(() => {
  console.log('3초 후에 찍기 result : ', result);
}, 3000); */