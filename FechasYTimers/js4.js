function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var dia = fechaHora.getDate();
    var nMes;
    if (fechaHora.getMonth()==0){
      nMes = "Enero";
    }
    else if (fechaHora.getMonth()==1){
      nMes = "Febrero";
    }
    else if (fechaHora.getMonth()==2){
      nMes = "Marzo";
    }
    else if (fechaHora.getMonth()==3){
      nMes = "Abril";
    }
    else if (fechaHora.getMonth()==4){
      nMes = "Mayo";
    }
    else if (fechaHora.getMonth()==5){
      nMes = "Junio";
    }
    else if (fechaHora.getMonth()==6){
      nMes = "Julio";
    }
    else if (fechaHora.getMonth()==7){
      nMes = "Agosto";
    }
    else if (fechaHora.getMonth()==8){
      nMes = "Septiembre";
    }
    else if (fechaHora.getMonth()==9){
      nMes = "Octubre";
    }
    else if (fechaHora.getMonth()==10){
      nMes = "Noviembre";
    }
    else if (fechaHora.getMonth()==11){
      nMes = "Diciembre";
    }
    var anno = fechaHora.getFullYear();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").textContent = "Hoy es: " + anno+"-"+nMes+"-"+dia+ " y son las " + horas+":"+minutos+":"+segundos+ " horas";
  }
  setInterval(muestraReloj, 999);
