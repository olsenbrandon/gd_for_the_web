var canvas;

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  colorMode(HSB, 100);
  
}

function draw() {
  background(2,100,2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}