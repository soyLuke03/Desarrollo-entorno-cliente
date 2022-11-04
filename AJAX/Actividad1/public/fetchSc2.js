fetch('http://localhost:3000/posts')
    .then(response => response.json())   
    .then(misDatos => {

        for(let i = 0;i<misDatos.length;i++){

            let contenido = document.createTextNode("TITULO: ");
            let pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            let aTitulo = document.createTextNode(misDatos[i].title)
            let a = document.createElement("a");
            a.append(aTitulo);
            a.setAttribute("href",`Comments.html?id=${misDatos[i].id}`)
            document.getElementById("cuerpo").append(a);

            contenido = document.createTextNode("CONTENIDO: ");
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            contenido = document.createTextNode(misDatos[i].content);
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            contenido = document.createTextNode("AUTOR: ");
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            contenido = document.createTextNode(misDatos[i].author);
            pPost = document.createElement("p");
            pPost.append(contenido);
            document.getElementById("cuerpo").append(pPost);

            //Creamos un <BR>
            let br = document.createElement("br");
            let hr = document.createElement("hr");
            document.getElementById("cuerpo").append(br);
            document.getElementById("cuerpo").append(hr);
           

                   
                    
            //---------------
            document.getElementById("cuerpo").append(br);
        }
})
.catch(err => {
    console.log('Error en la petición HTTP: '+err.message);
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
        author: document.getElementById("autores").value
    }    
    fetch('http://localhost:3000/posts', {
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
    document.getElementById("msg").textContent = "Enviado con exito"
})
