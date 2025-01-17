const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);

// 1. Concat Method
const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros);

// Spread Operator
const allNewHeros = [...marvel_heros, ...dc_heros];
//console.log(allNewHeros);

// New Example
console.log(Array.isArray("Muhammad"));
console.log(Array.from("Muhammad"));
console.log(Array.from({name: "Muhammad"}));

// Another New Example
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
