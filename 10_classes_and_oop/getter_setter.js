// ++++++++++ Getter And Setter ++++++++++

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Get Email
    get email() {
        return this._email.toUpperCase();
    }
    // Set Password
    set email(value) {
        this._email = value.toUpperCase();
    }

    // Get Password
    get password() {
        return this._password.toUpperCase();
    }
    // Set Password
    set password(value) {
        this._password = value.toUpperCase();
    }
}

// OutPut
const result = new User("ali@.gmail.com", "ABC");
console.log(result.password);
console.log(result.email);


