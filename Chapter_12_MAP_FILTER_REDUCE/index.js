// forEach, filter, reducer, map, set


//ForEach
const arr = [10,20,30,40,90];

//here number is compulsory, index and arr is optional
arr.forEach((number, index, arr) => {
    console.log(number, index, arr);
});
/*
10 0 [ 10, 20, 30, 40, 90 ]
20 1 [ 10, 20, 30, 40, 90 ]
30 2 [ 10, 20, 30, 40, 90 ]
40 3 [ 10, 20, 30, 40, 90 ]
90 4 [ 10, 20, 30, 40, 90 ]
*/


const arr1 = [10,20,30,40,50];
let sum = 0;

arr1.forEach((number) => {
    sum += number;
})

console.log(sum); //150



//Filter => It returns a new array
const arr2 = [10,20,30,5,90,87];

//true: select, false: not selected
const newArr = arr2.filter((number) => number > 25)
console.log(newArr); //[ 30, 90, 87 ]



//creating our own method for filtering
//this = [10,20,30,5,90,87];
//const compare = (number) => number>25;

arr2.filtering = function(compare) {
    const ans = [];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }

    return ans;
}

const newarr = arr2.filtering((num) => num>25);
console.log(newarr); //[ 30, 90, 87 ]
//But the issue is that we can only use this filtering method for this array only.
//For this we can create for all array

Array.prototype.filtering = function(compare) {
    const ans = [];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }

    return ans;
}

const a = [80,30,15,31,42,70];
const answer = a.filtering((num) => num%5 == 0);
console.log(answer); //[ 80, 30, 15, 70 ]




//Map
//It also returns result in new array
const arr3 = [10, 20, 30, 5, 90, 87];
const newArr1 = arr3.map((num) => num*2);
console.log(newArr1); //[ 20, 40, 60, 10, 180, 174 ]


//Real life example of map and filter
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

//If we want to select products which cost greater than 50
const newProduct = products.filter((product) => product.price > 50);
console.log(newProduct);
/*
[
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 1200,
    inStock: true
  },
  {
    id: 2,
    name: 'Headphones',
    category: 'Electronics',
    price: 200,
    inStock: true
  },
  {
    id: 3,
    name: 'Smartphone',
    category: 'Electronics',
    price: 800,
    inStock: false
  },
  {
    id: 4,
    name: 'Monitor',
    category: 'Electronics',
    price: 300,
    inStock: true
  },
  {
    id: 5,
    name: 'Keyboard',
    category: 'Electronics',
    price: 75,
    inStock: true
  },
  {
    id: 9,
    name: 'Coffee Maker',
    category: 'Appliances',
    price: 150,
    inStock: false
  },
  {
    id: 10,
    name: 'Blender',
    category: 'Appliances',
    price: 80,
    inStock: true
  },
  {
    id: 12,
    name: 'Microwave Oven',
    category: 'Appliances',
    price: 220,
    inStock: true
  },
  {
    id: 14,
    name: 'Jeans',
    category: 'Clothing',
    price: 60,
    inStock: false
  },
  {
    id: 15,
    name: 'Jacket',
    category: 'Clothing',
    price: 110,
    inStock: true
  }
]
*/

//Now I want this in sorted form in descending order of price
const newProd = newProduct.sort((a,b) => b.price-a.price);
console.log(newProd);


//if we want to only return product name and price
const ans = products.map((product) => ({name:product.name, price:product.price}))
console.log(ans);
/* 
[
  { name: 'Laptop', price: 1200 },
  { name: 'Headphones', price: 200 },
  { name: 'Smartphone', price: 800 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 75 },
  { name: 'The Hobbit', price: 25 },
  { name: 'A Brief History of Time', price: 30 },
  { name: 'Dune', price: 28 },
  { name: 'Coffee Maker', price: 150 },
  { name: 'Blender', price: 80 },
  { name: 'Toaster', price: 45 },
  { name: 'Microwave Oven', price: 220 },
  { name: 'T-Shirt', price: 20 },
  { name: 'Jeans', price: 60 },
  { name: 'Jacket', price: 110 },
  { name: 'Desk Lamp', price: 35 },
  { name: 'Scented Candle', price: 15 },
  { name: 'Picture Frame', price: 22 },
  { name: 'Organic Apples', price: 5 },
  { name: 'Artisan Bread', price: 8 }
]
*/

//creating Map in JS manually
Array.prototype.myMap = function(callback) {
  let temp = [];
  for(let i = 0; i < this.length; i++){
    temp.push(callback(this[i], i, this));
  }

  return temp;
}

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
})
console.log(multiplyThree); //[ 3, 6, 9, 12 ]



//Reduce function => It will iterate in the array and returns a value
//it has two parameters => accumulator, currentValue
//currentValue is the iterable value, accumulator is the calculated value(like sum)
const totalPrice = products.reduce((accumulator, currValue) => {
    if(currValue.inStock)
        return accumulator+currValue.price;
    else
        return accumulator;
},0);
console.log(totalPrice); //2368


//Data Structure : set
//Set is a list which contains only unique values

const arr4 = [10, 20, 30, 10, 25, 15, 10, 20]

const s1 = new Set(arr);
s1.add(11);
console.log(s1); //{ 10, 20, 30, 40, 90, 11 }

const s2 = new Set();
console.log(s2); //{}
 
console.log(s1.has(20)); //true
console.log(s1.has(23)); //false

s1.delete(10);
console.log(s1); //{ 20, 30, 40, 90, 11 }

console.log(s1.size); //5

s1.clear();
console.log(s1); //{}


//unique values in an array not in {}
const email = ["ro@gm", "ra@gm", "mo@gm", "ro@gm"];

const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail); //[ 'ro@gm', 'ra@gm', 'mo@gm' ]


//iterate in set
const s3 = new Set(email);

for(let num of s3){
  console.log(num);
}
/* 
ro@gm
ra@gm
mo@gm
*/

//Map as a data structure
const m1 = new Map([
  ["Rohit", 40],
  [2, "Rohit"],
  [true, 11],
  [[10,30,11], "Mohit"]
])

//adding values to m1
m1.set({name: "Manish", age: 20}, false);

console.log(m1);
/* 
{
  'Rohit' => 40,
  2 => 'Rohit',
  true => 11,
  [ 10, 30, 11 ] => 'Mohit',
  { name: 'Manish', age: 20 } => false
}
*/

//to know a value is present or not in map
console.log(m1.has("Rohit")); //true


//to get a value of any key
console.log(m1.get("Rohit")); //40

//to delete a key- value pair
m1.delete("Rohit");
console.log(m1);
/* 
{
  2 => 'Rohit',
  true => 11,
  [ 10, 30, 11 ] => 'Mohit',
  { name: 'Manish', age: 20 } => false
}
*/

//size of map
console.log(m1.size); //4


//iterate in set by destructuring
for(let [keys, value] of m1){
  console.log(keys, value)
}
/* 
2 Rohit
true 11
[ 10, 30, 11 ] Mohit
{ name: 'Manish', age: 20 } false
*/
  