let divs = document.getElementById("gallery");


function clickDown(e){
    console.log(e.target.innerText);
    e.target.classList.toggle("clickDown");
    if(e.target.className != "clickDown"){
       // e.target.classList.add("clickUp")
    }
    
}


function MsOn(e){

    e.target.classList.add("clickOver")

}


function MsOff(e){

    e.target.classList.remove("clickOver")

}



divs.addEventListener('click',clickDown);
divs.addEventListener('mouseover',MsOn);
divs.addEventListener('mouseout',MsOff);
