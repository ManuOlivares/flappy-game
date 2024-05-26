var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530
gravedad = 1.5

// Variables
var FPS = 60

// Caracteristicas
var personaje ={
    x:50,
    y:150,
    w:50,
    h:50
}

var tuberias = new Array()
//Ubicacion de la primera tuberia
tuberias[0] = {
    x:contexto.canvas.width,
    y:0
}

var score = 0;

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
    contexto.clearRect(0,0,300,530) //Limpia el canvas

    //Fondo
    contexto.drawImage(background,0,0)
    contexto.drawImage(suelo,0,contexto.canvas.height - suelo.height)

    // Gravedad (Personaje cayendo)
    //contexto.fillStyle="rgba(100,0,0,1)"
    //contexto.fillRect(personaje.x,personaje.y,personaje.w,personaje.h)
    contexto.drawImage(bird,personaje.x,personaje.y)


    //Tuberias
    for(var i = 0; i < tuberias.length; i++){
        var comnstante = tuberiaNorte.height + 80
        contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y)
        contexto.drawImage(tuberiaSur,tuberias[i].x,tuberias[i].y + comnstante)
        tuberias[i].x--

        if(tuberias[i].x == 150){
            tuberias.push({
                x:contexto.canvas.width,
                y: Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
            })
        }

        // Coliciones
        if(personaje.x + bird.width >= tuberias[i].x && 
            personaje.x <= tuberias[i].x + tuberiaNorte.width &&
            (personaje.y <= tuberias[i].y + tuberiaNorte.height || 
                personaje.y + bird.height >= tuberias[i].y + comnstante) ||
                personaje.y + bird.height >= contexto.canvas.height - suelo.height){
            location.reload()
        }

    }


    



    //Condiciones
    personaje.y += gravedad
    contexto.fillStyle = "rgba(0,0,0,1)"
    contexto.font = "25px Arial"
    contexto.fillText("Score: "+score,10,contexto.canvas.height-40)
}
    //Eventos
window.addEventListener("keydown",keyDown)