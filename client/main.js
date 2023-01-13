// import { getNode } from "./lib/dom/getNode.js";
// import { attr } from "./lib/dom/attr.js"
// import { css as cssfun, addClass, removeClass, toggleClass } from "./lib/dom/css.js";

import { 
  getNode,
  css,
  addClass,
  removeClass,
  toggleClass,
  insertLast,
  typeError,
  sum,
  getInputValue,
  clearContents
 } 
 from "./lib/utils/index.js";

const first = getNode('.first');
const firstInput = getNode('#firstNumber');
const second = getNode('.second');
const secondInput = getNode('#secondNumber');
const result = getNode('.result');
const done = getNode('#done');





function handler(e) {
  e.preventDefault();
  let firstvalue = getInputValue(firstInput);
  let secondvalue = getInputValue(secondInput);
  let addvalue = sum(firstvalue, secondvalue);
  // let addvalue = firstvalue + secondvalue;
  console.log('firstvalue + secondvalue : ',addvalue );

  // clearContents('.result');
  clearContents(result);
  insertLast(result,addvalue);
  // result.innerHTML = addvalue;
}

function inputHandler(e) {
  let firstvalue = getInputValue(firstInput);
  let secondvalue = getInputValue(secondInput);
  let addvalue = sum(firstvalue, secondvalue);

  // clearContents('.result');
  clearContents(result);
  insertLast(result,addvalue);
}


console.log(css);

done.addEventListener('click',handler);

firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change',inputHandler);