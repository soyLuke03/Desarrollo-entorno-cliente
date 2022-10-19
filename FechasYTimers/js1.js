
let p = document.getElementById("poner");

let fecha = new Date();

function ponerFecha(){

  let diaSemana;
  if(fecha.getDay()==0){
    diaSemana = "Domingo";
  }
  else if(fecha.getDay()==1){
    diaSemana = "Lunes";
  }
  else if(fecha.getDay()==2){
    diaSemana = "Martes";
  }
  else if(fecha.getDay()==3){
    diaSemana = "Miércoles";
  }
  else if(fecha.getDay()==4){
    diaSemana = "Jueves";
  }
  else if(fecha.getDay()==5){
    diaSemana = "Viernes";
  }
  else if(fecha.getDay()==6){
    diaSemana = "Sábado";
  }

  
  let dia = fecha.getDate();
  let mes = fecha.getMonth();
  let año = fecha.getFullYear();

  let hora = fecha.getHours();
  let minuto = fecha.getMinutes();

  console.log(diaSemana)
  document.getElementById("poner").textContent = 
  "Hoy es " + diaSemana +" , "  + dia + " de " + mes + " de " + año + " y son las " + hora + ":" + minuto + " horas";
}
