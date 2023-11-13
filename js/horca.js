//Selectores
let pantalla = document.querySelector("canvas");
let botonNuevoJuego = document.getElementById("btn-nuevo-juego").style.display = "none"
let btnSalirDesaparecer = document.getElementById("btn-salir").style.display = "none"
let divAgregarPalabra = document.getElementById("agregar-palabra").style.display = 'none';
let btnNuevoJuego = document.getElementById("btn-nuevo-juego");
let btnSalir = document.getElementById("btn-salir");
let btnCancelar = document.getElementById("btn-cancelar");

let palabras = ["ALURA","ORACLE","COCIENCIA","ESFUERZO","COMPRENSION"]
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let palabraCorrecta ="";
let letras = [];
let errores = 8;
let letrasIncorrectas=[];
let numeroDeErrores = "8";
let letraElegida = [];

/*eventos*/
document.getElementById("iniciar-juego").onclick = () => {
    iniciarJuego();
  }

  // captura el id "btn-guardar", guarda la palabra agregada y inicia el juego
document.getElementById("btn-guardar").onclick = () => {
    guardarPalabra();
   
  }
  
  //actualiza la pantalla cuando el usuario hace click en el botón "nuevo juego"
  btnNuevoJuego.addEventListener("click", function () {
    location.reload();
  });
  
  //actualiza la pantalla cuando el usuario hace click en el botón "salir"
  btnSalir.addEventListener("click", function () {
    location.reload();
  });
  
  //actualiza la pantalla cuando el usuario hace click en el botón "cancelar"
  btnCancelar.addEventListener("click", function () {
    location.reload();
  });
  



  //palabraSecreta

function escojerPalabraSecreta (){
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    return palabra;
    
}
console.log(palabraSecreta);
// verifica cual es la letra en que el usuario hizo clic
function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
      
    }
    else {
      letras.push(key)
      return true
    }
  }  

function comprobarLetra(key){ /* Se utiliza el parametro (key) para poder tomar las letras o numeros del teclado */
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){/* aqui se sta haceindo una validacion para comprobar que las letras del alfabeto de la a-z en mayusculas */
    letras.phus(key); /* para enpujar el valor */
    console.log(key);
    return estado; /* para devolver el valor*/
    }else{
        estado=true;
        console.log(key);
        return estado;
    }

}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
  }
  

function anadirLetraIncorrecta(letter){
    if (palabraSecreta.indexOf(letter) <= 0) {
        errores -= 1
    }
    console.log(errores);
}

function verificarFinJuego(letra) {
    //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
   if(letraElegida.length < palabraSecreta.length) { 
      //incluye las letras ya digitadas en el array
      letrasIncorrectas.push(letra);
      
  
      //valida se el usuário cometió el numero maximo de errores
      if (letrasIncorrectas.length > numeroDeErrores) {
        perdiste()
      }
      else if(letraElegida.length < palabraSecreta.length) {
        anadirLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra, errores)
        
      }
    }
    console.log(letra)
   } 

//Verifica si el usuario ha ganado
function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
  
      ganaste()
      
    }
}  

//impide que teclas como shift y otras, sean consideradas errores y sean escritas
function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }

function ensenarPantallaDeAgregarPalabra() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("agregar-palabra").style.display = "block";
  
  }
  
  // guarda la palabra que el usuario quiere agregar
function guardarPalabra() {
  
    //captura lo que el usuario ha digitado
    let nuevaPalabra = document.getElementById('input-nueva-palavra').value;
  
    // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
    if(nuevaPalabra !== ""){
      palabras.push(nuevaPalabra.toUpperCase());
      alert('La palabra fue guardada')
      
    
      // haz con que los componentes de la pantalla de agregar palabra desaparezcan
      document.getElementById("agregar-palabra").style.display = "none";
      iniciarJuego();
    }
    else{
      alert("Ninguna palabra ha sido digitada")
    }
  
}



//iniciar juego
function iniciarJuego(){

    document.getElementById("div-desaparece").style.display = 'none';
    
    escojerPalabraSecreta ();
    dibujarCanvas()
    dibujarLinea()

    document.getElementById("btn-nuevo-juego").style.display = "block"
    document.getElementById("btn-salir").style.display = "block"
    document.onkeydown = (e) => { /* esta es una funcion con flecha espara decri que hay una funcion adentro de otra funcion y se representa  de esta manera => y aque se esat diceindo que va a funcionar con la tecla precionada del teclado se activa */
        let letra= e.key.toUpperCase(); /* aqui es para poner la letras en mayusculas*/

        if (letrasIncorrectas.length <= numeroDeErrores) {
            if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
              if (palabraSecreta.includes(letra)) {
                adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
                for (let i = 0; i < palabraSecreta.length; i++) {
                  if (palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i)
                    verificarVencedor(letra)
      
                  }
                }
      
              }
              // si el usuario cometió más errores de los que son permitidos, 
              //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
              else {
                if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
                dibujarAhorcado(errores)
                verificarFinJuego(letra)
              }
            }
          }else {
            alert('has superado el límite de letras incorrectas')
        }
    }
}
function agregarPalabra(){

    document.getElementById("desaparece").style.display = "none";

}