//Object
//Key value
const user = {
    name: "Rohit",
    "age": 20,
    emailId: "negi@gmail.com",
    amount: 3400,
    "home address": "dwarka"
}

console.log(user); 
// { name: 'Rohit', age: 20, emailId: 'negi@gmail.com', amount: 3400 }

console.log(typeof user); //object
console.log(user.age); //20

//CRUD operation :- Create Read Update Delete

//If we want to update a adhaar into the user
user.adhar = 1234;
//if we want to update a new value to a existing value
user.amount = 5000;
console.log(user);
/* {
  name: 'Rohit',
  age: 20,
  emailId: 'negi@gmail.com',
  amount: 5000,
  adhar: 1234
} */

// deleting a value from the user
delete user.emailId;
console.log(user); //{ name: 'Rohit', age: 20, amount: 5000, adhar: 1234 }
console.log(user["age"]); //20
console.log(user["name"]); //Rohit
console.log(user["home address"]); //dwarka
//Behind the scene, all the keys and values are stored as a string


const user2 = user;
user2.age = 90;
console.log(user);
/* {
  name: 'Rohit',
  age: 90,
  amount: 5000,
  'home address': 'dwarka',
  adhar: 1234
} */

//here they are stored in the form of array and returns it
console.log(Object.keys(user)); //[ 'name', 'age', 'amount', 'home address', 'adhar' ]
console.log(Object.values(user)); //[ 'Rohit', 90, 5000, 'dwarka', 1234 ]
console.log(Object.entries(user)); 
/* [
  [ 'name', 'Rohit' ],
  [ 'age', 90 ],
  [ 'amount', 5000 ],
  [ 'home address', 'dwarka' ],
  [ 'adhar', 1234 ]
] */


  //Iterate in objects
  //for in loop
  for(let keys in user){
    console.log(keys, user[keys]); //printing the keys and its values
  }
/*
name Rohit
age 90
amount 5000
home address dwarka
adhar 1234 
*/


//if we want to extract two values from user
// Normal way
// const name = user.name;
// const age = user.age;

//Alternative way:- Destructuring of object
const {name,age} = user;
console.log(name, age); //Rohit 90


//assigning some differnent names to names and age(keys)
const {name:userName, age:userAge} = user;
console.log(userName, userAge); //Rohit 90



//for-of loop
//Iterating in keys
for(let keys of Object.keys(user)){
    console.log(keys);
}
/*name
age
amount
home address
adhar */

const user3 = user;
//iterating in values
for(let values of Object.values(user3)){
    console.log(values);
}
/* Rohit
90
5000
dwarka
1234
*/

// if we want to keys and values together, we can use Object.entries
console.log(Object.entries(user));
/*[
    [ 'name', 'Rohit' ],
    [ 'age', 90 ],
    [ 'amount', 5000 ],
    [ 'home address', 'dwarka' ],
    [ 'adhar', 1234 ]
] */


// we can print the keys and values separately
for(let [keys, values] of Object.entries(user)){
  console.log(keys, values);
  /*
name Rohit
age 90
amount 5000
home address dwarka
adhar 1234 
*/
}


//we can also write function inside objects
const user4 = {
  name: "Rohit",
  age: 20,
  emailId: "negi@gmail.com",
  amount: 3400,
  greeting: function(){
    console.log(`Strike is coming on 18 october ${user4.name}`);
    return 20;
  }
}

const val = user4.greeting(); //Strike is coming on 18 october Rohit
console.log(val); //20


const user5 = {
  name: "Mohan",
  account: 201,
}

user5.greeting = user4.greeting;

user5.greeting(); //Strike is coming on 18 october Rohit
// so as we hardcoded with user4.name, it is taking the name from the user4, and not updating it with user5.name
//for fixing this issue, we use this keyword



const user6 = {
  name: "Rohit",
  age: 20,
  emailId: "negi@gmail.com",
  amount: 3400,
  greeting: function(){
    //here this keyword refers to the object which is being called
    console.log(`Strike is coming on 18 october ${this.name}`);
    return 20;
  }
}

const val1 = user6.greeting(); //Strike is coming on 18 october Rohit
console.log(val1); //20


const user7 = {
  name: "Mohan",
  account: 201,
}

user7.greeting = user6.greeting; 

user7.greeting(); //Strike is coming on 18 october Mohan



//Nested Object
const user9 = {
  name: "Rohit",
  age: 20,
  emailId: "negi@gmail.com",
  amount: 3400,
  address: {
    city: "kotdwar",
    state: "Uttarkhand"
  }
}

console.log(user9.address.city); //kotdwar

//as we know object is copied by using copy by reference
//if we want to do copy by value, we use spread operator
// But here only at one level it will do independent copies
// It will not work for nested objects (Shallow copy)
const user8 = {...user9};
user8.name = "Priti";
user8.address.city = "Dhanbad"
console.log(user9);

/*{
  name: 'Rohit',
  age: 20,
  emailId: 'negi@gmail.com',
  amount: 3400,
  address: { city: 'dhanbad', state: 'Uttarkhand' }
} */


console.log(user8);
/*{
  name: 'Priti',
  age: 20,
  emailId: 'negi@gmail.com',
  amount: 3400,
  address: { city: 'Dhanbad', state: 'Uttarkhand' }
} */



//Deep copy
const user10 = structuredClone(user9)
user10.name = "Priti";
user10.address.state = "Jharkhand";
console.log(user9);
/* {
  name: 'Rohit',
  age: 20,
  emailId: 'negi@gmail.com',
  amount: 3400,
  address: { city: 'Dhanbad', state: 'Uttarkhand' }
}*/
console.log(user10);
/*{
  name: 'Priti',
  age: 20,
  emailId: 'negi@gmail.com',
  amount: 3400,
  address: { city: 'Dhanbad', state: 'Jharkhand' }
} */


//We can also assign values to keys as number, as behind the scene JS store the keys and values in the form of strings
const user11 = {
  name: "Rohit",
  age: 20,
  0: 100,
  2: "Mohan"
}

//we can access it either of these, we can't able to use user.0
console.log(user[0]);
//console.log(user["0"]);


//using symbol in objects
const sym = Symbol("id");

const user12 = {
  name: "Rohit",
  age: 20,
  0: 100,
  2: "Mohan",
  [sym]: "Hello Ji"
}


console.log(user12[sym]); //Hello Ji