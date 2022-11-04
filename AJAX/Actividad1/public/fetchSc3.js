

let URL = location.search;

/**
 * Recoge los comentarios del Post accedido
 */
fetch(`http://localhost:3000/posts${URL}`)
  .then(response => response.json())    // tenemos los datos en formato JSON, los transformamos en un objeto
  .then(myData => {      
    let reqPost = myData;
      fetch(`http://localhost:3000/comments?idPost=${reqPost[0].id}`)
      .then(response => response.json())    // tenemos los datos en formato JSON, los transformamos en un objeto
      .then(myOtherData => {      
          let reqComms = myOtherData;
          for (let i = 0; i < reqComms.length; i++){
              let contenido = document.createTextNode(reqComms[i].contenido);
              let p = document.createElement("p");
              p.append(contenido);

              document.getElementById("contenido-post").append(p);
          }    
    }) 
  .catch(err => console.error(err));
   }) 
  .catch(err => console.error(err));



/**
 * Funcion que añade un comentario al Post accedido
 */
function addComment(){
    const newComment={
        contenido: document.getElementById("contenido").value,
        idAuthor: document.getElementById("autores").value,
        idPost: URL.toString().substring(4)
      }
      //console.log(newComment)
      if(newComment.idAuthor != "..." && newComment.contenido.trim() != ""){
        fetch('http://localhost:3000/comments', {
          method: 'POST', 
          body: JSON.stringify(newComment), // los datos que enviamos al servidor en el 'send'
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
            if(response.ok) {
                document.getElementById("msg").textContent = "Enviado con éxito"
                return response.json();
            }
            return Promise.reject(response)
        })
        .then(datos => datosServidor=datos)
        .catch(err => {
          console.log('Error en la petición HTTP: '+err.message);
        }) 
    }
}

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



  