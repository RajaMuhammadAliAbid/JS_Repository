                       // ++++++++++ Dates ++++++++++
let myDates = new Date();
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
// Check the data type of date.
console.log(typeof myDates);
// Create a date on your own
let myCreateDate = new Date(2024, 10, 15);
console.log(myCreateDate.toDateString());

// Time Stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
// Time Stamp Convert To Second
console.log(Math.floor(Date.now()/1000));

