var hypnoticBall, database;
var position;

var  form, player, game ;
var playerCount;
var gameState=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game=new Game ();
console.log(playerCount);

  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    drawSprites();
  
}

 