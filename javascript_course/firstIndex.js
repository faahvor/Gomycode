const element = document.querySelector("h1");
const her = document.getElementById("joy");
const she = document.getElementsByClassName("favour");
console.log(her);

const btn = document.getElementById("btn");
btn.setAttribute("class", "button class");
btn.setAttribute("disabled", "true");
btn.disabled = false;
btn.removeAttribute("disabled");
console.log(btn);
console.log(btn.getAttribute("class"));

const h1Element = document.getElementsByTagName("h1");

const h1 = h1Element[0];
h1.style.fontSize = "10rem";
// or
h1Element[0].style.color = "red";
console.log(h1Element);
 
const newElement = document.createElement("p");
newElement.textContent= "i am a girl";

console.log(newElement);
const div = document.getElementById("first");
div.append(newElement);

const ul = document.createElement("ul");



const array = ["food","cloth","shoe","fish","goat","bag"]

for (let index = 0; index < array.length; index++ ){
const li = document.createElement("li");
 li.textContent = array[index];
 ul.append(li);
}
div.append(ul);

// jml