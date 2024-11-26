                 // +++++++++++++++ Numbers +++++++++++++++
// 1. First Program
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Numbers Method / Function
// To Convert String Method
console.log(balance.toString().length);
// Fixed Method
console.log(balance.toFixed(2));
// Precision Mehtod
const otherNumber = 123.8765;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(4));
// To Convert LocaleString
const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


                 // +++++++++++++++ Maths +++++++++++++++
console.log(Math);
// Negative value convert to Positive
console.log(Math.abs(-4));
// Round About
console.log(Math.round(4.2));
// Ceil
console.log(Math.ceil(4.3));
// Floor
console.log(Math.floor(4.9));
// Show the minimum value in the output
console.log(Math.min(4, 3, 6, 8));
// Show the maximum value in the output
console.log(Math.max(4, 3, 6, 8));

// Math Random
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

// Find Number between 10 to 20
const min =10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
