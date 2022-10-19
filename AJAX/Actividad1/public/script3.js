const peticion = new XMLHttpRequest();
peticion.open("GET","http://localhost:3000/posts");
peticion.send();

parrafo = document.getElementById("contenido-post");



peticion.addEventListener("load", function() {
    if(peticion.status===200){
        let users = JSON.parse(peticion.responseText);

            parrafo.textContent = users[0].title

    }
})