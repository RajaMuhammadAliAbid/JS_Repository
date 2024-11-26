// ++++++++++ Filter Method ++++++++++
// First Method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);
// Second Method
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums2 = myNums2.filter( (num2) => {
    return num2 > 4;
})
console.log(newNums2);