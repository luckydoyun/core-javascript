/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = (...args) => args.reduce(function(acc, key){ acc += key });
let calcAllMoney = (a,b,c,d) => {
  return a+b+c+d;
}
console.log(calcAllMoney(10000, 8900, 1360, 2100));


// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (...args) => {

  let result = 1;

  for(let count=0; count < args[1]; count++){
    result *= args[0];
  }

  return result;
}; 

console.log(pow(2,53));

let powExpression = (numberic, powerCount) => Array(powerCount).fill(numberic).reduce((acc, item) => acc*=item);
let powExpression2 = (numberic, powerCount) => Array(powerCount).fill(null).reduce((acc) => acc*=numberic,1);

console.log(powExpression(2,53));
console.log(powExpression2(2,29));
// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc) => acc + text,'');
console.log(repeat('hello',3)); 
//  => 특정 문자 n 번 반복

let repeat4 = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

    repeat4('heeeee',3);