const background = document.getElementById("background");
const btn = document.getElementById("btn");


btn.addEventListener("click", function(){
    let randomColor1 = Math.floor(Math.random() * 255);
let randomColor2 = Math.floor(Math.random() * 255);
let randomColor3 = Math.floor(Math.random() * 255);
background.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
})
