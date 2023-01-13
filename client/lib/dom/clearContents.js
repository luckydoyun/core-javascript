// import { getNode } from "./getNode.js";

export const clearContents = (node) =>{
  if(typeof node === 'string' ) node = getNode(node);
  // node = document.querySelector(node);
  // node = getNode(node);
  console.log("clearContents 파일에서의 node는? : ", node);

  node.textContent = '';
}