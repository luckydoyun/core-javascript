import { diceAnimation, getNode } from "./lib/index.js";

/* 
[주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindeEnvent 유틸 함수 만들기
3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + ITFE 사용하기

//diceAnimation()

*/

const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');

const handlerRollingDice = (() => {

  let stopAnimation;
  let isRolling = false;

  return () => {

    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 500);
    } else {
      clearInterval(stopAnimation);
    }

    isRolling = !isRolling;
    //clearInterval(id);
    //clearTimeout(id);
  }
}
  
)();

// const handlerRollingDice = () => {

//   let stopAnimation;
//   let isRolling = false;

//   return () => {

//     if (!isRolling) {
//       stopAnimation = setInterval(diceAnimation, 500);
//     } else {
//       clearInterval(stopAnimation);
//     }

//     isRolling = !isRolling;
//     //clearInterval(id);
//     //clearTimeout(id);
//   }
// };



rollingDiceButton.addEventListener('click', handlerRollingDice);