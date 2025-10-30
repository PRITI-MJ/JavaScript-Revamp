console.log("Hello World Start");


//code


//const p1 = fetch("https://api.github.com/users");
//console.log(p1); //Promise { <pending> }

//fulfilled, rejected

//const p2 = p1.then((response) => {
    //console.log(response.json()); 
    //.json() converts the response into json format(readible format))
    //but it also returns a promise {<pending>} because it takes some time to convert into json format

    //return response.json();
//})

// p2.then((data) =>{
//     console.log(data);
// })




//BETTER WAY TO WRITE THE ABOVE CODE USING CHAINING OF .then()

//PROMISE CHAINING
fetch("https://api.github.com/users")
.then((response) => {

    if(!response.ok){
        throw new Error("Data is not present in the server");
    }
    return response.json();
}).then((data) => {
    // console.log(data);

    for(let i=0; i< data.length; i++){
    const parent = document.getElementById("first");
    const image = document.createElement("img");
    image.src = data[i].avatar_url;
    image.style.height = "100px";
    image.style.width = "100px";
    parent.append(image);

    }

})
.catch((error) => {
    const parent = document.getElementById("first");
    parent.textContent = error.message;
    console.log("Error occurred:", error);
})


console.log("Hello World End");


// const j1 = {
//     name: "Rohit",
//     age: 30,
//     address: "dwarka",
//     c : undefined,
// }
//JSON will ignore the key with undefined value

//convert to json
// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);
//{"name":"Rohit","age":30,"address":"dwarka"}


//creating json object
//we can use backtick also for creating json object 
// const jsonObj = 
// `{"name":"Rohit",
// "age": 30
// "address":"dwarka"
// }`;

//convert back to object
// const objFormat = JSON.parse(jsonObj);
// console.log(objFormat);
//{ name: 'Rohit', age: 30, address: 'dwarka' }




//CREATE A PROMISE MANUALLY
const p1 = new Promise((resolve, reject) => {
    resolve("Hello"); //Promise { 'Hello' }
    //we can also send promise in form of object or array
    //resolve({name: "Rohit", age: 30});
    //resolve([1,2,3,4,5]);

    //reject("hello") 
    //This will not work because this way reject can't work, for this we have to use .catch()
})
console.log(p1); //Promise { 'Hello' }

p1.then((response) => {
    console.log(response); //Hello
}).catch((error) => {
    console.log(error);
})