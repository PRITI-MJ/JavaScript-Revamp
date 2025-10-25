Javascript is single threaded synchronous language => at one time, only one task will get executed.

eg1:- 
console.log(first)
let sum = 0;
for(let i = -; i < 300000000000000; i++)
{
    sum+=i;
}
console.log(sum);
console.log("Last");

Here, first will be printed, then the long for loop will run, then the sum will get printed, and then the last will be printed. (So it is synchronous).

when this for loop will run, no other task will get executed, it is because JS is single-threaded language.


API => function call


Eg2:-
console.log("Hello Ji");
setTimeout(() => {
    console.log("Time out Executed")
}, 5000);
console.log("I am the end");

-> Here, 1st Hello Ji will get printed, 2nd I am the end will get printed, and at last Time out executed will be printed.
-> Here, it is not happening in sequence (violating the JS rule)
-> It is happening because of web API(provided by browser)
-> Browser gives access to window object, which contains many Web APIs (functions) like setTimeout/setInterval, Dom API, fetch, local storage, console.log, location, etc.
-> So when javascript saw the 1st console.log it directly refers to the web API, then it refer setTimeOut to webAPI, then again console.log
-> So, here javascript has done its work sequentially only, it was the work of Web API, who executed the functions accordingly.
-> Web API has callback queue, so for 5000 ms, this setTimeout function will come under this queue, now EVENT LOOP will first check that if there any callback function present in callback queue or not, if present, then it will check that the js callstack is empty or not, if emptied then onlt it will put that function inside the callstack of Javascript once the timer finished.
-> Web APIs are multi-threaded. Asynchronus behaviour of JS is handled by web APIs.

-> There are two types of queue in JS, one is Microtask queue, callback queue.
-> Microtask queue has higher priority than callback queue.
-> If in a code, there is fetch operation, then it goes in the microtask queue. So event loop will first send the microtask queue's function to the callstack of js, and then the callback queue.
-> JS will give all the asynchronus tasks to the WEB API to handle them.





