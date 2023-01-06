
let title = "환영합니다.";

var house = {
  title: "집이예요~",
  room: {
    title: "방입니다.",
    getTitle: function() {
      return this.title;
    }
  }
}

console.log("------------var,let로 선언된 변수에 대한 this로 접근했을 때 다른관점 그리고 call함수------------------");
var fn = house.room.getTitle;
console.log("fn : " , fn);
console.log("fn() : ", fn());
console.log("fn.call(house) : ", fn.call(house));
//집이에요~

console.log("------------house객체 속 room객체 속 함수 사용------------------");
console.log("house.room.getTitle() : ", house.room.getTitle());
// 방입니다.

console.log("------------room객체 속 함수를 house객체에 생성------------------");
house.getTitle = house.room.getTitle;
house.getTitle();
console.log("house : " , house);
console.log("house.getTitle : ", house.getTitle);
console.log("house.getTitle() : ", house.getTitle());
//집이예요~

console.log("------------var,let로 선언된 변수에 대한 this로 접근했을 때 다른관점 그리고 call함수------------------");
var fn2 = house.room.getTitle;
console.log("fn2 : ", fn2);
console.log("fn2() : ", fn2());
console.log("fn2.call(house) : ", fn2.call(house));
//집이에요~

console.log("------------fn2를 풀어서 사용------------------");
console.log("house.room.getTitle.call(house) : ", house.room.getTitle.call(house));
//집이에요~

console.log("------------------------------");
house.getTitle = house.room.getTitle;
house.getTitle.call(house);
console.log("house.getTitle : ", house.getTitle);
console.log("house.getTitle.call(house) : ", house.getTitle.call(house));
//집이에요~