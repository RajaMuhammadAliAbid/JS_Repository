// First Program
const isUserloggedIn = true;
const temperature = 50;

if (temperature === 40) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than 50");
}
// Second Program
const score = 200;
if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

// Third Program
const balance = 1000;

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// Fourth Program
const userLoggedIn = true;
const debitcard = true;

if (userLoggedIn && debitcard) {
    console.log("Allow th buy course");
}
// 2nd Part
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}