//Scope and Closure, HOF

//Global Scope => anyone can access it within this code
let a = 10;
let b = 20;

console.log(a);

//here we can access a and b within the block level scope and functional scope, 
// because a and b are declare within the global scope

//Block level scope
if(true){
    let d = 10;
    console.log(b);
}
//console.log(d);
//It will throw error because it can only be accessed within the block only


//Functional Scope
function greet(){
    console.log(a);
    let c = 30;
}

//console.log(c);
//It will throw error because c is declared within the functional scope
//so it can only be accessed within the functional scope only
//All this are applied only for Let and const




//Var => It is accessible outside if it is declared in global scope or Block level Scope
//But it is not accesible outside the functional scope

var e = 10;
var f = 20;

console.log(e);

//here we can access e and f within the block level scope and functional scope, 
// because e and f are declare within the global scope

//Block level scope
if(true){
    var d = 10;
    console.log(e);
}
console.log(d);//10


//Functional Scope
function greet(){
    console.log(a);
    var c = 30;
}
//console.log(c); => Error


let global = 30;

function greet(){

    let global = 40;
    //let global = 10; => Not valid(two global variable declared in a particular scope)
    console.log(global); //40


    function meet(){
        //let global = 10; =>Valid(it is declared not in same scope)
        console.log(global); //40
    }

    meet();
}

greet();
console.log(global) //30


function createCounter(){
    function increment(){
        console.log("I am increment function");
    }


    increment();
}

createCounter(); //I am increment function



function createCounter2(){
    function increment(){
        console.log("I am increment function");
    }
    return increment;
    //here we are returning the function 
}
const count = createCounter2();
console.log(count); //[Function: increment]



function createCounter3(){
    function increment(){
        console.log("I am increment function");
    }
    return increment();
   
}
const count1 = createCounter3();
console.log(count1);
//I am increment function
//undefined(increment function is not returning anything)


function createCounter4(){
    function increment(){
        console.log("I am increment function");
        return 20;
    }
    return increment();
   
}
const count2 = createCounter4();
console.log(count2);
//I am increment function
//20


function createCounter5(){
    function increment(){
        console.log("I am increment function");
    }
    return increment;
   
}
const count3 = createCounter5(); 
//here we are storing the reference of the increment function, now we can call it
count3(); //I am increment function
//If we have reference of any function, we can execute it by calling the variable in which we are storing the reference of that function






