const str1 = "Hello, World!";
const str2 = 'JavaScript is fun.';
const str3 = `Template literals are powerful.`;

//Here, in '' & "", we cannot write in multiple lines but in `` we can write in multiple lines.
const multiLineStr = `This is a string
that spans multiple
lines.`;

const day = 18;
const str4 = `Today is the ${day}th day of the month.`;
console.log(str4); // Output: Today is the 18th day of the month.


const str = `Hello Coder Army`;
console.log(str.length); // Output: 16
console.log(str[0]); // Output: H


str[2] = "S"; // This will not change the string due to immutability
console.log(str); // Output: Hello Coder Army


