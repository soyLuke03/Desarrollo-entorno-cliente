function mostrar(){
    let fecha = new Date();
    let nMes;
  
    fecha.setMonth(document.getElementsByName("mes")[0].value)
    if (fecha.getMonth()==0){
      nMes = "Enero";
    }
    else if (fecha.getMonth()==1){
      nMes = "Febrero";
    }
    else if (fecha.getMonth()==2){
      nMes = "Marzo";
    }
    else if (fecha.getMonth()==3){
      nMes = "Abril";
    }
    else if (fecha.getMonth()==4){
      nMes = "Mayo";
    }
    else if (fecha.getMonth()==5){
      nMes = "Junio";
    }
    else if (fecha.getMonth()==6){
      nMes = "Julio";
    }
    else if (fecha.getMonth()==7){
      nMes = "Agosto";
    }
    else if (fecha.getMonth()==8){
      nMes = "Septiembre";
    }
    else if (fecha.getMonth()==9){
      nMes = "Octubre";
    }
    else if (fecha.getMonth()==10){
      nMes = "Noviembre";
    }
    else if (fecha.getMonth()==11){
      nMes = "Diciembre";
    }
    
    fecha.setFullYear(document.getElementsByName("anno")[0].value)
  
    
  
    
  
    document.getElementById("poner").textContent = nMes + " " + fecha.getFullYear() + " " + fecha.getDay()
  
  
    
  
  }