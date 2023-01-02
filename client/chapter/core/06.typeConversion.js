/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log("YEAR : ", YEAR);
console.log("String(YEAR) : ",String(YEAR));


// undefined, null

console.log("undefined : " , undefined);
console.log("String(undefined) : " , String(undefined));

let days = null;
console.log("days : ", days);
console.log("String(days) : ", String(days));

// boolean

let isKind = true;
console.log("isKind : " ,isKind);
console.log("String(isKind) : " ,String(isKind));

console.log(`isKind + '' : `, isKind + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */
console.log("------------------------------");
// undeinfed
console.log('Number(undefined) : ',Number(undefined));

// null
let money = null;
console.log("money : ", money);
console.log("Number(money) : ",Number(money));

// boolean
// true : 1 , false : 0
let cute = true;
console.log("cute : ",cute);
console.log("cute * 1 : " ,cute * 1);

let happy = false;
console.log("happy : ",happy);
console.log("happy / 1 : " ,happy / 1);

let sad = false;
console.log("sad : ",sad);
console.log("+sad : " ,+sad);

// string

let num = `    123   `;
console.log(`num : `, num);
console.log(`num * 1 : `, num * 1);

// numeric string
let width = `320px`;
console.log(`width : `, width);
console.log(`parseInt(width) : `, parseInt(width));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log("Boolean(null) : ",Boolean(null)); 
console.log("Boolean(undefined) : ",Boolean(undefined)); 
console.log("Boolean('') : ",Boolean('')); 
console.log("Boolean(0) : ",Boolean(0)); 
console.log("Boolean('0') : ",Boolean('0')); 
console.log("Boolean(' ') : ",Boolean(' ')); 

// Ok ?

"" + 1 + 0 => 10
"" - 1 + 0 => -1
true + false => 1
6 / "3" => 2
"2" * "3" => 6
4 + 5 + "px" => 9px
"$" + 4 + 5 => $45
"4" - 2 => 2
"4px" - 2 => NaN
7 / 0 => Infinity
"  -9  " + 5 =>  -9  5
"  -9  " - 5 => -14
null + 1 => 1
undefined + 1 => NaN
" \t \n" - 2 => -1