/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

function checkBrowser(browserName) {
  let browser;
  let ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("chrome") >= -1) browser = "chrome";
  else if (ua.indexOf("edge") >= -1) browser = "edge";
  else if (ua.indexOf("whale") >= -1) browser = "whale";
  else if (ua.indexOf("safari") >= -1) browser = "safari";
  else if (ua.indexOf("firefox") >= -1) browser = "firefox";

  return browser === browserName;
}

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength;


// 특정 인덱스의 글자 추출
let extractCharacter;


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(8);
console.log('slice : ', slice);
let subString;
let subStr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log('indexOf : ',indexOf);

let lastIndexOf;
let includes;
let startsWith;
let endsWith;


// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;


// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;