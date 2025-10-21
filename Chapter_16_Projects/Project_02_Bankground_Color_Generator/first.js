const parent = document.getElementById("parent");

console.log(parent);
parent.addEventListener("click", (e) => {
    const child = e.target;
    const body = document.querySelector("body");
    body.style.backgroundColor = child.id;
})