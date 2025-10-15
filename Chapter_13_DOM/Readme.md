DOM => Document Object Model

<!-- <h1 style="background-color: orange; color: brown;" id="first">Strike is Coming</h1> -->

here we browser will automatically break this sentance in objects by using some commands
temp = {
    tagname: "h1",
    id: "first",
    style: {
        background-color: "Orange",
        color: "Brown",
    },
    textContent: "strike is Coming"
    }

so to change the text,  we can use temp.textContent = "Hello Coder Army"


Window is the global object which is created by browser.
we can access its prototypes

winndow.alert("Hello");

window.console.log("Hello World"); 
that is why console.log says that its not a part of javascript, it is the part of the window object

window.open(); => a new window will open

we don't have to use window as a prefix, its optional

1. Window (created by Browser) => (document inside it)
2. Document => (HTML code inside it)
3. HTML => (2 children => head and body)


Difference between innerHTML, innerText and textContent?
   <!-- <h1 style="background-color: orange; color: brown;" id="first">Strike is Coming on
        <span style="display: none;">18 October</span>
    </h1> -->


    const temp = document.getElementById("First");
    => It returns a object

    temp.innerHTML => Strike is Coming on \n
        <span style="display: none;">18 October</span>
    => It means it will show the all HTML content along with tag

    temp.innerText => Strike is Coming on \n
    = It means it will only show the content which is displayed on the browser

    temp.textContent => Strike is Coming on \n
      18 October
    => It will display all the content without tag


    <ul>
        <li>Fridge</li>
        <li>Cooler</li>
        <li>Press</li>
    </ul>


const list = document.getElementByTagName("li") //it will return an array but not exact array because some of the properties of array can't be applied here eg:-(for each loop can't applied in this)


for(let num of list){
    console.log(num)
}
  <!-- <li>Fridge</li>
  <li>Cooler</li>
  <li>Press</li> -->

To apply the array property we can convert this list in array by applying spread operator
const arr = [...list];

we can also select by using classname
const classBase = document.getElementByClassName("third");


we can also select element by using css tag
document.querySelector("h1")
=> if there are two h1 tag, it will only return the 1st tag(it returns html collection)

document.querySelector("#first")
document.querySelector(".third")

But if we want to select all using this queryselector
document.querySelectorAll("h1")
=> It returns the NodeList

What is DOM?
=> DOM, or Document Object Model, is a programming interface that represents a web page's content (written in HTML or XML) as a tree of objects.

