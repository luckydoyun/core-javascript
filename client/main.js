
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js';
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
  if(!name) return;

  if(isNumericString(name)) {
    console.log('이름이 맞니');
    showAlert('.alert');
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

submit.addEventListener('click', clickSubmitHandler);