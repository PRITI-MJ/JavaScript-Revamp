//Number
let a = 10;
console.log(a);
let b = 345.6821;
let c = b.toFixed(1);
console.log(c); //345.7 (toFixed has done the round off of that number till dec)
console.log(typeof c); //string
console.log(b); //345.6821 (it is not changing because in JS, primitive data types are immutable)


console.log(b.toPrecision(5)); //345.68 (it is rounding off the number till 5 digits)
console.log(typeof b.toPrecision(5)); //string

console.log(b.toString()); //345.6821 (number is converted into string)


//creating number in the form of object
let x = new Number(10);// creating number in the form of object
console.log(x); //[Number: 10]
console.log(typeof x); //object
let y = 20; //crating number in the form of primitive data type


let num1 = new Number(20);
let num2 = new Number(20);
console.log(num1 == num2); //false (because both are different objects in the memory)

let obj1 = {
    name: "Rohit"
}
let obj2 = {
    name: "Rohit"
}
console.log(obj1 == obj2); //false (because both are different objects in the memory)
let obj3 = obj1;
console.log(obj1 == obj3); //true (because both are pointing to the same object in the memory) => Pass by reference

let m = 10;
let n = m;
console.log(m == n); //true (because both are primitive data types and have same value) => Pass by value   
//but they are pointing to different memory locations

