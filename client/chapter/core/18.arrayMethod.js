/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10, 2100, 1000, 10000];

console.log(Array.isArray(arr));
console.log(Array.isArray([]));

/* 요소 순환 -------------------------------------------------------------- */

const user = {};

// forEach
console.log('arr : ', arr);
arr.forEach(function(item,index){
  console.log('index : ', index);
  console.log('item : ', item);
  this[index] = item;
},user)

arr.splice(0,2,22,23,54);
console.log(arr);

arr.sort((a,b)=>b-a);
console.log(arr);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹어라', '미용실가라', '코딩공부해야지'];

let newArray = arr.map(item => item * 2);
console.log(newArray);

let todolist = todo.map(todolist => `<li>${todolist}</li>`);
console.log('todolist : ', todolist);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1, name:'도윤'},
  {id:2, name:'세진'},
  {id:3, name:'지은'}
];

// find
const find = users.find((item,index)=>{
  return item.id < 3;
});

console.log('id가 3은 누구? : ', find);
// findIndex

const findindex = users.findIndex((item)=>{
  return item.id < 3;
});

console.log("findindex : ", findindex);

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter , 걸러내서 배열로 만든다
let result = arr.filter((number)=>{
  return number > 100;
});

console.log(result);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '장도윤',
    age: 33,
    job: '취준생',
  },

  {
    name: '이지은',
    age: 32,
    job: 'IT',
  },

  {
    name: '호랑이',
    age: 999,
    job: '포식자',
  },
]
// reduce
let total = friends.reduce((sum, item) => {
  return sum += item.age;
},0);
console.log('total : ', total);
// reduceRight
let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */ acc + `<li>할일${index + 1} : ${cur}</li>`
},'')

console.log(template2);
/* string ←→ array 변환 ------------------------------------------------- */

// split
// join