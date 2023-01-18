
/* 
readyState
0: uninitalized
1: loading
2: loaded
3: interacitve
4: complete
*/

import { typeError } from "../error/typeError.js";


const data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  }
};

// 콜백 방식
export function xhrData({
  url = '',
  method = 'GET',
  body = null,
  headers = {
    'Content-Type': 'applicaiton/json',
    'Access-Control-Allow-Origin': '*',
    'name': 'Luckydoyun',
  },
  onSuccess = null,
  onFail = null,
}) {
  const xhr = new XMLHttpRequest();
  // console.log('xhr 생성 후 xhr.readyState : ' , xhr.readyState);
  // console.log(xhr);
  // console.log('xhr 객체 console.log로 호출 후 xhr.readyState : ' , xhr.readyState);

  //비동기 통신 오픈
  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value])=>{
  //   xhr.setRequestHeader(key, value);
  // });
  // console.log(xhr);
  // console.log(xhr.readyState);


  //객체 구조 분해 할당

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
  
    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        // console.log('통신 성공');
        onSuccess(JSON.parse(response));
      }
    } else {
      if(readyState ===2)
        onFail('readyState :2 즉, 통신 실패');
      else if(readyState ===3)
        onFail('readyState :3 즉, 통신 실패');
      else if(readyState ===4)
        onFail('readyState :4 즉, 통신 실패');
      else
        onFail('다른 경우 통신 실패');
      // console.error('통신 실패');
    }

  })

  //서버에 요청
  xhr.send(JSON.stringify(body));
}

// xhrData('POST', 'https://jsonplaceholder.typicode.com/users', data);
// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users1',
//   onSuccess : (e)=>{
//     console.log('onSuccess excute : ', e);
//   },
//   onFaild : (e)=>{
//     console.error(`onFaild excute : ${e}`);
//   }
// });

// console.log('xhr.open() before : ', xhr.readyState);
// console.log('xhr.open() after : ', xhr.readyState);
// console.log('xhr.send() after : ', xhr.readyState);
// console.log(data);
// console.log(JSON.stringify(data));

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'POST',
    body,
    url,
    onSuccess,
    onFail
  })
};

xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
};

xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail
  })
};

// console.dir(xhrData);
// xhrData.post(
//   'https://jsonplaceholder.typicode.com/users',
//   data,
//   (res) => {
//     console.log(`post 성공 ${res}`);
//     console.log(res);
//   },
//   (err) => {
//     console.log(`post 실패 ${err}`);
//   }
// );

// xhrData.delete(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (res) => {
//     console.log(`delete 성공 ${res}`);
//     console.log(res);
//   },
//   (err) => {
//     console.log(`delete 실패 ${err}`);
//   }
// );


/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users',
  (res) => {
    console.log(`get 성공`);
    console.log(res);
  },
  (err) => {
    console.log(`get 실패 ${err}`);
  }
); */


/* -------------------------------------------------------------------------- */
/*                                 promise API                                */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'applicaiton/json',
    'Access-Control-Allow-Origin': '*',
    'name': 'Luckydoyun',
  },
  body: null
}

function xhrPromise(options = {}){

  const xhr = new XMLHttpRequest();

  const {method, url, body, headers} = Object.assign({}, defaultOptions, options);

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필수값입니다.');

  xhr.open(method, url);

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject)=>{
    xhr.addEventListener('readystatechange',()=>{
      const {status, readyState, response} = xhr;

      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response));
        }
      }else{
        reject('promise 통신 실패');
      }
    })
  });
}

// xhrPromise();

xhrPromise({url: 'https://jsonplaceholder.typicode.com/users'})
.then((res)=>{
  console.log('promise success');
  console.log(res);
})
.catch((err)=>{
  console.log('promise failed');
  console.log(err);
});

xhrData.get(
  // 'www.naver.com',
  'https://jsonplaceholder.typicode.com/users',
  (res)=>{
    console.log('xhrData callback success');
    console.log(res);
  },
  (err)=>{
    console.log('xhrData callback failed');
    console.log(err);
  }
);