const peticion = new XMLHttpRequest();


let URL = location.search;

console.log(URL)

peticion.open("GET",`http://localhost:3000/posts${URL}`);
peticion.send();
peticion.addEventListener('load', (e) => {
    if(peticion.status === 200){
        let reqPost = JSON.parse(peticion.responseText);
        console.log(reqPost)


        const peticionComms = new XMLHttpRequest();
        peticionComms.open("GET",`http://localhost:3000/comments?idPost=${reqPost[0].id}`)
        peticionComms.send();
        peticionComms.addEventListener('load', (e) => {
            if(peticion.status === 200){
                let reqComms = JSON.parse(peticionComms.responseText);
                for (let i = 0; i < reqComms.length; i++){
                    let contenido = document.createTextNode(reqComms[i].contenido);
                    let p = document.createElement("p");
                    p.append(contenido);

                    document.getElementById("contenido-post").append(p);
                }
            }
        })

    }
})


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser={
        content: document.getElementById("content").value
    }    

    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/comments');
    peticion.setRequestHeader('Content-type', 'application/json');  
    // Siempre tiene que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newUser));              
    // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    document.getElementById("msg").textContent = "Enviado con exito"
})
