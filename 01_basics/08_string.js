                   // First Program
const name = "Ali";
const repoCount = 50;

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// console.log(name[0]);
// console.log(name.length);

                  // Second Program
const gameName = new String ("Ali");

console.log(gameName[0]);
console.log(gameName.length);

// String Methods/Functions
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('i'));

console.log(gameName.substring(0, 2));
console.log(gameName.slice(-2, 3));

const newStringOne = "    Muhammad    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://muhammad.com/ali%20website";
console.log(url.replace('%20', '-'));

const splictName = "Muhammad-Ali-Abid";
console.log(splictName.split('-'));
