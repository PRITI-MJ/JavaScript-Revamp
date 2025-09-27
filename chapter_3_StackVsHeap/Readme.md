What is difference between HEAP and STACK?
-> When the element size is fixed it can be store in stack like in numbers, if the element size varies like in string which can't be stored at one location, for that we need HEAP.
-> In heap, we can stores values at best posible places and that starting location can be store in stack, so the final location of the elemnent doesn't change by only changing the value of the stack(which contains the location of the heap).
-> In stack, we have to store values one after the other while in heap, we can store values at its best place(anywhere in the heap where the location is empty).
-> In JS, in case of primitive data type, it become useful, where we store the value at heap and if the value changes, the heap store the value at new location and stack changes to that new location of heap but the original location of the variable doesn't change(as the stack location doesn't change)
-> For this optimization only, all the data types whether its a primitive or non-primitive datatypes it is being stored in HEAP, and heap locations are stored in STACK.
-> when the program starts, NULL, UNDEFINED, TRUE, FALSE location already assigned/fixed in HEAP.


How to find the location of the element in an array?
-> ElementAddress: BaseAddress + index * sizeofdata

How to find the element in an array if address is given?
-> (Address - baseAddress)/size of data = element