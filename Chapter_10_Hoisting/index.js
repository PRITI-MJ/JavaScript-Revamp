//Execution Context
//Memory Allocation
//a = undefined
//b = undefined
//addNumber = func code
//sumResult1 = undefined
//sumResult2 = undefined


//Execution phase(it will execute line by line)
console.log(a); //undefined (value has not assined to a yet, but undefined has assigned during memory allocation)

var sumResult1 = addNumber(a,b);
console.log(sumResult1);//NaN
//here it is not working because a and b values are still assigned to undefined

var a = 10;
var b = 20;
console.log(a); //10

var sumResult1 = addNumber(a,b);
console.log(sumResult1);//30
//here it is working because a and b values are already assigned and the whole function code is already stored
//So it is directly directing to the stored function code and execute it


function addNumber(num1, num2){
    var sum = num1+num2;
    return sum;
}

var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1, sumResult2);//30 9






//let const
//Memory allocation Phase
//a = <uninialised> (Temporal dead zone)
// It means we cannot access it until some value is assigned to it
//b = <uninialised> (Temporal dead zone)
//addNum2 = <uninialised> (Temporal dead zone)
//here func code is not get stored because it is in const
//result = <uninialised> (Temporal dead zone)
//Execution phase




//console.log(a); //it will throw error
let c = 10;
const d = 20;
//here in execution phase, values are assigned to a and b 
//Now we can access it 
console.log(c);//10
console.log(d);//20


// const result = addNum2(c, d);
// console.log(result);
//here it will throw error because the function code is not stored yet due to const


const addNum2 = function(num1, num2){
    const sum = num1+num2;
    return sum;
}

//here it is working because func code is stored during execution phase
const result = addNum2(c, d);
console.log(result);//30
