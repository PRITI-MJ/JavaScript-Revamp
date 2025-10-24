const form = document.querySelector("form");
const allTask = document.getElementById("allTask");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if(text == "")
        return;

    const parent = document.createElement("div");
    
    parent.style.margin = "20px"

    const task = document.createElement("span");
    task.textContent = text;

    task.style.marginRight = "20px"

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";

    doneButton.style.marginRight = "10px"
    doneButton.style.width = "50px"

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.style.width = "50px"
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";

    parent.append(task, doneButton, deleteButton);

    allTask.append(parent);

    deleteButton.addEventListener("click", () => {
        parent.remove();
    })

    doneButton.addEventListener("click", () => {
        task.style.textDecoration = "line-through"
        task.style.color = "grey"
    })

    form.reset();

})

