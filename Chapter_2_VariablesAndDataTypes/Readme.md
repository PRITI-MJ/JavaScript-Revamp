So Why we use let and const keyword and not var keyword?
-> let and const keyword if once declared cannot be declared again unlike var.(which means let and const doesn't create confusion unlike var)
-> If a var keyword is decalred inside a function, then it can be accesible outside the function too which again creates a confusion.


Difference between const and let keyword?
-> if we decare a variable with let keyword, we can change the value of that variable by assigning new value to that variable unlike const.


Data Types?
-> 2 types - Primitive data type and Non Primitive data type

what are Primitive data types?
-> number, string, boolean, undefined, null, bigint, symbol

what are non-primitive data types?
-> array, object, function


what is the typeof of primitive and non-primitive data types?
-> for primitive data types, all the data types have the typeof of their name only except null
-> null has a typeof of "Object".

-> For non-primitive data types, all the data types will have the typeof of "Object".
-> Function datatype will have the typeof as "function"
-> Functions are also considered as Object in JS.


Why Primitive datatypes are immutable as we can change the values of it?
-> when we assign a different value to the variable of primitive datatype, that value will not change the previous value of that location, instead a new location will be assigned and that variable will shift to that new location. That's why it is considered as immutable.



Why the non-primitive datatypes kept mutable while primitive datatypes are not?
-> Since in non-primitive data types, there are multiple values we can store in them(arr, obj, function), it will need more memory than primitive datatypes, if they are kept immutable, then whenever we want to make any changes to the array or object, a new memory space will get created, which will cause issue.


