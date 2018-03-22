var canvas;
var input, button, greeting;

function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  colorMode(HSB);
  
  input = createInput('HOW DO YOU FEEL BOUT IT');
  input.position(windowWidth/2, windowHeight/2);

  button = createButton('send');
  button.position(100, windowHeight/2);
  button.mousePressed(greet);
  
  button = createButton('send');
  button.position(windowWidth-100, windowHeight/2);
  button.mousePressed(greet);
}
  



function greet() {
  var bodytext = input.value();
  greeting.html(' '+bodytext+' ');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(bodytext, 0, 0);
    pop();
  }
}



function draw() {
  
  
  
  background(235,93,70);
  fill(235, 93, 60);
  noStroke();
  rect(windowWidth/2,50,4,windowHeight-100);
  fill(235, 93, 60);
  noStroke();
  rect(50,windowHeight/2,windowWidth-100,4);
  
  textAlign(CENTER);
  textSize(100);
  fill(235, 93, 100 );
  text('HOW DO YOU FEEL ABOUT THE MEDIA?',0,windowHeight/8,windowWidth,windowWidth);
  

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}