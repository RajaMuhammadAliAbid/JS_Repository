                   // First Program
let a = 10;
const b = 20;
var c= 30;

console.log(a);
console.log(b);
console.log(c);

// Change the first program
let x = 300;

if (true) {
    let x = 10;
    const y = 20;
    console.log("inner:", x);
    
}
console.log(x); 

                 // Second Program
// Nested Scope (use by function)
function one() {
    const username = "ali";

    function two() {
        const website = "youtube";
        console.log(username);
    }
   // console.log(website);
    two();
}

               // Third Program
// Nested Scope (use in if statement)
if (true) {
    const username = "ali";
    if (username === "ali") {
        const website = "youtube";
        console.log(username + website);
    }
   // console.log(website);
}
// console.log(username);

// ++++++++++ Interesting Example ++++++++++
// First Example
function addone(num) {
    return num + 1;
}
console.log(addone(5));
// First Example Another Method
const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(5));

