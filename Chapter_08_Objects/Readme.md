-> We should not prefer for-in loop for iteration in objects
-> Rather than we should use for of loop, But that is not possible in objects directly.
-> As we know, Object.keys and Object.values returns array, so first we change it to array and then perform the for-of loop

In deep copy, we can create independent copies of nested objects. 
(It is done by using structuredClone(user) function)


In shallow copy, we can only create independent copies at one level, and not work for nested object.
(It is done by spread operator)


What is limitations of structuredClone()?
-> structuredClone() does not duplicate the prototype chain. If a class instance is cloned, the returned object will be a plain object, losing its original class identity and methods.
-> Private elements (fields and methods) within classes are not duplicated by structuredClone()


How arrays are stored in the form of objects in javascript?
-> const arr = [10, 20, 30, 40];

//Object representation of array stored in JS(behind the scene)
{
    0:10,
    1:20,
    2:30,
    3:40
}
Here index is converted into keys(which treats the index as string) and values are converted into values
thats why we access array as arr[0]
That is why arrays are treated as objects

KEYS in object can be String and symbol



