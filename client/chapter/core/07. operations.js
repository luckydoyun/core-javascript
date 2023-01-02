/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자
let ternary = 10 > 5 ? 'big' : 'small';

// 산술 연산자: 덧셈
let addition;

// 산술 연산자: 뺄셈
let subtraction;

// 산술 연산자: 곱셈
let multiplication;

// 산술 연산자: 나눗셈
let division;

// 산술 연산자: 나머지
let remainder;

// 산술 연산자: 거듭 제곱
let power;


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];

let firstArray = [1,2,3];
let secondArray = [4,5,6];
// let newArray = firstArray.concat(secondArray);

// 전개연산자 spread Operator
let newArray = [...firstArray, ...secondArray, `hello`];


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

/* let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // 2 * 5 + 125 => 135

let firstValue = +prompt("첫번째 : ", 10);
let secondValue = +prompt("두번째 : ", 30);

console.log(firstValue + secondValue); */

/* -------------------------------------------------------------------------- */
/*                                두번 쨰 연산비교 실습                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/* Comparison Operator                                                    */
/* ---------------------------------------------------------------------- */

const number = [10, -4, 3, 90, 101, 234, -10_000]

// ~ 보다 큼 또는 작음 → boolean
let lessThen = number[0] < number[3];
let greaterThen;

// ~ 보다 크거나 작음 또는 같음 → boolean
let lessThenAndEqual;
let greaterThenAndEqual;

// 동등(등급이나 정도가 같다) → boolean
let equal;

// 다름(같지 않음) → boolean
let inequal;

// 동일(똑같다) → boolean
let same;


// 문자 비교
// 사전편집(lexicographical) 순
// 사전 뒤쪽의 문자가 앞쪽의 문자보다 크다고 판단
// 예) 'ㅎ' > 'ㄱ' → true
// 소문자가 대문자보다 크다고 판단
// 예) 'A' > 'a' → false


// 문자 비교 알고리즘(문제 해결을 위한 절차)
// 1. 두 문자열의 첫 글자 비교
// 2. 첫 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 3. 첫 글자가 같을 경우, 두 번째 글자 비교
// 4. 두 번째 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 5. 두 번째 글자가 같을 경우, 두 번째 글자 비교
// 6. ...
// 7. 비교가 종료되었고, 문자열 길이도 같을 경우 두 문자열은 동일함으로 결론 도출

console.log('Design' <= 'Development');
console.log('디자인' <= '개발');

let result = (age > 18) ? true : false;