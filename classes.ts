class User {
    name: String
    email: String
    age: number

    constructor(name:string, email:string, age:number){
        this.name=name;
        this.email=email;
        this.age=age;
        console.log('User created :' + this.name)
    }

}

let User = new User('Santanu','santanupaikaray@com',38)
console.log(User)