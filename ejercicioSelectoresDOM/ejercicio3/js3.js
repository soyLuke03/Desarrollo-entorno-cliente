let uno = document.getElementsByName("firstname");
uno[0].value="Antonio";


let dos = document.querySelector('[name="fav_day"]');
dos.querySelectorAll('option')[2].setAttribute("selected","selected");

let tres = document.getElementsByName("first_name_label");
tres[0].innerText = "Tu nombre";

let cuatro = document.getElementsByName("fav_day");
let valorSelect = cuatro[0].getAttribute("name");

let cinco = document.getElementsByName("sex");
cinco[0].removeAttribute("checked");
cinco[1].setAttribute("checked","");

let seis = document.getElementsByTagName("form");
seis[0].setAttribute("name","personal_info");

let siete = document.getElementsByTagName("form");
siete[1].setAttribute("name","job_info");


let ocho1 = document.createElement("h1");
let nodoOcho1 = document.createTextNode("Entrevista personal");
ocho1.appendChild(nodoOcho1);

let ocho2 = document.createElement("h1");
let nodoOcho2 = document.createTextNode("Entrevista de trabajo");
ocho2.appendChild(nodoOcho2);

seis[0].append(ocho1);
seis[1].append(ocho2);

let nueve = document.createElement("h1");

let diez = document.createElement("h1").textContent = "Email";

let once = document.getElementsByTagName("form");

once[0].setAttribute("class","form");
once[1].setAttribute("class","form");




