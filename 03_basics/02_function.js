           // First Program
function calculateCartPrice(num1) {
    return num1;
}
console.log(calculateCartPrice(200, 400, 500));

// First Program If more than one value is to be printed(This Method Use),(... This is Rest operator Use)
function calculateCartPrice2(...num1) {
    return num1;
}
console.log(calculateCartPrice2(200, 400, 500));

// Second Program 
// Object Pass in function
const user = {
    username: "ali",
    price: 199,
}
function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

// Third Program
// Array Pass in Function
const myNewArray = [200, 400, 500, 600];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
