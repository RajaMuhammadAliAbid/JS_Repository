function sayMyName() {
    console.log("M");
    console.log("U");
    console.log("H");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("A");
    console.log("D");
}
sayMyName();

// Second Program
function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}
addTwoNumber(3, 4);

// Third Program
function addAnotherTwoNumber(number1, number2) {
    return number1 + number2;
}
const result = addAnotherTwoNumber(3, 5);
console.log("Result", result);

// Fourth Program
function logUserMessage(username) {
    return `${username} just logged in`;
}
console.log(logUserMessage("Ali"));
