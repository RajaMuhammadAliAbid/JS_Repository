// Nullish Coalescing Operator (??): null undefined

// Example 01
let val1;
val1 = 5 ?? 10;
console.log(val1);
// Example 02
let val2;
val2 = null ?? 10;
console.log(val2);
// Example 03
let val3;
val3 = undefined ?? 15;
console.log(val3);
// Example 04
let val4;
val4 = null ?? 10 ?? 20;
console.log(val4);

// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
