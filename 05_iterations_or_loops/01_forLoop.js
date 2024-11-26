// ++++++++++ For Loop ++++++++++
// First Program
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
      //  console.log("5 is the best number");
    }
  //  console.log(element);
}

// Second Program
// Nested Loop
for (let i = 0; i <= 10; i++) {
  //  console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(`inner loop value ${j} and inner loop ${i}`);
    }
}

// Third Program
// Print the table 1 to 10 one time
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);

    }
}

// Fourth Program
// Pass the array inside the for loop
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

                // ++++++++++ Break and Continue ++++++++++
// Break
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${i}`);
  
}

// Continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
  
}