const peticion = new XMLHttpRequest();

peticion.open("GET","http://localhost:3000/posts");
peticion.send();


peticion.addEventListener("load", function() {
    if(peticion.status===200){
        let posts = JSON.parse(peticion.responseText);


        for(let i = 0;i<posts.length;i++){
            // +  + ". " + " Autor: " + posts[i].author

            let contenido = document.createTextNode("Titulo: ");
            let pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            let aTitulo = document.createTextNode(posts[i].title)
            let a = document.createElement("a");
            a.append(aTitulo);
            a.setAttribute("href",`Comments.html?id=${posts[i].id}`)
            document.getElementById("cuerpo").append(a);

            contenido = document.createTextNode("Contenido: ");
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            contenido = document.createTextNode(posts[i].content);
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            //Creamos un <BR>
            let br = document.createElement("br");
            document.getElementById("cuerpo").append(br);
            document.getElementById("cuerpo").append(br);
           

                   
                    
            //---------------
            document.getElementById("cuerpo").append(br);
        }
    }
})

const petAutor = new XMLHttpRequest();
petAutor.open("GET","http://localhost:3000/users");
petAutor.send();
petAutor.addEventListener('load', (e) => {
    if(petAutor.status === 200){
        let autores = JSON.parse(petAutor.responseText)
        for (let i = 0;i<autores.length;i++){
            let select = document.getElementById("autores");
            let option = document.createElement("option");
            let text = document.createTextNode("");
            text = document.createTextNode(autores[i].nick)

            option.append(text);
            select.append(option);
        }
    }
})


document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    const newUser={
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        content: document.getElementById("autores").value
    }    


    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/posts');
    peticion.setRequestHeader('Content-type', 'application/json');  
    // Siempre tiene que estar esta l??nea si se env??an datos
    peticion.send(JSON.stringify(newUser));              
    // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    document.getElementById("msg").textContent = "Enviado con exito"
})









