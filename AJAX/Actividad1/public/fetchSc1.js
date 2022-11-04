
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    
    
    if (validarUsuario() && validarEdad && validarNick && validarTel){
        const newUser={
            name: document.getElementById("name").value,
            nick: document.getElementById("nick").value,
            tel: document.getElementById("edad").value,
            edad: document.getElementById("edad").value,
            correo: document.getElementById("correo").value
        }    
        fetch('http://localhost:3000/users', {
            method: 'POST', 
            body: JSON.stringify(newUser), // los datos que enviamos al servidor en el 'send'
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
              if(response.ok) {
                  return response.json();
                  
              }
              return Promise.reject(response)
          })
          .then(datos => datosServidor=datos)
          .catch(err => {
            console.log('Error en la petición HTTP: '+err.message);
          })             
        // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
        document.getElementById("users").textContent = "Enviado con exito"
        document.getElementById("formulario").reset();
    }
    else{
        document.getElementById("users").textContent = "No enviado"
    }
})

//API FETCH











let nombre = document.getElementById("name");
let nick = document.getElementById("nick");
let tel = document.getElementById("tel");
let edad = document.getElementById("edad");
let correo = document.getElementById("correo");



function validarUsuario(){
    let validar = false;
        if(nombre.value.length < 20 && nombre.value.length > 3){
            validar = true;
        }
    
    console.log(validar)
    return validar;
}

function validarNick(){
    let validar = false;
    
    if(nick.value.length > 3 && nick.length < 20){
        validar = true;
    }
    
    return validar;
}

function validarTel(){
    let validar = false;
    
    if(tel.value.length == 9){
        validar = true;
    }
    
    return validar;
}

function validarEdad(){
    let validar = false;
    
    if(edad.value > 1){
        validar = true;
    }
    
    return validar;
}
