
import { addClass, removeClass, clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js';
import { jujeobData } from "./data/data.js";


const submit = getNode('#submit');
const resultArea = getNode('.result');
const nameField = getNode('#nameField');
console.log(submit);



console.log(isNumericString('도윤123'));
console.log(isNumericString('1234'));

function clickSubmitHandler(e) {
  e.preventDefault();
  let name = getInputValue('#nameField');
  if(!name) {
    console.log('이름을 입력해 주세요!');
    showAlert('.alert-error', '이름을 입력해야 합니다.',2000);

   /*  addClass(resultArea,'shake');
    setTimeout(() => {
      removeClass(resultArea,'shake');
    }, 1000); */

    //GSAP
    gsap.fromTo(resultArea, 0.03, {x:-5}, {x:5, clearProps:"x", repeat:5})

    return;
  }

  if(isNumericString(name)) {
    console.log('이름이 맞니');
    showAlert('.alert-error');
    nameField.value = '';
    return;
  }
  

  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  // console.log(num);
  console.log(pick);
  // console.log(name);

  clearContents(resultArea);
  insertLast(resultArea,pick);

};

function clickCopyHandler(e) {
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text);
  copy(text).then(()=>{
    showAlert('.alert-error','클립보드 복사가 완료됐습니다.',2000);
  });
}

submit.addEventListener('click', clickSubmitHandler);

resultArea.addEventListener('click', clickCopyHandler);