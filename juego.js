var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 700
gravedad = 1.5

var FPS = 60

// Caracteristicas
var personaje ={
    x:100,
    y:150,
    w:50,
    h:50
}

//Variables Imagenes

   //llamando Imagenes
var bird = new Image()
bird.src = "img/bird.png"

var background = new Image()
background.src = "img/background.png"

var suelo = new Image()
suelo.src = "img/suelo.png"

var tuberiaNorte = new Image()
tuberiaNorte.src = "img/tuberiaNorte.png"

var tuberiaSur = new Image()
tuberiaSur.src = "img/tuberiaSur.png"


//Control
function keyDown(){
    personaje.y -=35
}

// Bucle
setInterval(loop, 1000/FPS)

// Se dibuja el Personaje
function loop() {
    contexto.clearRect(0,0,300,700) //Limpia el canvas

    //Fondo
    contexto.drawImage(background,0,0)

    // Gravedad (Personaje cayendo)
    contexto.fillStyle="rgba(100,0,0,1)"
    contexto.fillRect(personaje.x,personaje.y,personaje.w,personaje.h)




    //Tuberias


    personaje.y += gravedad

}

window.addEventListener("keydown",keyDown)