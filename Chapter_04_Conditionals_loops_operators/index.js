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

//number -> string conversion
let m = 123;
let n = String(m);
console.log(typeof m); //number
console.log(typeof n); //string 

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number("")); // 0
console.log(Number("   ")); // 0 (only spaces)
console.log(Number("123abc")); // NaN
console.log(Number("abc123")); // NaN
console.log(Number(undefined)); // NaN


console.log(typeof String(true)); //string
console.log(typeof String(false)); //string
console.log(typeof String(null)); //string
console.log(typeof String(undefined)); //string     

console.log(Boolean(10)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-10)); //true
console.log(Boolean("hello")); //true
console.log(Boolean(""));   //false
console.log(Boolean(" ")); //true (space is also a character)
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false

//computer science challenge
let v = 0.1;
let w = 0.2;
let sum = v + w;
console.log(sum==0.3); //false

console.log(sum); //0.30000000000000004
//to solve this problem we use toFixed() method
console.log(sum.toFixed(2)); //0.30
console.log(Number(sum.toFixed(2))==0.3); //true


// 1:null is loosely equal to undefined only
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == 0); //false
console.log(null == ""); //false
console.log(null == false); //false
console.log(null == true); //false

// >,<,>=,<= (null -> number, undefined -> NAN)
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null <= 0); //true
console.log(null >= undefined); //false

console.log("Rohit" > "Mohit"); //true (R has greater ASCII value than M)
console.log("Rohit" > "mohit"); //false (R has less ASCII value than m)
console.log("Rohit" > "Rahit"); //true (o has greater ASCII value than a)

console.log(10 >= "10"); //true (string converted to number due to >= operator)
console.log(10<true); //false (true converted to 1 due to < operator)
//so, if anything of diff type is compared with <,>,<=,>= then JS converts them into number and then compare them.

console.log(NaN == NaN); //false because NaN is not equal to anything including itself.



//loops
//for loop
for(let i=1; i<=5; i++){
    console.log(i);
}

//while loop
let j = 1;
while(j<=5){
    console.log(j);
    j++;
}   


do{
    console.log(j);
    j++;
}while(j<=5);


//if else condition
let age = 18;
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}   


//logical operators
//&& (AND) || (OR) ! (NOT)

console.log(true && true); //true
console.log(true && false); //false     
console.log(false && true); //false
console.log(false && false); //false    

console.log(true || true); //true
console.log(true || false); //true     
console.log(false || true); //true
console.log(false || false); //false    


let a1 = "Rohit";
let a2 = "Mohit";
let a3 = a1 && a2; //if both are true then it returns the last true value
console.log(a3); //Mohit

let b1 = "Rohit";
let b2 = "";
let b3 = b1 && b2; //if any one is false then it returns the first false value
console.log(b3); //"" (empty string is false)

let c1 = "";
let c2 = "Mohit";   
let c3 = c1 && c2; //if any one is false then it returns the first false value
console.log(c3); //"" (empty string is false)

let d1 = 0;
let d2 = 20;
let d3 = d1 && d2; //if any one is false then it returns the first false value
console.log(d3); //0 (0 is false)

//&&: if first value is false, it will return the first value itself
// If first value is true, it will return the second value.


// || or

let f1 = 10;
let f2 = 30;
let f3 = f1 || f2; //if any one is true then it returns the first true value
console.log(f3); //10   



let g1 = 0; 
let g2 = 30;
let g3 = g1 || g2; //if any one is true then it returns the first true value
console.log(g3); //30

//||: if first value is true, it will return the first value itself
// If first value is false, it will return the second value.


//NOT operator !=
console.log(5!=4); //true
console.log(5!=5);  //false
console.log(5!=="5"); //true
console.log(5!="5"); //false

