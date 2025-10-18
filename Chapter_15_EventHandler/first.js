// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "strike is coming"
// }




//We don't use this method because 2nd one will overwrite the 1st one
// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Strike is Coming";
// }

// const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.style.backgroundColor="brown";
// }

// const element = document.getElementById("first");
// element.addEventListener('click', () => {
//     element.textContent = "Strike is coming"
// })

// element.addEventListener('dblclick', () => {
//     element.textContent = "I am the best"
// })

// element.addEventListener('click', () => {
//     element.style.backgroundColor = "brown";
// })

// element.addEventListener('mouseenter', () => {
//     element.style.backgroundColor = "brown";
// })

// element.addEventListener('mouseleave', () => {
//     element.style.backgroundColor = "brown";
// })


// const child1 = document.getElementById("child1");
// child1.addEventListener("click",() => {
//     child1.textContent = "I am clicked";
// })

//But if we want to apply this to all child, then we don't have to do manually
// const parent = document.getElementById("parent");

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener("click", () => {
//         child.textContent = "I am Clicked";
//     })
// }

//But its a long process, instead of that we can use e.target
function handleClick(e){
    e.target.textContent = "I am Clicked";
}


//To add eventlistner
// parent.addEventListener("click", (e) => {
//     e.target.textContent = "I am Clicked";
// })
parent.addEventListener("click",handleClick);

//remove eventListner
//parent.removeEventListener("click", handleClick);


// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener("click", () => {
//     console.log("Grandparent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener("click", () => {
//     console.log("parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener("click", () => {
//     console.log("child is clicked");
// })
//Output
//child is clicked
//parent is clicked
// Grandparent is clicked

// const grandparent1 = document.getElementById("grandparent");
// grandparent1.addEventListener("click", () => {
//     console.log("Grandparent is clicked");
// }, true)

// const parent1 = document.getElementById("parent");
// parent1.addEventListener("click", () => {
//     console.log("parent is clicked");
// }, true)

// const child1 = document.getElementById("child");
// child1.addEventListener("click", () => {
//     console.log("child is clicked");
// }, true)

//output
// Grandparent is clicked
// parent is clicked
// child is clicked


//e => a event object which stores various information
// So we can stop bubling by e.stopPropagation();
//e.target => we can know, where it got triggered