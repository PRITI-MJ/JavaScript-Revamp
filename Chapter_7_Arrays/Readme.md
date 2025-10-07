In javascript, we can store heterogenous datatypes of array unlike C++ and java


Why do we prefer Push and Pop operation rather than shift and unshift?
-> because in shift and unshift, to put an element at the first, we need to shift all the element one by one. Same is the case with shift. It hampers the performance of the code.


Difference between slice and splice?
-> slice does not make any changes in the original array where as splice trimmed out the part from the original array

Differnce between concat and spread operator?
-> concat and spreads are very different when the argument is not an array.
When the argument is not an array, concat adds it as a whole, while ... tries to iterate it and fails if it can't.

a = [1, 2, 3]
x = 'hello';

console.log(a.concat(x));  // [ 1, 2, 3, 'hello' ]
console.log([...a, ...x]); // [ 1, 2, 3, 'h', 'e', 'l', 'l', 'o' ]

x = 99;

console.log(a.concat(x));   // [1, 2, 3, 99]
console.log([...a, ...x]);  // TypeError: x is not iterable