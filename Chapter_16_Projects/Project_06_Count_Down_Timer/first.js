setInterval(() => {
const result = document.getElementById("result");

const currentTime = Date.now();

//millisecond
const olympicTime = new Date(2028, 6, 14).getTime();

//getting in millisecond, how much time is left for olympics
let timer = olympicTime - currentTime;

//converting the millisecond into days
const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;
const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minutes = Math.floor((timer)/(1000*60));
timer%=1000*60;
const second = Math.floor((timer)/(1000));
timer%=1000;


    result.textContent = `${day} days ${hour} hours ${minutes} minutes ${second} seconds`
}, 1000)
