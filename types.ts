// let myString: string = "Hello World";
// myString = "Hello World";
// myString=1;
// let mybool: boolean;

// mybool=true;

function add<T>(value1: T, value2: T): void {
    // return value2
    console.log(value1)
    console.log(value2)
    // return value1 + value2
}
add<number>(15,20)
add<number>("Santanu","Paikaray")