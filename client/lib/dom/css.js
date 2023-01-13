export function addClass(node, className) {
  node = getNode(node);
  if(typeof className !== 'string')
    typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
    
  node.classList.add(className);
  }

export function removeClass(node, className) {
  node = getNode(node);
  if(typeof className !== 'string')
   typeError('removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  
  node.classList.remove(className);
}

export function toggleClass(node, className) {
  node = getNode(node);
  if(typeof className !== 'string')
   typeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  node.classList.toggle(className);  
}

function getCss(node, prop) {
  node = getNode(node);

  if(typeof prop !== 'string')
    typeError('getCss 함수의 두 번째 인자인 prop는 문자이어야 한다.');
  
  if(!(prop in document.body.style)) {
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  return getComputedStyle(node)[prop];
}

function setCss(node, prop, value) {
  node = getNode(node);

  if(typeof prop !== 'string')
    typeError('setCss 함수의 두 번째 인자인 prop는 문자이어야 한다.');
  
  if(!(prop in document.body.style)) {
    syntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) {
    syntaxError('setCSS 함수의 세 번째 인자는 필수값 입니다.');
  }

  node.style[prop] = value;
}

export const css = (node, prop, value) => !value ? getCss(node, prop) : setCss(node, prop, value);