
const nombre = document.getElementById("name");
const surname = document.getElementById("surname");
const radius = document.getElementById("radius");




nombre.addEventListener("input", function (event) {
    if (nombre.value.length < 5) {
        nombre.setCustomValidity("¡Illo pon bien el nombre que ta mu corto!");
    } else {
        nombre.setCustomValidity("");
        /*
        nombre.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                nombre.value = "joseluis"
            }
        })
        */
    }
  });



 surname.addEventListener("input", function (event) {
    if (surname.value.length > 10) {
        surname.setCustomValidity("¡Illo pon bien el apellido, ta mu largo¡");
    } else {
        surname.setCustomValidity("");
        /*
        surname.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                surname.value = "Morales"
            }
        })
        */
    }
  });


  
  radius.addEventListener("input", function (event) {
    if (radius.checked == true) {
        console.log("Boton pulsado  ")
  } else {
        console.log("Boton deseleccionado  ")
  }
});


  radius.addEventListener("input", function (event) {
      if (radius.checked == true) {

        radius.setCustomValidity("");
    } else {
        
        radius.setCustomValidity("¡Illo pulsa la casilla !");
    }
  });





/*
  // Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}
*/


