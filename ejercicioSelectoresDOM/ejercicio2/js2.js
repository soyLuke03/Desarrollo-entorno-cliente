function mostrarMas(){

    let enlace = document.getElementById("enlace");
    enlace.style.display="none";

    let texto = document.getElementById("adicional");
    texto.classList.remove("oculto");
    texto.classList.add("visible");

}