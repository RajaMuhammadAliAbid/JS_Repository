             // ++++++++++ While Loop ++++++++++
// First Program
let i = 0;
while (i <= 10) {
    console.log(`Value of i is ${i}`);
    i++;
}
// Second Program
let j =0;
while (j <= 10) {
    console.log(`Value of j is ${j}`);
    j = j + 2;
}

// Third Program
// Pass Array inside the While Loop
let myArray = ["flash", "batman", "superman"]

let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}

// ++++++++++ do while loop ++++++++++
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);