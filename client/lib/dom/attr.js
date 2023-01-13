
function getAttr(nodeName, attributeName) {

  if(typeof nodeName === 'string'){
    nodeName = getNode(nodeName);
  }
  return nodeName.getAttribute(attributeName);
};

function setAttr(nodeName, attributeName, value) {
  if(typeof nodeName === 'string'){
    nodeName = getNode(nodeName);
  }
  if(typeof attributeName !== 'string'){
    throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }
  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.');

  if(attributeName.includes('data')) {
    let rest = attributeName.slice(5);
    nodeName.dataset[rest] = value;
  }
  else {
    nodeName.setAttribute(attributeName, value);
  }
  return true;
}

export const attr = (node, prop, value) =>!value? getAttr(node,prop) : setAttr(node,prop,value);