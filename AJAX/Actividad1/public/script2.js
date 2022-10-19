const peticion = new XMLHttpRequest();

peticion.open("GET","http://localhost:3000/posts");
peticion.send();


peticion.addEventListener("load", function() {
    if(peticion.status===200){
        let posts = JSON.parse(peticion.responseText);


        for(let i = 0;i<posts.length;i++){

            let contenido = document.createTextNode("Titulo: " + posts[i].title + ". " + " Autor: " + posts[i].author);
            let pTitles = document.createElement("p");
            pTitles.append(contenido)
            document.getElementById("cuerpo").append(pTitles);
            //Creamos un <BR>
            let br = document.createElement("br");
            document.getElementById("cuerpo").append(br);
            //---------------

            //Añadimos los COMMENTS
            let comments = document.createTextNode("Comentarios");
            let p = document.createElement("p");
            p.append(comments);
            document.getElementById("cuerpo").append(p);

                //Añadimos la estructura para buscar los comentarios
                const pComments = new XMLHttpRequest();

                pComments.open("GET",`http://localhost:3000/comments?idAuthor=${posts[i].id}`);
                pComments.send();

                pComments.addEventListener("load", (e) => {
                    if(peticion.status===200){
                        let comms = JSON.parse(pComments.responseText);
                        for(let i = 0;i<comms.length;i++){
                            
                            let comentario = document.createTextNode(comms[i].contenido);
                            let pComentario = document.createElement("p");
                            pComentario.append(comentario);
                            
                            document.getElementById("cuerpo").append(pComentario);
                            document.getElementById("cuerpo").append(br);
                            
                            
                        }
                    }
                })
                //---------------
            document.getElementById("cuerpo").append(br);
        }
        
        

    }
})




document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser={
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        author: document.getElementById("author").value
    }    

    titlePost = newUser.title;
    nombreAutor = newUser.author;

    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/posts');
    peticion.setRequestHeader('Content-type', 'application/json');  
    // Siempre tiene que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newUser));              
    // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    document.getElementById("msg").textContent = "Enviado con exito"
})


//Parte de los posts

    document.getElementById("contenido-post").textContent = "hola";








