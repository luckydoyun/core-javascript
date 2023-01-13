import { getNode } from "./getNode.js";
import { addClass, removeClass } from "./css.js";

//(className, text, time)
export function showAlert(node, text = '에러가 발생했어요😂', timeout = 2000) {
  if(typeof node === 'string') node = getNode(node);
  node.textContent = text;

  addClass(node,'is-active');
  setTimeout(()=>{
    removeClass(node,'is-active');
  },timeout)
}