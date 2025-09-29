//Operator
//Arithmetic Operators

console.log(2+5); //Addition
console.log(5-2); //Subtraction
console.log(2*5); //Multiplication
console.log(5/2); //Division                
console.log(5%2); //Modulus
console.log(5**2); //Exponentiation (5*5*5)

//Assignment Operators
let x = 5; //Assignment
x += 2; //Addition assignment (x = x + 2)           
x -= 2; //Subtraction assignment (x = x - 2)
x *= 2; //Multiplication assignment (x = x * 2) 
x /= 2; //Division assignment (x = x / 2)
x %= 2; //Modulus assignment (x = x % 2)
x **= 2; //Exponentiation assignment (x = x ** 2)
console.log(x);

//Comparison Operators
let a = 20;
let b = 10;
console.log(a == b); //Equal to
console.log(a != b); //Not equal to             
console.log(a === b); //Strict equal to
console.log(a !== b); //Strict not equal to
console.log(a > b); //Greater than      
console.log(a < b); //Less than
console.log(a >= b); //Greater than or equal to
console.log(a <= b); //Less than or equal to

let k = 20;
let l = '20';
console.log(k == l); //true (value comparison)
console.log(k === l); //false (value and type comparison)

//number and string comparison
let z = "120";
let y = Number(z); //convert string to number
console.log(typeof z);  //string
console.log(typeof y);  //number

let p = "121ac";
let q = Number(p); //NaN (Not a Number)
console.log(typeof p);  //string
console.log(typeof q);  //number
console.log(q); //NaN
console.log(0/0); //NaN
console.log(typeof NaN); //number




