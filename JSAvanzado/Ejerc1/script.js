let box = document.getElementById("box");
let text = document.getElementById("text");

function enter(){
    box.style.backgroundColor="green";
}

function left(){
    box.style.backgroundColor="red";
}

function clickDown(){
    box.innerText="Has pulsado el click";
}
function clickUp(){
    box.innerText="Has dejado de pulsar el click dentro de la caja";
}

function keyDown(){
    box.innerText="Has pulsado una tecla";
}

function keyUp(){
    box.innerText="Has dejado de pulsar una tecla";
}


text.addEventListener('keypress',keyDown);
text.addEventListener('keyup',keyUp);

box.addEventListener('mouseenter',enter);
box.addEventListener('mouseleave',left);
box.addEventListener('mousedown',clickDown);
box.addEventListener('mouseup',clickUp);