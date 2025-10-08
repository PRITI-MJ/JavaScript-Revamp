In javascript, we can store heterogenous datatypes of array unlike C++ and java


Why do we prefer Push and Pop operation rather than shift and unshift?
-> because in shift and unshift, to put an element at the first, we need to shift all the element one by one. Same is the case with shift. It hampers the performance of the code.


Difference between slice and splice?
-> slice does not make any changes in the original array where as splice trimmed out the part from the original array

Differnce between concat and spread operator?
-> concat and spreads are very different when the argument is not an array.
When the argument is not an array, concat adds it as a whole, while ... tries to iterate it and fails if it can't.
-> concat doesn't apply on objects, but spread operator can apply on objects also.

a = [1, 2, 3]
x = 'hello';

console.log(a.concat(x));  // [ 1, 2, 3, 'hello' ]
console.log([...a, ...x]); // [ 1, 2, 3, 'h', 'e', 'l', 'l', 'o' ]
//but concat and spread operator will act same in case of array of strings

x = 99;

console.log(a.concat(x));   // [1, 2, 3, 99]
console.log([...a, ...x]);  // TypeError: x is not iterable


Why javascript is sorting only in character wise and not sorting the number as numbers and character as character like C++, JAVA?
-> It is because Javascript we can store heterogenous datatypes in a single array, so in order to sort all of it, it treats all the things as a character, and then sort.
-> But in c++ and java, we can only store homogenous datatypes in a single array, so it sort it accordingly.

    
    
Why Javascript array is not array?
-> Array defination: it can only stores same data type and contiguous memory location
-> Javascript array can store different types of data types
-> the array assigns in memory as objects, not in contiguous manner, because of it heterogenous manner of storing array elements, so each element will have different memory size.
