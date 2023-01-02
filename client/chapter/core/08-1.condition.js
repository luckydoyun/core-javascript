/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let input = prompt("숫자를 입력하세요 : ");

console.log(input > 0 ? 1 : input == 0 ? 0 : -1);



// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie;

// 영화 볼거니?
let goingToWatchMovie;


// if 문(statement)
didWatchMovie = confirm(`너 아바타2 물의길 봤어?`);

if(didWatchMovie == false) {
  console.log(`아직도 안봤어?`);
  goingToWatchMovie = confirm(`뭐야 그럼 봐야하잖아, 볼거야?`);
  if(goingToWatchMovie == true){
    console(`그래, 돌비에서 보자`);
  }
  else{
    console.log(`안본다고? 알겟어ㅋ`);
  }
}
else  {
  console.log(`봤다고..? 이 배신자야`);
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
didWatchMovie = confirm(`너 아바타2 물의길 봤어?`);

