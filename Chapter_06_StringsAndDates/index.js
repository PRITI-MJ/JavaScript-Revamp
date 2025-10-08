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


const str = `Hello Coder Army Coder`;
console.log(str.length); // Output: 16
console.log(str[0]); // Output: H


str[2] = "S"; // This will not change the string due to immutability
console.log(str); // Output: Hello Coder Army Coder

//upper case
console.log(str.toUpperCase()); // Output: HELLO CODER ARMY CODER
console.log(str); // Output: Hello Coder Army Coder
//original string remains unchanged
console.log(str.toLowerCase()); // Output: hello coder army coder


//Finding the index of a substring
const index = str.indexOf("Cod");
console.log(index); // Output: 6
//It wil always returns the first index output
console.log(str.indexOf("Cer")); // Output: -1 (not found)
// Here C, e, r all are present in the str string but it is not continuous so it returns -1
console.log(str.indexOf("cod")); // Output: -1 (case-sensitive)
//for this only we cnvert all the string into either uppercase or lowercase and then we can find the index


//Finding the last index of a substring
const lastIndex = str.lastIndexOf("Cod");
console.log(lastIndex); // Output: 12
//It will return the last index of the substring


//Finding a substring whether it is present or not by just returning true or false
console.log(str.includes("Army")); // Output: true
console.log(str.includes("army")); // Output: false (case-sensitive)

//Slice
console.log(str.slice(0, 4)); // Output: Hell (where last index 4 is not included)
console.log(str.slice(6)); // Output: Coder Army Coder(where it will print from index 6 to end of the string)
console.log(str.slice(-4)); // Output: oder (where it will print last 4 characters of the string)
console.log(str.slice(0, -4)); // Output: Hello Coder Ar (where it will print from index 0 to length-4)
console.log(str.slice(-8, -4)); // Output: my C (where it will print from length-8 to length-4 by counting it from behind)


//Same we can do with Substring also, but negative index will not be considered
console.log(str.substring(0, 4)); // Output: Hell
console.log(str.substring(6)); // Output: Coder Army Coder
console.log(str.substring(-4)); // Output: Hello Coder Army Coder (where it will consider -4 as 0)
console.log(str.substring(0, -4)); // Output:  (where it will consider -4 as 0)


const a = "Rohit";
const b = "Negi";
const c = a+" "+b;
console.log(c); // Output: Rohit Negi

console.log(24+"Rohit"); // Output: 24Rohit
console.log("Rohit"+24);  // Output: Rohit24
console.log(23+44+"Rohit"); // Output: 67Rohit
console.log("Rohit"+23+44); // Output: Rohit2344
//So here, if we start with number then it will perform addition first and then concatenation but if we start with string then it will perform concatenation only.


//replacing a substring with another substring
const str6 = `Hello coder army coder`;
const newStr = str6.replace("ode", "iam");
console.log(newStr); // Output: Hello ciamr army coder
//So here, replace will replace only first occurrence of the substring
const newStr1 = str6.replaceAll("ode", "iam");
console.log(newStr1); // Output: Hello ciamr army ciamr
//So here, replace will replace only first occurrence but replaceAll will replace all the occurrences of the substring


//Trimming the whitespace from both ends of a string
const user = "    Rohit   ";
console.log(user.trim()); // Output: "Rohit"
console.log(user.trimStart()); // Output: "Rohit   "
console.log(user.trimEnd()); // Output: "    Rohit"


//Splitting a string into an array of substrings
const names = "Rohit, Mohit, Priti, Ankit";
const namesArray = names.split(", ");
console.log(namesArray); // Output: [ 'Rohit', 'Mohit', 'Priti', 'Ankit' ]










//Date
const now = new Date();
console.log(now); // Output: current date and time
//2025-10-03T07:38:26.985Z (this is in UTC format)

console.log(now.toString()); // Output: current date and time in string format
//Fri Oct 03 2025 13:08:26 GMT+0530 (India Standard Time)

console.log(now.toISOString()); // Output: current date and time in ISO format
//2025-10-03T07:43:39.866Z

console.log(now.toLocaleString()); // Output: current date and time in locale format
// 3/10/2025, 1:14:41 pm

console.log(now.getDay()); // Output: 5 (where 0 is Sunday, 1 is Monday, and so on)
console.log(now.getDate()); // Output: 3 (day of the month)
console.log(now.getMonth()); // Output: 9 (where 0 is January, 1 is February, and so on)
console.log(now.getFullYear()); // Output: 2025 (year)
console.log(now.getHours()); // Output: 13 (hours)
console.log(now.getMinutes());  // Output: 18 (minutes)


//year month date hour minute second millisecond
const specificDate = new Date(2025, 9, 3, 10, 30, 16, 125);
console.log(specificDate.toString()); // Output: Fri Oct 03 2025 10:30:16 GMT+0530 (India Standard Time)
//Here, month is 9 because month starts from 0 (0 is January, 1 is February, and so on)
console.log(specificDate); // Output: 2025-10-03T05:00:16.125Z (in UTC format)


const now1 = Date.now();
console.log(now1); // Output: current timestamp in milliseconds
//1735825116125 (this value will keep on changing as time passes)
const dates = new Date(1735825116125);
console.log(dates.toString()); // Output: Fri Oct 03 2025 13:18:36 GMT+0530 (India Standard Time)


//So from this milisecond timestamp has started
const dates1 = new Date(0);
console.log(dates1.toString()); //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time) 
// so this is called epoch time, from this time the timestamp has started


