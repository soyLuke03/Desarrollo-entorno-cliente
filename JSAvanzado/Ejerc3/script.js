let texto = document.getElementById("texto");
let boton = document.getElementById("boton");
function pulsarBoton(){
    function pulsarTecla(tecla){
        console.log(tecla.key)
        document.getElementById("volcado").innerText = texto.value;
    }
    texto.addEventListener('keyup',pulsarTecla);
}
boton.addEventListener('click',pulsarBoton);

navigator.geolocation.getCurrentPosition((e)=>console.log(e))
