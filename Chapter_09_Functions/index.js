//Functions

function greeting(){
    console.log("Hello Coder Army, strike is on 18th October, 2025")
}

greeting(); //Hello Coder Army, strike is on 18th October, 2025

function addNumber(num1, num2) {
    const sum = num1+num2;
    console.log(sum);
}

addNumber(3,4); //7
addNumber(6,7); //13

console.log(greeting());
//Hello Coder Army, strike is on 18th October, 2025
//undefined
//it is returning undefined because we havn't returned anything


function greeting1(){
    console.log("Hello Coder Army, strike is on 18th October, 2025")
    return 10;
}

console.log(greeting1());
//Hello Coder Army, strike is on 18th October, 2025
//10

addNumber(6,7,8); //13
//it will take 6, 7 as input and returns 13, it does not count 8 as there are only two parameters 
addNumber(6,7,9,8); //13
//it also doesnot count 9 and 8, because the function taking only 2 arguments


//But if we want to  all the 4 elements, 3 elements or 2 elements, we can initialize that parameter as optional by initializing it with 0
//If the arguments are present, it will add them up, if not then it will add 0.
addNumber1(6,7); //13
addNumber1(6,7,8); //21
addNumber1(6,7,9,8); //30
 
function addNumber1(num1, num2, num3=0, num4=0) {
    const sum = num1+num2+num3+num4;
    console.log(sum);
}
//here we can see that we can call this before initialization




//If we want to add a large value of numbers of different range, we need to initialize as 0, which will take a lot of time
//To fix this, we use rest operator

//rest operator
//...num change the argument into arrays
function addNumber3(...num) {
    let sum = 0;
    for(let n of num){
        sum += n;
    }
    console.log(sum);
}

addNumber3(6,7); //13
addNumber3(6,7,8); //21
addNumber3(6,7,9,8); //30


const arr = [10,20,30,40,50];
const arr2 = [30,70,90,10];

//use of spread operator
const ans = [...arr, ...arr2];
console.log(ans);
/*[
  10, 20, 30, 40, 50,
  30, 70, 90, 10
]*/


//use of rest operator
const [first, second, ...num] = arr;
console.log(first, second, num); //10 20 [ 30, 40, 50 ]



//function: expression
const addNum = function(num1, num2){
    return num1+num2;
}

console.log(addNum(3,4)); //7
//here we can't able to call it before intialization
//but in "function abc(a,b)", we can able to call before intialization




//arrow fnction
//() =>{}
const addNum1 = (num1, num2) => {
    return num1+num2;
}
//const addNum1 = (num1,num2) => num1+num2;
console.log(addNum1(3,4)); //7

//if we have single parameter, no need of this ()
const squareNumber = num => num*num;

console.log(squareNumber(6));//36



//arrow function in objects
// const user = () => {
//     return {
//         name: "Rohit",
//         age:20
//     }
// }


//here we are using parenthesis surrounding the {}
//it is because when we write key value inside that curly braces, arrow function behaves like the {} as a part of function and expect return word inside that {} 
//to fix this issue we are using parethesis so that it doesnot get confused
const user = () => ({name:Rohit, age:20})



//IIFE => Immediately invoked function
