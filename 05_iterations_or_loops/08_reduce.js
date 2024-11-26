// ++++++++++ Reduce Method ++++++++++
// Use Function in Reduce Method
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
})
console.log(myTotal);

// Use Arrow Function in Reduce Method
const myNums2 = [1, 2, 3]

const myTotal2 = myNums2.reduce( (acc, curr) => acc+curr, 0 )
console.log(myTotal2);