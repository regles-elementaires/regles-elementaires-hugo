// JS Goes here - ES6 supported

import "./css/main.css";

var overlay = document.getElementById("overlay");
var close = document.getElementById("close");
var closeButton = document.getElementById("close-button");
if (close !== null) {
    close.addEventListener('click', closePopup);
}
if (overlay !== null) {
    overlay.addEventListener('click', closePopup)
}
if (closeButton !== null) {
    closeButton.addEventListener('click', closePopup);
}

function closePopup(ev) {
    //console.log(ev.currentTarget);
    if (ev.target === overlay || ev.target === close || ev.currentTarget === closeButton) {
        overlay.style.display = 'none';
    }
}