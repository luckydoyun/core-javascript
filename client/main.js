import {
  diceAnimation, getNode, getNodes, disableElement, enabledElement,
  visibleElement,
  invisibleElement,
  insertLast,
  clearContents,
  attr,
  memo
} from "./lib/index.js";

/* 
[주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindeEnvent 유틸 함수 만들기
3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + ITFE 사용하기

//diceAnimation()

*/
const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
// const recordListbody = getNode('.recordList > tbody');
memo('@tbody',()=>getNode('.recordListWrapper tbody'));
let sum = 0;

function renderRecordListItem() {
  // console.log(recordListbody);
  // let dataDice = +getNode('#cube').dataset['dice'];
  let dataDice = +attr(memo('cube'),'data-dice');
  sum = sum + dataDice;

  let template = /* html */`
  <tr>
    <td>${memo('@tbody').rows.length + 1}</td>
    <td>${dataDice}</td>
    <td>${sum}</td>
  </tr>
  `;
  insertLast(memo('@tbody'),template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}



/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */

const handlerRollingDice = (() => {

  let stopAnimation;
  let isRolling = false;

  return () => {

    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 150);

      disableElement(recordButton);
      disableElement(resetButton);

    } else {
      clearInterval(stopAnimation);
      enabledElement(recordButton);
      enabledElement(resetButton);
    }

    isRolling = !isRolling;
    //clearInterval(id);
    //clearTimeout(id);
  }
}

)();

const handlerRecord = () => {
  visibleElement(recordListWrapper);

  renderRecordListItem();
}

const handlerReset = () => {
  invisibleElement(recordListWrapper);
  clearContents(memo('@tbody'));
  sum = 0;
}



rollingDiceButton.addEventListener('click', handlerRollingDice);
recordButton.addEventListener('click', handlerRecord);
resetButton.addEventListener('click',handlerReset);