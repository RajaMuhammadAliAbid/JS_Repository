let myName = "ali";
let mychannel = "chai";

console.log(myName.trueLength);

// Second Program
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ali = function() {
    console.log(`ali is present in all objects`);
}
heroPower.ali();
