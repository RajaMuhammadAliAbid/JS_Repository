// ++++++++++ First Program ++++++++++
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptograph, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

// ++++++++++ Second Program ++++++++++
const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000);
});

promiseTwo.then(function(user) {
    console.log(user); 
});

// ++++++++++ Third Program ++++++++++
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "Ali", password: "123"});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

// ++++++++++ Fourth Program ++++++++++
// Try & Catch Method
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000);
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
 
    }
}