var puntaje= 7;
var intentos=0;

const seleccionIncorrecta=()=>{
    document.getElementById("mensaje").innerHTML="Pokémon incorrecto, intentalo nuevamente"
    document.getElementById("mensaje").style="border: 2px solid black"
}
const reiniciar=()=>{
        
        document.getElementById("pokemon").src ="img/pnegro.jpg"
        document.getElementById("puntaje").innerHTML="puntaje:"
        document.getElementById("intentos").innerHTML="intentos: "
        document.getElementById("mensaje").innerText=""
        document.getElementById("mensaje").style.border="none"
}

const score=(puntaje, intentos)=>{
    document.getElementById("puntaje").innerHTML="puntaje: "+puntaje
    document.getElementById("intentos").innerHTML="intento: "+(intentos+1)
   
   
}


const seleccion=(opCorrecta)=>{

    if(intentos<3){
        switch(opCorrecta) {
            case "keldeo-ordinary":
                seleccionIncorrecta()
                puntaje = puntaje-2
                score(puntaje, intentos)
                break;
            case "drilbur":
                seleccionIncorrecta()
                puntaje = puntaje-2
                score(puntaje, intentos)
                break;
            case "ninjask":
                seleccionIncorrecta()
                puntaje = puntaje-2
                score(puntaje, intentos)
                break;
            case "excadrill":
                document.getElementById("mensaje").innerHTML="Felicitaciones, has seleccionado la opción correcta"
                document.getElementById("pokemon").src ="img/pcolor.jpg"
                puntaje = puntaje-2
                score(puntaje, intentos)
                intentos=6;
                break;
            case"reiniciar":
            puntaje= 7;
            intentos=0;
            reiniciar( )
            break;
      } 
      
    }else{
        intentos = 0;
        puntaje=7;
        document.getElementById("pokemon").src ="img/pnegro.jpg"
        document.getElementById("puntaje").innerHTML="puntaje:"
        document.getElementById("intentos").innerHTML="intento: "
        document.getElementById("mensaje").style.border="none"
        document.getElementById("mensaje").innerText=""
    }
    intentos = intentos+1
   
}