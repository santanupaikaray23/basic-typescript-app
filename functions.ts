function getSum(num1, num2){
    return num1 + num2;

}
console.log(getSum(1,2))

function getSum(num1:number,num2:number):number{
    return num1 + num2
}
console.log(getSum(1,2))
console.log(getSum("Santanu",2))

let mySum = function(num1, num2){
    return num1 + num2
}
console.log(mySum("Santanu",10));

let myAddition = function(num1:number, num2:any){
    return num1 + num2
}
console.log(myAddition(5,"Lucky"))

function myVoid():void{
    return 1
}
console.log(myVoid())

function myVoid():void{
    console.log('This is void function')
}
console.log(myVoid())