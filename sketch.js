var canvas;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  bgImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  
  background("navy");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
