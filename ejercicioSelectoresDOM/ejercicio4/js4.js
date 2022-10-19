/**
A partir del fichero Ejercicio4.html se pide realizar mediante javascritp las siguientes cuestiones utilizando selectores CSS.
1 - Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.
2 - Modifica el precio del vuelo para que ahora sea $199.99
3 - Modifica todos los títulos de las vacaciones (h2),
 su nuevo valor será "Sanlúcar de Barrameda".
4 - Selecciona la lista de vacaciones cuyo id es #vacations.
5 - Selecciona aquellos ítems que tenga la clase .america
 */

//1

let h2Elements = document.getElementsByTagName("h2");
for(let i = 0; i<h2Elements.length;i++){
    h2Elements[i].style.color="red";
}

//2

let precios = document.getElementsByTagName("span");
precios[0].innerHTML="$199.99"

//3
for(let i = 0; i<h2Elements.length;i++){
    h2Elements[i].innerText = "Sanlúcar de Barrameda";
}

//4

let listaVacation = document.querySelector("#vacations");

//5

let listaAmerica = document.querySelectorAll(".america");

