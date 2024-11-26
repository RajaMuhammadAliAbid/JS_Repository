           // First Program
const user = {
    username: "ali",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// console.log(this);

// Second Program Function Method
const chai = function () {
    let username = "ali";
    console.log(this.username);
}
chai();
// Second Program Arrow Function Method
const chai2 = () => {
    let username2 = "ali";
    console.log(this.username);
}
chai2();

// ++++++++++ Arrow Function ++++++++++
// First Example
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));

// First Example 2nd Method
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(3, 4));

// First Example 3rd Method
const addTwo3 = (num1, num2) => (num1 + num2)
console.log(addTwo3(3, 4));
