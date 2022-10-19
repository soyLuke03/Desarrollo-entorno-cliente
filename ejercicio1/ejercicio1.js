function inicializar(){

let arrayNombres = [];
let lista = document.getElementById("lista");


let nombre;

nombre = prompt("Dame un nombre");   

  
    arrayNombres.push(nombre.charAt(0).toUpperCase());

do{


    
    nombre = prompt("Dame un nombre");  
   

    if(arrayNombres.indexOf(nombre) != -1){
        alert("no se puede");
    }
    else {

    arrayNombres.push(nombre.charAt(0).toUpperCase());
    }

}
while(
    arrayNombres.length < 5
);

arrayNombres.sort();


lista.innerText = arrayNombres;

}