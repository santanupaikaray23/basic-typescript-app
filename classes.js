var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User created :' + this.name);
    }
    return User;
}());
var User = new User('Santanu', 'santanupaikaray@com', 38);
console.log(User);
