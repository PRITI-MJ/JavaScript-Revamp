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

//iterating in values
for(let values in Object.values(user)){
    console.log(values);
}