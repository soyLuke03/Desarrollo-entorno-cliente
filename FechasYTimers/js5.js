function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
  }
  setInterval(muestraReloj, 999);

let audio = new Audio("iphone-notificacion.mp3");
function setAlarma(){
  let fechaActual = new Date();
  let alarma = fechaActual.getHours()+":"+fechaActual.getMinutes();
  let alarmaHora = document.getElementsByName("alarma")[0].value;
  let retorno;

  if(alarma==alarmaHora){
    
    let anwser = prompt('¿Quieres posponer la alarma o apagarla?[P][A]')
    if(anwser.toLocaleLowerCase()=='p'){
      alert("Posponiendo 2 minutos")
      retorno = 0;
    }
    else if (anwser.toLocaleLowerCase()=='a'){
      alert("Apagando")
      retorno = 1;
    }
    else{
      alert("Opción no válida")
    }
  }
  
  return retorno;
}

function suenaAlarma(tiempo){

}

