


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    
    
    if (validarUsuario == true){
        const newUser={
            name: document.getElementById("name").value,
            nick: document.getElementById("nick").value,
            tel: document.getElementById("edad").value,
            edad: document.getElementById("edad").value,
            correo: document.getElementById("correo").value
        }    
        const peticion=new XMLHttpRequest();
        peticion.open('POST', 'http://localhost:3000/users');
        peticion.setRequestHeader('Content-type', 'application/json');  
        // Siempre tiene que estar esta línea si se envían datos
        peticion.send(JSON.stringify(newUser));              
        // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
        document.getElementById("msg").textContent = "Enviado con exito"
    }
    else{
        document.getElementById("users").textContent = "buenas"
    }
})

let nombre = document.getElementById("name").value;
let nick = document.getElementById("nick").value;
let tel = document.getElementById("tel").value;
let edad = document.getElementById("edad").value;
let correo = document.getElementById("correo").value;


function validarUsuario(){
    
    let validar = true;
    if(nombre.length > 20 && nombre.length < 3){
        validar = false;
    }
    
    return validar;
}