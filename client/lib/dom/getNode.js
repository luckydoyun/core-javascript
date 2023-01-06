function getNode(className){
  if(typeof className !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.');
  }
  return document.querySelector(className);
};

function getNodes(className){
  if(typeof className !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.');
  }
  return document.querySelectorAll(className);
};