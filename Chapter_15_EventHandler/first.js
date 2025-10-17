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

const element = document.getElementById("first");
element.addEventListener('click', () => {
    element.textContent = "Strike is coming"
})

element.addEventListener('click', () => {
    element.style.backgroundColor = "brown";
})



