/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 50;
/* if(age >= 14 && age <= 90)
  alert("한참 일 할 때지") */


let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:false};


let user;
let password;

user = prompt(`Who's there?`);

if(user === 'Admin') {
  password = prompt(`Password?`);
  if(password === null || password === '') {
    alert(`Canceled.`);
  }
  else if(password === 'TheMaster') {
    alert(`Welcome !!`);
  }
  else {
    alert(`Wrong password`);
  }
}
else {
  alert("Canceled.");
}