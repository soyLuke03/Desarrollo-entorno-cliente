let nEnlaces = document.querySelectorAll("a");

console.log(nEnlaces.length);

console.log(nEnlaces[nEnlaces.length-2].href);


let coincidencias = 0;
for(let i = 0; i<nEnlaces; i++){
    if(nEnlaces[i].href == "http://prueba/"){
        coincidencias++;
    }
}
console.log(coincidencias);



let coincidenciasP3 = document.querySelectorAll("p");
let cc = coincidenciasP3[2].getElementsByTagName("a");

console.log(cc);

