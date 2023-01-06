/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */
`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zindex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxwidth: 800,
  height: "40vh",
  minheight: 280,
  transform: "translate(-50%, -50%)"
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한
// authentication = 인증
// authorization = 권한


let authUser = null;

authUser = {
  uid : 'user-id-asd',
  name : 'doyun',
  email : 'doyun.jang.0128@gmail.com',
  isSignIn : true,
  permission : 'paid',
}

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
/* console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

console.log('authUserp[uid] : ', authUser["uid"]);
console.log('authUserp[name] : ', authUser["name"]);
console.log('authUserp[email] : ', authUser["email"]);
console.log('authUserp[isSignIn] : ', authUser["isSignIn"]);
console.log('authUserp[upermissionid] : ', authUser["permission"]); */
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty) {
  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-0000-0000',
  }
}

const user = createUser('tel');

// 프로퍼티 포함 여부 확인
/* Object.prototype.isTest = true;

for(let key in authUser){
  if({}.hasOwnProperty.call(authUser, key))
    console.log('hasoneproperty : ',key);
}

for(let key in authUser){
  console.log('key : ',key);
}
 */
function removeProperty(object, key) {
  if(!(typeof object === 'object'))
    console.log('나는 오브젝트가 아니야');
    // object가 아닐 시 예외 처리
  object[key] = null;
}

function deleteProperty(object, key) {
  delete object[key];
}

removeProperty(user, "name");
deleteProperty(user, "tel");

// 프로퍼티 나열
let authUserArray1 = Object.entries(authUser);
let authUserArray2 = Object.keys(authUser);
let authUserArray3 = Object.values(authUser);
console.log(authUserArray1);
console.log(authUserArray2);
console.log(authUserArray3);


function getPropertiesList1(object) {
  return Object.keys(object);
}

const getPropertiesList2 = (object) => Object.keys(object);

let result1 = getPropertiesList1(authUser);
let result2 = getPropertiesList2(authUser);
console.log(result1);
console.log(result2);
// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 이면 false : true
function isEmptyObject(object) {
  // return Object.keys(object).length === 0 ? true : false;
  return Object.keys(object).length === 0;
}

console.log(isEmptyObject(student));


let salaries = {
  John: 100,
  Ann: 160,
  Doyun: 700
}

let total = 0;

// 구조 분해 할당
for(let [key, value] of Object.entries(salaries)) {
  total += value;
};

console.log(salaries['John'] + salaries['Ann'] + salaries['Doyun']);
console.log('합계 : ', total);


let color = ['#ff0000', '#2b00ff', '#00ff2f'];

const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];

const {
  John,
  Ann,
  Pete
} = salaries;

console.log(Pete);

let clone = Object.assign({},user);
console.log(clone);

clone.email='123123123';