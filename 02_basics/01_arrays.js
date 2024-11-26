                     // ++++++++++ Array ++++++++++
// Number in Array
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr);
// Array Indices
console.log(myArr[1]);

// 2. String in Array
const countries = ["Pakistan", "USA", "Dubai", "Germany"];
console.log(countries);
// Array Indices
console.log(countries[1]);

               // Array Method/Function
// 1. Push
myArr.push(6);
myArr.push(7);
console.log(myArr);
// 2. Pop
myArr.pop();
console.log(myArr);

// 3. Unshift
myArr.unshift(9);
console.log(myArr);
// 4. Shift
myArr.shift();
console.log(myArr);

// 5. Slice: Do not Change Original Array
const mySliceArr = [0, 1, 2, 3, 4, 5];
console.log("A", mySliceArr);
const myNewSliceArr1 = mySliceArr.slice(1, 4);
console.log(myNewSliceArr1);

// 6. Splice: Change Original Array (add, remove, replace)
console.log("B", mySliceArr);
const myNewSliceArr2 = mySliceArr.splice(1, 4);
console.log(myNewSliceArr2);


console.log("C", mySliceArr);
