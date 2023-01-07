function bar() {
  console.log( "bar..." );
  a = 5;
}

console.log( bar.a );   // 5
bar.prototype.a = 4;


console.log( bar.a );  // 5
console.log( bar.prototype.a ) // 4

var obj = new bar();   // bar...

console.log( obj.a );  // 4
bar.prototype.a = 4;
console.log( bar.a );  // 5
//이부분 .. 왜 5가나와요 밑에서는 왜 4나오고.. 차이가뭐죠 ??
bar.prototype.a = 4;
console.log( bar.a );  // 5

var obj = new bar();   // bar...
console.log( obj.a );  // 4

