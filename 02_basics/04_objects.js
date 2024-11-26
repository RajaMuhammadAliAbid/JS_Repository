// Singleton Object create
       // First Program
const tinderUser = {}

tinderUser.id = 123;
tinderUser.anotherId = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


console.log(tinderUser);
// Object Method/Function
// 1. Extract the keys
console.log(Object.keys(tinderUser));
// 2. Extract the values
console.log(Object.values(tinderUser));
// 3. Entries
console.log(Object.entries(tinderUser));
// 4. Check the Properties avilable or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



          // Second Program
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "muhammad",
            lastname: "ali",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

         // Third Program
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// Output First Method
const obj3 = {obj1, obj2};
console.log(obj3);
// Show Output Second Method
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
// Spread Operator
const obj5 = {...obj1, ...obj2};
console.log(obj5);

