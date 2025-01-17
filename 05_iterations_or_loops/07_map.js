// ++++++++++ Map Method ++++++++++
// First Program
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);

// Chaining Method
const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNumbers2
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums2);