                // 1. Primitives Data Types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
const score = 100;
const scroe = 100.3;
// Boolean
const isLoggedIn = false;
// null
const outSideTemp = null;
// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);
// BigInt
const bigNumber = 3456667889886667777n;

                   // 2. Non Primitive
// Array, Objects, Functions

// Array
const countries = ["pakistan", "usa", "australia", "germany"];
// Objects
let myObj = {
    name: "Muhammad Ali",
    age: 25,
}
//Functions
const myFunction = function() {
    console.log("Hello World");
    
}