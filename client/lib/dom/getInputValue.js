export const getInputValue = (node) => {
  if(typeof node === 'string' ) node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  console.log("getInputValue 파일에서의 node는? : ", node);
  return node.value;
}