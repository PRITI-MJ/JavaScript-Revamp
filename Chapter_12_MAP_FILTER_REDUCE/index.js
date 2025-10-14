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


