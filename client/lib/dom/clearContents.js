export const clearContents = (node) =>{
  if(typeof node === 'string' ) node = getNode(node);
  node.textContent = '';
}