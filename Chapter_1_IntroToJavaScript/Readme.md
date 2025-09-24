We can run Javascript code directly into the browser unlike java, c++, etc.

Why Javascript?
-> Easy to use
-> Security (Only Have access to HTML/ CSS/ mouse/ keyboard)
-> Lightweight
-> Automatic garbage collector


How will Javascript be compiled?
-> using V8 Engine(Chrome browser)
-> using SpiderMonkey(firefox browser)

What is V8 Engine?
-> It is a c++ code which will take input as a Javascript and gives output.

How a c++ code runs?
-> c++ code is first changes to machine code using compiler then the browser/OS/system can understand,run and execute.

So while executing JS code does V8 engine also require a compiler?
-> V8 engine is not a exact C++ code, its a machine code, it does not require a compiler and browser can understand and execute it directly.

Javascript is a interpreter which gets executed line by line.

Machine code is system independent, thats why when we download chrome it asks about our OS i.e, windows, Mac, linux or about 64 bit, 32 bit etc.

So we can run Javascript in our system?
-> For that we need V8 engine, for that we install NODE JS, which is a javascript runtime enviroment which has V8 engine inside it along with some extra features.
-> So, now we can run Javascipt outside the browser also using NODE JS.

How to run JS file?
-> Node file.js