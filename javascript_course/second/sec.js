
const button = document.querySelector(".button");

button.addEventListener("click",function(){
    const h1 = document.querySelector(".h1");
    if (h1.textContent === "Hello World"){
        h1.textContent="go my code"
       
    }
    else if(h1.textContent !== "Hello World"){
        h1.textContent="Hello World"
    }
    
});

// function color(){
//         h1. classList.toggle("change");
// }
