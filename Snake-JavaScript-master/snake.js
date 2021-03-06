// Sam's Production

// Creating Canvas
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");
// create the unit
const box = 32;

// load images
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// Load audio files

const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";
// Creating the snake

let snake = [];
snake[0] = {
    x : 9 * box,
    y : 10 * box
}

// Create the food ( Object )

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// Creating the score var

let score = 0;

// Controlling the snake using Function Direction and EventListener

let d;

document.addEventListener("keydown",direction);

function direction(event){
    if(event.keyCode == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(event.keyCode == 38 && d != "DOWN"){
        up.play();
        d = "UP";
    }else if(event.keyCode == 39 && d != "LEFT"){
        right.play();
        d = "RIGHT";
    }else if(event.keyCode == 40 && d != "UP"){
        down.play();
        d = "DOWN";
    }
}

// Check Collision Funcion
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}
// Draw everything to our convas

function draw(){

    ctx.drawImage(ground,0,0);

for(let i = 0; i < snake.length ; i++){
    ctx.fillStyle = ( i == 0 )? "red" : "black";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);

    ctx.strokeStyle = "red";
    ctx.strokeRect = (snake[i].x,snake[i].y,box,box);
}

   ctx.drawImage(foodImg, food.x, food.y);


   // Old Snake's Head position
   let snakeX = snake[0].x;
   let snakeY = snake[0].y;

   
   
   // Which Direction
   if( d == "LEFT") snakeX -= box;
   if( d == "UP") snakeY -= box;
   if( d == "RIGHT") snakeX += box;
   if( d == "DOWN") snakeY += box;
   
// Increamenting size of snake when it eats food
if(snakeX == food.x && snakeY == food.y){
    score++;
    eat.play();
    food = {
        x: Math.floor(Math.random()*17+1) * box,
        y: Math.floor(Math.random()*15+3) * box
    }
    // We don't remove the tail
}else{
    // Remove the tail
    snake.pop();
}

// Adding new head

  let newHead = {
    x : snakeX,
    y : snakeY
}

// Setting "Game Over" Rules Using ClearInterval+If&elseStatements

if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
    clearInterval(game);
    dead.play();
}


 
    snake.unshift(newHead);

   ctx.fillStyle = "white";
   ctx.font = "45px Changa one";
   ctx.fillText(score,2*box,1.6*box);
}

// Call draw function every 85 ms

let game = setInterval(draw,85);






