//booleans are true/false values and help with control flow and logic
var hangry = true;
console.log(hangry);
//operators
//we use operators for comparisons
// == equals
// === strict equality "7" === 7;
// != inequality or does not equal
// !== strict inequality
// > greater than
// >= greater or equal;
// < less than
// <= less than or equal to
var num = 5 < 2;
console.log(num);
var newNum = 5 > 2;
console.log(newNum);
console.log(num == newNum);

var numberOne = 1;
var numberTwo = "2";

console.log(numberOne == numberTwo);
// all true statements
console.log(numberOne <= numberTwo);
console.log(numberTwo >= numberOne);
console.log(numberOne != numberTwo);
console.log(numberOne !== numberTwo);
//all false
console.log(numberTwo <= numberOne);
console.log(numberOne >= numberTwo);
console.log(2 != 2);
console.log(2 !== 2);

var thing = "12345"
console.log(thing === parseInt(thing))