// ++++++++++++++++++++ Memory in JavaScript ++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

// 1. Stack Memory (Primitive)
let myName = "Muhammad Ali";

let anotherName =myName;
anotherName = "muhammad ali abid";

console.log(myName);
console.log(anotherName);

// 2. Heap Memory (Non-Primitive)
let userOne = {
    email: "user@google.com",
}

let userTwo = userOne;
userTwo.email = "user@gmail.com";

console.log(userOne);
console.log(userTwo);

