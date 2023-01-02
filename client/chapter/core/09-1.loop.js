/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */





const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */
let length = frontEndDev.length;
let i = 0;

// while 문 (순환 : 순방향)
while ( i < length ) {
  console.log(i, frontEndDev[i]);
  i++;  
}

console.log(`------------------------`);

// while 문 (역순환 : 역방향)
length -= 1;
while ( length > -1 ) {
  console.log(length, frontEndDev[length]);
  length--;
}

let copyArray = frontEndDev.slice(); // 주소가 같으므로 원본 파괴시 같이 파괴


/* while (1) {
  console.log(frontEndDev[5])
} */

// 성능 진단 : 순환 vs. 역순환