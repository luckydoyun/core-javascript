/* ---------------------------------------------------------------------- */
/* DOM Manipulation                                                       */
/* ---------------------------------------------------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement('div');
div.className = 'third';
div.textContent = '세 번째 이랑께';


/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

const h1 = getNode('h1');
// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// h1.append(div);

// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// h1.prepend(div);
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// h1.before(div);
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// h1.after(div);
// - node.replaceWith(노드나 문자열) – node를 대체

// - node.remove() – node를 제거
// h1.remove();


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

let template1 = /* html */
`<div class="box">새롭게 추가된 beforebegin 입니다.</div>`;
let template2 = /* html */
`<div class="box">새롭게 추가된 afterbegin 입니다.</div>`;
let template3 = /* html */
`<div class="box">새롭게 추가된 beforeend 입니다.</div>`;
let template4 = /* html */
`<div class="box">새롭게 추가된 afterend 입니다.</div>`;


insertBefore(123, template1);
insertFirst('h1', template2);
insertLast('h1', template3);
insertAfter('h1', template4);



// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입