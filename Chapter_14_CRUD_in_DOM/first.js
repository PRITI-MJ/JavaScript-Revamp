const newElement = document.createElement("h2");
console.log(newElement); //<h2></h2>
newElement.textContent = "Strike is Coming";
newElement.id = "second";
console.log(newElement);
/*
<h2 id = "second">Strike is Coming</h2>
*/

//select element
const element = document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement('h3');
newElement2.innerText = "diwali aa rhi hai";
newElement2.id = "third";
// newElement2.className = "diwali"
// newElement2.className = "Holi"
// But this will overwrite the name diwali, as we can assign as many names to a class
// to avoid this, we use +=
// newElement2.classList += " Holi"
//here we are using space before holi because the string don't stick to each other
// diwaliHoli(not acceptable) => diwali holi(acceptable)
//But this is a confusing process, so we don't use classname
//instead of this, we use classList
newElement2.classList.add("diwali");
newElement2.classList.add("Holi");
//diwali holi

//if we want to remove the holi class
//newElement2.classList.remove("holi")
//diwali

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "20px";
newElement2.setAttribute("hello", "ji");


newElement.before(newElement2);


//attributes => id, class,etc.
console.log(newElement2.getAttribute("id")); //third
console.log(newElement2.getAttribute("class")); //diwali holi
console.log(newElement2.getAttribute("hello")); //ji


// const list = document.createElement("li");
// list.textContent = "Milk"
// const list2 = document.createElement("li");
// list2.textContent = "Cake"
// const list3 = document.createElement("li");
// list3.textContent = "Halwa"
// const list4 = document.createElement("li");
// list4.textContent = "Paneer"


//append is adding element at the last
//prepend is adding element at the first
// const unorderElement = document.getElementById("listing")
// unorderElement.append(list);
// unorderElement.append(list2);
// unorderElement.append(list, list2)
// unorderElement.prepend(list3);


//if we want to add list after list2
//list.after(list4);

//If we don't have access to list directly, we can access it through parent
// unorderElement.children[1].after(list4);


//if we want to list this elements in the array
const arr = ["Milk", "Halwa", "Paneer", "tofu", "Tea"]

const unorderElement = document.getElementById("listing");

// for(let ele of arr){
//     const li = document.createElement("li");
//     li.textContent = ele;
//     unorderElement.append(li);
// }
//This will make the UI slower, because it is taking one element at a time and updating it
//instead of this, we can first create all the list into a fragment and then add that fragment into that unordered list

const fragment = document.createDocumentFragment();

for(let ele of arr){
    const li = document.createElement("li");
    li.textContent = ele;
    fragment.append(li);
}

unorderElement.append(fragment);


//to delete a particular element
const s1 = document.getElementById("first");
s1.remove();


