// Singleton
// Object.create

// Object literals
const jsUser = {
    name: "Muhammad",
    "full name": "Muhammad Ali",
    age: 25,
    location: "islamabad",
    email: "ali@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// Show the output first method
console.log(jsUser.email);
// Show the output second method
console.log(jsUser["email"]);
// Show the fullname string
console.log(jsUser["full name"]);

// Change the email
jsUser.email = "ali@chatgpt.com";
//Object.freeze(jsUser);
jsUser.email = "ali@microsoft.com";
console.log(jsUser);

// Add functions
jsUser.greeting = function() {
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

// Reference to object name
jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greetingTwo());

