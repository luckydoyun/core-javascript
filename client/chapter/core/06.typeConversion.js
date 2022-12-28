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