document.getElementById("formulario").addEventListener('submit', (e) => {
    e.preventDefault();

    
})


nombre = getElementById("name").value;
nick = getElementById("nick").value;
tel = getElementById("tel").value;
edad = getElementById("edad").value;
correo = getElementById("correo").value;


function validarUsuario(){

    let validar = true;
    nombre.addEventListener('input', (e) => {
        if(nombre.length > 20){
            validar = false;
        }
    })
    return validar;
}