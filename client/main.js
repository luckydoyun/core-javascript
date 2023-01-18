import { doyun, insertLast, xhrData, xhrPromise } from "./lib/index.js";

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/13',
  (res)=>{
    console.log(res);
    insertLast('body',res);
    insertLast('body',JSON.stringify(res));
  },
  (err)=>{
    insertLast('body',err);
    console.log(err);
  }
); */

/* xhrPromise
// .get('www.naver.com')
.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  // insertLast(document.body,JSON.stringify(res));
  console.log('promise.get() success');
  console.log(res);
})
.catch((err)=>{
  console.log(err);
}); */



/* -------------------------------------------------------------------------- */
/*                               doyun test code                              */
/* -------------------------------------------------------------------------- */
let urlUser1 = 'https://jsonplaceholder.typicode.com/users/1';
// console.log( "doyun() : ", doyun({url:urlUser1, defaultOptions}) );
// console.log( "await doyun() : ", await doyun() );
doyun.get(urlUser1,{headers: {"name": "luckyDoyun"}});
