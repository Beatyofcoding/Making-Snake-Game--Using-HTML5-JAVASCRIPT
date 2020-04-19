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
        d = "LEFT";
    }else if(event.keyCode == 38 && d != "DOWN"){
        d = "UP";
    }else if(event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
    }else if(event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }
}
// Draw everything to our convas

function draw(){

    ctx.drawImage(ground,0,0);

for(let i = 0; i < snake.length ; i++){
    ctx.fillStyle = ( i == 0 )? "green" : "white";
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
if(snakeX == food.x && snakeY == snakeY){
    score++;
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

    snake.unshift(newHead);

   ctx.fillStyle = "white";
   ctx.font = "45px Changa one"
   ctx.fillText(score,2*box,1.6*box);
}

// Call draw function every 50 ms

let game = setInterval(draw,50);





// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";