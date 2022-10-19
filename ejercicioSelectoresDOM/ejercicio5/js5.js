/**
a - Selecciona todos los módulos de primero
b - Selecciona el módulo Sistemas Informáticos
c - Selecciona el módulo que va detrás de Sistemas Informáticos
d - Selecciona los módulos que van detrás de Sistemas Informáticos
e - Selecciona los módulos que tengan el atributo href
f - Selecciona los módulos que no tengan el atributo href
g - Selecciona aquellos módulos que contengan la cadena 'mod'
h - Selecciona aquellos módulos que empiecen por la cadena 'mod'
i - Selecciona aquellos módulos que terminen con la cadena '.html'
j - Selecciona todas las horas de los módulos de segundo
k - Selecciona los ítems vacíos y añade el contenido 'Nodo vacío'
h - Selecciona los módulos DWESE, DAW y EIE
 */


// a

let MPrimero = document.querySelector("p + ul");
MPrimero.style.color="red";

// b

let MSistemasInformaticos = MPrimero.querySelector("li:nth-child(3)");
MSistemasInformaticos.style.color="green";

// c 

let MLenguajesDeMarcas = MPrimero.querySelector("li:nth-child(4)");
MLenguajesDeMarcas.style.color="blue";

// d

let MVarios = MPrimero.querySelector("li:nth-child(2n+3)");
MVarios.style.color="gold";

// e

