//How to create Variables?

let name = "Rohit";
let age = 20;
age = 30;

console.log(name, age);


const account = 1234;
// account = 23; // This will give error because we cannot change the value of constant variable

console.log(account);
// It means we cannot change the value of constant variable but we can chnange the value to let variable


var a = 20;
var a = 30; // This is valid in var but not in let and const
console.log(a);

if(true){
    var b = 40;
}

console.log(b); // This is valid in var but not in let and const because var is functional scoped and let and const are block scoped

//Data Types in JavaScript

//Primitive Data Types
//Number
let k = 10; // Integer
let l = 10.5; // Float
console.log(k, l); //here we don't have to define interger and float value unlike c++, or java.

//String
let c = "Strike is coming";
let d = 'Priti';
console.log(c, d); 
// so here we can use both double quotes and single quotes to define string


//Boolean
let login = true;
let f = false;
console.log(login, f); // true false

//Undefined
let user; // if we don't assign any value to variable then it will be undefined
console.log(user); // undefined

//const p; // This will give error because we have to assign value to constant variable at the time of declaration
//(we cannot leave it undefined)


//Bigint(if we want to store a very big number which is greater than 2^53-1(8 bytes), we can't store it in integer or float, then we can use bigint)
let num = 12345676847490347n;
console.log(num); // 12345676847490347n


//Null (Here, intentionally we put the value as null)
//let weather = current_weather("Dwarka");
//console.log(weather); 
// 25 (exists and we know the value)
// null (exists but we don't know the value, it is empty)
// undefined (doesn't exist)

//Symbol (it is used to create unique identifiers for objects)
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(id1 === id2); // false (because both are unique)


//Non-Primitive Data Types
//Array
let arr = [10, 20, 11, "Rohit", true];
console.log(arr); // [ 10, 20, 11, 'Rohit', true ]
// Here we can store multiple values of different data types in an array like string, numbers, boolean etc.


// Rohit 12312 18 gen (no meanings)
//Object (to define this above data in a meaningful way we use object)
// Object is represented as key-value pairs
let user1 = {
    name: "Rohit",
    account: 12312,
    age: 18,
    category: "gen"
}


//Function (it is a block of code which performs a specific task)
function add(){
    console.log("Hello");
}

add(); // Hello 

//Here in javascript we can also store function in a variable
let s = function sub(){
    console.log("Hello from sub function");
}

console.log(s); // [Function: sub]
s(); // Hello from sub function


//Primitive data types are immutable
//Proving that primitive data types are immmutable.
let str = "Rohit";
console.log(str[0]); //R

str[0] = "M";
console.log(str); //Rohit
// Here R has not changed to M as it is immutable.


let g = 10;
let h = g;

h = 20;
console.log(g, h); // 10 20
//here it is different because g and h are pointing to different location due to its immutability
//here g's value is copied to h's location. g's location value remain unchanged.



//Non-primitive data types are mutable(can be changed)
//Prove:-
let arr1 = [10,20,30,40];
arr1.push(90);
arr1[0] = 70;
console.log(arr1); //[ 70, 20, 30, 40, 90 ]

let obj = {
    name: "Mohan",
    age: 20
}
console.log(obj.name); //Mohan
obj.name = "Rohan";
console.log(obj); //{ name: 'Rohan', age: 20 }

let obj2 = obj;
obj2.age = 30;
console.log(obj);



