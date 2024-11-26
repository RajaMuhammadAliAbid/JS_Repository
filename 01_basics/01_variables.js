const accountId = 123456;
let accountEmail = "google.@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2; // not allowed

accountEmail = "youtube.@gmail.com";
accountPassword = "98765";
accountCity = "Dehli";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*  Note:
    Prefer not to use var
    because of issue in block scope and functional scope
*/         
