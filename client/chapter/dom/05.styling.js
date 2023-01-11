/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('doyun');
//first.classList.remove('doyun');

console.log("first.classList.contains('doyun') : ", first.classList.contains('doyun'));
console.log("first.classList.contains('jieun') : ", first.classList.contains('jieun'));



/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`





//addClass('.first', 123);
addClass('.first', 'sejin');
addClass('.first', 'jieun');
removeClass('.first','sejin');
toggleClass('.first','jieun');
toggleClass('.first','jieun');