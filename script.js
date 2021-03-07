const color1 = document.querySelector('input[name="color1"]');
const color2 = document.querySelector('input[name="color2"]');
const select = document.querySelector('h3');
const body = document.querySelector('body');
const copyButton = document.querySelector('button');
let currColor = document.querySelector("h3>p");

function setGradient() {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    select.innerHTML = `${body.style.background};`;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
