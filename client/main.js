/* global gsap */

import { attr, changeColor, delayP, doyun, getNode, insertLast, renderEmptyCard, renderSpinner, renderUserCard, xhrData, xhrPromise } from "./lib/index.js";

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
/* let urlUser1 = 'https://jsonplaceholder.typicode.com/users/1';
// console.log( "doyun() : ", doyun({url:urlUser1, defaultOptions}) );
// console.log( "await doyun() : ", await doyun() );

async function tset() {
  let result = await delayP(2000);
  console.log(result);
  
  let response = await doyun.get(urlUser1,{headers: {"name": "luckyDoyun"}});
  console.log("response : ", response);
  console.log("response.data : ", response.data);
  // console.log(response);
}
 
tset();
 */

// rendingUserList
// ajax get user List

/* -------------------------------------------------------------------------- */
/*                                 2023.01.19                                 */
/* -------------------------------------------------------------------------- */

// 유저 카드 생성
// 생성된 카드로 랜더링

let urlUser1 = 'http://localhost:3000/users';

const userCardContainer = getNode('.user-card-inner');


async function rendingUserList(url) {

  renderSpinner(userCardContainer);
  let userInfo = await doyun.get(url);

  try {
    // await delayP(2000);
    getNode('.loadingSpinner').remove();
    let userData = userInfo.data;

    // console.log("userInfo : ", userInfo)
    // console.log("userData : ", userData);
    // console.log(createUserCard(userData));;

    userData.forEach(item => {
      renderUserCard(userCardContainer, item);
    });

    // insertLast(userCardContainer,createUserCard(userData));
    // console.log( "gsap.utils.toArray('.user-card') : ", gsap.utils.toArray('.user-card') );

    changeColor('.user-card');

    gsap.to(gsap.utils.toArray('.user-card'), {
      x: 0,
      opacity: 1,
      // rotation: 360,
      duration: 1.5,
      stagger: 0.2
    })

  
  } catch (error) {
    if(userInfo.ok === false)
    renderEmptyCard(userCardContainer);
    console.log(error);
  }
  
}

rendingUserList(urlUser1);

function userCardHandler(e) {
  let target = e.target;
  let deleteButton = target.closest('button');
  let userCard = target.closest('.user-card');

  if(deleteButton && userCard){
    let id = userCard.dataset['index'].slice(5); // value : user-number
    // console.log(id);

    // console.log(`${urlUser1}${id}`);
    doyun.delete(`${urlUser1}/${id}`).then(()=>{
      userCardContainer.innerHTML = '';
      rendingUserList(urlUser1);
    });
    // rendingUserList(urlUser1);

  }
    
}

userCardContainer.addEventListener('click', userCardHandler);