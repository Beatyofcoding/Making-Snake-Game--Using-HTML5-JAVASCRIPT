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

// Draw everything to our convas

function draw(){

    ctx.drawImage(ground,0,0);
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