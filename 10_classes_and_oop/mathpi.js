const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

const chai = {
    name: 'tea',
    price: 250,
    isAvailable: true,
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


