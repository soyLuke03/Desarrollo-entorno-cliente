
let numeroEmpleado = 3;
let arrayDeDNI = [];

let tabla = document.getElementById("tabla");
let tr = document.createElement("tr");
let td = document.createElement("td");



function insertar(){

let numeroEmp = numeroEmpleado + 1;
numeroEmpleado += 1;

let tr = document.createElement("tr");
for(let i = 1; i<tabla.getElementsByTagName("tr").length; i++){
    arrayDeDNI.push(tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText);
}


let dniEmp = prompt("DNI");


while (arrayDeDNI.includes(dniEmp)){
    dniEmp = prompt("DNI no válido. Prueba otro");
}

let nombreEmp = prompt("Nombre");
let apellidosEmp = prompt("Apellidos");


let nodoNumeroEmp = document.createTextNode(numeroEmp);
let nodoDni = document.createTextNode(dniEmp);
let nodoNombre = document.createTextNode(nombreEmp);
let nodoApellidos = document.createTextNode(apellidosEmp);

tabla.appendChild(tr);

tr.append(td);
td.appendChild(nodoNumeroEmp)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoDni)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoNombre)
td = document.createElement("td");

tr.append(td);
td.appendChild(nodoApellidos)

document.getElementById("numeroEmp").innerText = numeroEmp;

}

function eliminar(){
    let dniEmp = prompt("DNI");

    for(let i = 1; i<tabla.getElementsByTagName("tr").length; i++){
        arrayDeDNI.push(tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText);
    }

    if(arrayDeDNI.includes(dniEmp)){
        for(let i = 1; i<tabla.getElementsByTagName("tr").length; i++){
            if(tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText == dniEmp){

                tabla.removeChild(tabla.children[i]);

                numeroEmpleado -= 1;
                document.getElementById("numeroEmp").innerText = numeroEmpleado;
            }
            
        }
    }
    else{
                alert("No existe el empleado")
            }

}

function modificar(){

    let dniEmp = prompt("DNI");
    
    for(let i = 1; i<tabla.getElementsByTagName("tr").length; i++){
        arrayDeDNI.push(tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText);
    }

    if(arrayDeDNI.includes(dniEmp)){
        for(let i = 1; i<tabla.getElementsByTagName("tr").length; i++){
            if(tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText == dniEmp){

                let nuevoDni = prompt("Nuevo DNI");

                while (arrayDeDNI.includes(nuevoDni)){
                    nuevoDni = prompt("DNI no válido. Prueba otro");
                }

                tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText = nuevoDni;
                tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerText = prompt("Nuevo Nombre");
                tabla.getElementsByTagName("tr")[i].getElementsByTagName("td")[3].innerText = prompt("Nuevo apellido");
                
            }
            
        }
    }
    else{
                alert("No existe el empleado")
            }

}
