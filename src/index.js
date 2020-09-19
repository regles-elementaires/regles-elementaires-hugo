// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

var popup = document.getElementById("popup");
var close = document.getElementById("close");
close.addEventListener('click', closePopup);

function closePopup() {
    popup.style.display = 'none';
}