function dibujarCanvas(){

    tablero.lineWidth = 8; 
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.STROKEsTYLE = "#8A3871";

    tablero.fillStyle = "transparent"
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();

}

function dibujarLinea(){

    tablero.lineWidth = 6; 
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.STROKEsTYLE = "#8A3871";

    let anchura = 600/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++){
        if(palabraSecreta.length <10){
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)

    } if (palabraSecreta.length > 10){
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(525 + (anchura*i), 640)

    }
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){

    tablero.font = "bold 52px inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],505+(anchura*index),620);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font = "bold 40px inter";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.fillText(letra, 535+(40*(10-errorsLeft)),710,40);

}


function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#000000"
    if(puntaje===8){/*poste */
        tablero.moveTo(700,500)
        tablero.lineTo(700,100)
        }
    if(puntaje===7){/*soporte*/
        tablero.moveTo(850,100)
        tablero.lineTo(700,100)
        }
    if(puntaje===6){/*cuerda*/
        tablero.moveTo(850,100)
        tablero.lineTo(850,171)
        }
    if(puntaje===5){/*cara*/
        tablero.moveTo(900,230)
        tablero.arc(850,230,50,0,Math.PI*2)
        }
    if(puntaje===4){/*torzo*/
        tablero.moveTo(850,389)
        tablero.lineTo(850,289)
        }
    if(puntaje===3){/*pierna izquierda*/
        tablero.moveTo(850,389)
        tablero.lineTo(800,450)
        }
    if(puntaje===2){/*pierna derecha*/
        tablero.moveTo(850,389)
        tablero.lineTo(890,450)
        }
    if(puntaje===1){/* brazo izquierdo */
        tablero.moveTo(850,330)
        tablero.lineTo(800,389)
        }
    if(puntaje===0){ /*brazo derecho*/ 
        tablero.moveTo(850,330)
        tablero.lineTo(890,389)
        }
    tablero.stroke()
    tablero.closePath()
  }

  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Game Over!",930,320)
  }

  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste,",950,320)
    tablero.fillText("Bien jugado!",930,360)
    setTimeout( recargar , 1000)
  }   

  function recargar(){
    location.reload(); 
  }
