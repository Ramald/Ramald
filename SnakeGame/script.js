//Carrega o as funções do jogo
window.onload = function() {
    canv = document.getElementById('canvas');
    ctx = canv.getContext("2d");

    //Variáveis
     snake = [];
     positionX = 10;
     positionY = 10;
     foodX = 15;
     foodY = 15;
     velX = 0;
     velY = 0;
     grid = 20;
     tam = 1;

     


    //Chamada da função a cada 100 milisegundos
    setInterval(jogo, 100)

    //Controles
    document.addEventListener("keydown", function(e){
        switch(e.keyCode) {
            //seta direita = 39
            case 39:
                velX = 1
                velY = 0
                break;
                //seta esquerda = 37
                case 37:
                velX = -1
                velY = 0
                break;
                //seta cima = 38
                case 38:
                    velY = -1
                    velX = 0
                    break;
                    //seta baixo = 40
                    case 40:
                        velY = 1
                        velX = 0
                        break;
        }
    })
}

//Controla o jogo
function jogo() {
  
    //Configuração da tela
    ctx.fillStyle = "#008000"
    //Distancia borda h, distancia borda v, largura e altura
    ctx.fillRect(0,0, canv.width, canv.height)

    //Deslocamento da cobra
    positionX += velX
    positionY += velY


    
    //Espelhamento
    if(positionX < 0) {
        positionX = grid
    }
    if(positionX > grid) {
        positionX = 0
    }
    
    if(positionY < 0) {
        positionY = grid
    }
    if(positionY > grid) {
        positionY = 0
    }


      //Configuração da cobra
      ctx.fillStyle ="#00f102";
      for(let i = 0; i < snake.length; i++) {
          ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1,grid-1)
          if(snake[i].x == positionX && snake[i].y == positionY) {
              tam = 1
          }
      }
  

    //Posicionando a cobra
    snake.push({x: positionX, y: positionY})

  
    //Apagando

    while(snake.length > tam) {
        snake.shift();
    }

    //Comida
    ctx.fillStyle = "#FF0000"
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1)

    //Comer
    if(positionX == foodX && positionY == foodY) {
        tam++
        foodX = Math.floor(Math.random()*grid)
        foodY = Math.floor(Math.random()*grid)

   
    }

}