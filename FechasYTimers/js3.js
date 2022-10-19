let diasRetraso = document.getElementsByName("input")[0]
let fechaLimite = document.getElementsByTagName("p")[0]

let fechaActual = new Date();

function sumarDias(){
  fechaActual.setDate(fechaActual.getDate() - diasRetraso.value);
  
  fechaLimite.innerHTML = fechaActual

}
