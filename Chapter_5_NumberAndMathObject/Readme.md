-> In primitive data type, data is copied, not pointing to the same location.
-> In non-primitive data type, refernce is copied, both are pointing to same location.

why we should not use object for assigning numbers?
-> Because it can create same data of object but will not point to same location, which is of no use.
-> If we convert the number in boolean, it will always return true if the number is in the form of object, even in case of 0, {}, [], null. It is because it is checking on the basis of address, not on the basis of data.


Non-primitive: Compares on the basis of reference
Primitive: Copy by value (compares on the basis of data)
