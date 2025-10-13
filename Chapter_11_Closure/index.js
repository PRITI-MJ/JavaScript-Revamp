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


function createCounterr(){

    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment;
}



const counter = createCounterr();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

//Here it is working because when when counter variable pointing to the reference of increment function which is stored in heap
//(as createCounter is returning the increment function)
//then, that increment function code analyzes that it will need the count variable which is the part of createCounterr function
//But once the function get executed, the count variable will get deleted, as it is present in heap
// So javascript will move that count variable along with its value in heap from stack
// This is the concept of closure.
//Closure means a function which remembers the variables of its outer scope even the outer scope function has finished executing




// let balance = 500;

// balance+="Rohit";
// balance-= 500;
// console.log(balance); //NaN
//Here it is happening because balance is accessed openly by anyone in the code



let user = {
    balance: 500,

    deposit: function(amount){
        if(typeof amount === "number" && amount > 0)
        {
            this.balance += amount;
            return this.balance;
        }
    },

    
    withdraw: function(amount){
        if(typeof amount === "number" && amount > 0 && this.balance >= amount)
        {
            this.balance -= amount;
            return this.balance;
        }
    },

    getBalance: function(){
        return this.balance;
    }
}

// console.log(user.deposit(500)); //1000
// console.log(user.withdraw(200)); //800

//But we can still change the value of balance by accesing it directly
user.balance = "Rohit";
console.log(user.getBalance()); //Rohit



//If we want to access only the method but not balance
//For this we can create a function and assign the variable over there
//and then write the user object which can access and remembers the outer scope variable(closure property)
//we can make the variable as object

function createBankAccount(){
    let balance = 500;

    let user = {

        deposit: function(amount){
            if(typeof amount === "number" && amount > 0)
            {
                balance += amount;
                return balance;
            }
        },

        
        withdraw: function(amount){
            if(typeof amount === "number" && amount > 0 && balance >= amount)
            {
                balance -= amount;
                return balance;
            }
        },

        getBalance: function(){
            return balance;
        }
}

return user;

}

//balance += "Rohit"; => Here it will throw error as balance is not accessible from the function
const customer = createBankAccount();
console.log(customer.deposit(200));
console.log(customer.withdraw(100));
console.log(customer.getBalance());



//Higher order function => A function which returns its inner function

function double(value){

    function execute(num) {
        return num*value;
    }
    return execute;
}

const n = double(20);
console.log(n(5)); //100


//we can also call like this way
//const n = double(20)(5);
//console.log(n);
