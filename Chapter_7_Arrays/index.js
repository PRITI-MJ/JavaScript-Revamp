//Array

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

//instead of storing it indivually, we can store it in array
let marks = [100, 50, 70, 80, 90]
console.log(marks); //[ 100, 50, 70, 80, 90 ]
console.log(marks.length); //5

//In javascript, we can store heterogenous type of data unlike c++, java.
let arr = [100, 30, "Rohit", true]
console.log(arr); //[ 100, 30, 'Rohit', true ]

console.log(arr[2]); //Rohit
console.log(typeof arr); //object

arr[1] = 90;
console.log(arr); //[ 100, 90, 'Rohit', true ]


//push operation
arr.push(90);
arr.push("strike");
console.log(arr); //[ 100, 90, 'Rohit', true, 90, 'strike' ]       
//here in array we can change the element and put extra element in array, remove element from array as it is mutable


//pop operation: Delete element from end
arr.pop()
console.log(arr); //[ 100, 90, 'Rohit', true, 90 ]


//Adding element at the start
arr.unshift(10);
arr.unshift(50);
console.log(arr); //[50, 10, 100, 90, 'Rohit', true, 90 ]


//deleting element from the start
arr.shift();
console.log(arr); //[ 10, 100, 90, 'Rohit', true, 90 ]


let arr1 = [10,20,30,40,50];
//Iterate in array
//for loop
for(let i = 0; i < arr.length; i++){
    console.log(i);
}

//for of loop
for(let num of arr){
    console.log(num);
}


let arr2 = arr1;
arr2.push(70); 
//It will change both arr1 and arr2, because both are pointing to same reference
console.log(arr1); //[ 10, 20, 30, 40, 50, 70 ]


//Object(Non-primitive): Copy by reference
//Primitive: Copy by value 

const arr3 = [10,20,30,40]
//arr3 = [80,90,60]; (It is not possible because const value address can't be changed)
//when we are assigning a whole array into arr3, the address changes
//But when we push or pop in the array, it makes changes in the same array, so it is possible


const arr4 = [10,30,50,80,11];
const arr5 = arr4.slice(2,4); //2nd idex is included, but 4th index is not included
console.log(arr5); //[ 50, 80 ]
console.log(arr4); //[ 10, 30, 50, 80, 11 ]
//so slice doesn't make changes in the original array


//But if we want to make changes in the original array
const arr6 = [10,30,50,80,11];
const arr7 = arr6.splice(1,3, "Rohit", 19); //1st index is included, 3 is the number of element
console.log(arr6); //[ 10, "Rohit", 19, 11 ] (here in arr6, 30, 40 and 50 are cut down and "Rohit" and 19 will get added to arr6 in place of 30, 50, 80)
console.log(arr7); //[ 30, 50, 80 ]



const array1 = [10,30,50,90,11];
const array2 = ["Rohit", 11, true];
const array4 = [90,4,false];

// array1.push(array2);
// console.log(array1); 
//[ 10, 30, 50, 90, 11, [ 'Rohit', 11, true ] ]


//in concat and spread operator, it store the changes in array
const array3 = array1.concat(array2, array4);
console.log(array3);
/* [
  10, 30,    50,
  90, 11,    'Rohit',
  11, true,  90,
  4,  false
]*/


const array5 = [array1, array2, array4];
console.log(array5);
// [ [ 10, 30, 50, 90, 11 ], [ 'Rohit', 11, true ], [ 90, 4, false ] ]
// here the whole array is getting inside than a newer array


//but if we want to add array element individually, we use spread operator
//spread operator
const array6 = [...array1,...array2,...array4];
console.log(array6);
/* [
  10, 30,    50,
  90, 11,    'Rohit',
  11, true,  90,
  4,  false
]*/


//converting array into string
const names = ["Alice", "Bob", "Charlie"];
console.log(names.toString()); //Alice,Bob,Charlie
console.log(typeof names.toString()); //string

//If we want to join the string with a spefic element in the array, we use join
// this can't be done with toString()
console.log(names.join("--")); //Alice--Bob--Charlie


const names2 = ["Alice", "Bob", "Charlie", "Bob"];
console.log(names2.indexOf("Bob")); //1 (it returns the index 1st time it appears in the array)
console.log(names2.lastIndexOf("Bob")) //3 (it returns the index last time it appears in the array)
console.log(names2.includes("Bob")); //true
console.log(names2.includes("priti"));//false



//sorting of array
const names3 = ["Alice","Mohit", "Rohit","bob","Bob", "Charlie"];
names3.sort(); //sorting in ascending order
console.log(names3); //[ 'Alice', 'Bob', 'Charlie', 'Mohit', 'Rohit', 'bob' ] 
//here sorting is done on the basis of ascii table

names3.reverse();
console.log(names3); //[ 'bob', 'Rohit', 'Mohit', 'Charlie', 'Bob', 'Alice' ]


const a = [101,32,50,80,90];
a.sort();
console.log(a); //[ 101, 32, 50, 80, 90 ]
//here javascript is treating this number as character by character like in string
// as 1 is less than 3, 101 is coming first, and then 32


const b = [10, "rohit", "wandy", true];
b.sort();
console.log(b); //[ 10, 'rohit', true, 'wandy' ]
//It is considering all as string



const arr9 = [10,40,31,71,5,11];
arr9.sort((a,b) => a-b);
//ascending order
//+ve means a will come first, then b
//-ve means b will come first, then a


arr9.sort((a,b) => b-a);
//descending order
//+ve means b will come first, then a
//-ve means a will come first, then b


const arrays = [10, 20, 30, [40, 50, [90, 80, 99], 60], 11, 80];
console.log(arrays[2]); // 30
console.log(arrays[3]); // [ 40, 50, [ 90, 80, 99 ], 60 ]
console.log(arrays[3][0]); // 40
console.log(arrays[3][2]); // [ 90, 80, 99 ]
console.log(arrays[3][2][1]); // 80


//flat only flats array in one level only and it doesn't make changes in the existing array
//it stores in a new array
const c = arrays.flat();
console.log(c); //[ 10, 20, 30, 40, 50, [ 90, 80, 99 ], 60, 11, 80 ]


//if we want to flat at 2 level
const d = arrays.flat(2);
console.log(d);
/* [
  10, 20, 30, 40, 50,
  90, 80, 99, 60, 11,
  80
] */

//if there are many levels, we can simply use infinity, it will work for all
const x = arrays.flat(Infinity);
console.log(x);
/* [
  10, 20, 30, 40, 50,
  90, 80, 99, 60, 11,
  80
] */

  const k = [10,309,"Rohit",9.3,true];
  console.log(k["0"]); //10 (we can access it by using character which happens in object)
  k.name = "Mohan";
  console.log(k); //[ 10, 309, 'Rohit', 9.3, true, name: 'Mohan' ] 
  //so we can say that array behaves as a object in javascript

