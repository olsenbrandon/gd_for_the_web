var input, button, question;
var up, right, left, down, upright;
var thoughtsOn = [' The Government ',' The Color Red ', ' Education ', ' Donuts ', ' The Republican Party ', ' The 2020 Election ', ' Coffee', ' Robots ', ' Pop Music ', ' Self-driving Cars ', ' Game of Thrones '];
var newEmail, emailName;

function preload() {
  img = loadImage('img/send.svg');
}

function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);
  
  // INPUT BOX
  input = createInput([random(thoughtsOn)],['text']);
  input.position(windowWidth/4, windowHeight/3);
  input.size(windowWidth/2,windowHeight/3);
  input.style('font-family', 'sans-serif');
  input.style('background-color', '#00009B');
  input.style('color', '#EE2845');
  input.style('font-size', '2rem');
  input.style('vertical-align', 'text-top');
  input.style('border','0px');

  // SUBMIT BUTTON
  button = createButton(' '+'submit'+' ');
  button.position(width/2 - button.width/2, height-height/4);
  button.mousePressed(mail2);
  button.style('color','#EE2845' );
  button.style('background-color', '#00009B');
  button.style('border','none');
  button.style('font-size', '1.6rem');
  button.style('font-family','sans-serif');
  
  // WHAT ARE YOUR THOUGHTS ON...
  question = createElement('h2', 'What Are Your Thoughts On...');
  question.position(windowWidth/4, height/6);
  question.style('font-size','3rem');
  question.style('font-family','sans-serif');
  question.style('color','#00009B');
  question.style('text-align','center');
  
  

  // PAGE STANDARDS
  textSize(50);
  imageMode(CENTER);
  
  // ROTATING NAMES ROTATING NAMES ROTATING NAMES ROTATING NAMES
  
  // UP
  up=createElement('h4','nasa');
  up.position(width/2-7,20);
  up.style('font-size','1rem');
  up.style('color','#00009B');
  up.style('font-family','sans-serif');
  up.hide();
  
  // UPRIGHT
  upright=createElement('h4','lockheed martin');
  upright.position(width-200,100);
  upright.style('font-size','1rem');
  upright.style('color','#00009B');
  upright.style('font-family','sans-serif');
  upright.hide();
  
  // RIGHTUP
  rightup=createElement('h4','fcc');
  rightup.position(width-400,50);
  rightup.style('font-size','1rem');
  rightup.style('color','#00009B');
  rightup.style('font-family','sans-serif');
  rightup.hide();

  // RIGHT
  right=createElement('h4','the tea party');
  right.position(width-90,height/2);
  right.style('font-size','1rem');
  right.style('color','#00009B');
  right.style('font-family','sans-serif');
  right.hide();
  
  // RIGHTDOWN
  rightdown=createElement('h4','fox news');
  rightdown.position(width-200,height-100);
  rightdown.style('font-size','1rem');
  rightdown.style('color','#00009B');
  rightdown.style('font-family','sans-serif');
  rightdown.hide();
  
  // DOWNRIGHT
  downright=createElement('h4','the nra');
  downright.position(width-400,height-50);
  downright.style('font-size','1rem');
  downright.style('color','#00009B');
  downright.style('font-family','sans-serif');
  downright.hide();
  
  // DOWN
  down=createElement('h4','church of satan');
  down.position(width/2-7,height-50);
  down.style('font-size','1rem');
  down.style('color','#00009B');
  down.style('font-family','sans-serif');
  down.hide();
  
  // DOWNLEFT
  downleft=createElement('h4','equifax');
  downleft.position(400,height-50);
  downleft.style('font-size','1rem');
  downleft.style('color','#00009B');
  downleft.style('font-family','sans-serif');
  downleft.hide();
  
  // LEFTDOWN
  leftdown=createElement('h4','facebook');
  leftdown.position(100,height-100);
  leftdown.style('font-size','1rem');
  leftdown.style('color','#00009B');
  leftdown.style('font-family','sans-serif');
  leftdown.hide();
  
  // LEFT
  left=createElement('h4','ri aclu');
  left.position(50,height/2);
  left.style('font-size','1rem');
  left.style('color','#00009B');
  left.style('font-family','sans-serif');
  left.hide();
  
  // LEFTUP
  leftup=createElement('h4','noaa');
  leftup.position(100,100);
  leftup.style('font-size','1rem');
  leftup.style('color','#00009B');
  leftup.style('font-family','sans-serif');
  leftup.hide();
  
  // UPLEFT
  upleft=createElement('h4','spaceX');
  upleft.position(400,50);
  upleft.style('font-size','1rem');
  upleft.style('color','#00009B');
  upleft.style('font-family','sans-serif');
  upleft.hide();
  
  
}




function draw(){
  background(238,40,69);
  
  
  
  // HIDE/SHOW ---- RIGHT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 75 && frameCount*2%360 < 105) {
      right.show();
      push();
      newEmail=['contact@TeaParty.org'];
      emailName=['Tea%20Party'];
      pop();
      
  }  else {
      right.hide();
  }}
  
  // HIDE/SHOW ---- LEFT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 255 && frameCount*2%360 < 285) {
      left.show();
      push();
      newEmail=['riaclu@riaclu.org'];
      emailName=['Rhode%20Island%20ACLU'];
      pop();
  }  else {
      left.hide();
  }}
  
  // HIDE/SHOW ---- DOWN
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 165 && frameCount*2%360 < 195) {
      down.show();
      push();
      newEmail=['HPNadramia@churchofsatan.com'];
      emailName=['Church%20of%20Satan'];
      pop();
  }  else {
      down.hide();
  }}
  
  // HIDE/SHOW ---- UP
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 < 15 || frameCount*2%360 > 345) {
      up.show();
      push();
      newEmail=['nssc-contactcenter@nasa.gov'];
      emailName=['NASA'];
      pop();
  }  else {
      up.hide();
  }}
  
  // HIDE/SHOW ---- UPRIGHT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 45 && frameCount*2%360 < 75) {
      upright.show();
      push();
      newEmail=['corporate.ethics@lmco.com'];
      emailName=['Lockheed%20Martin'];
      pop();
  }  else {
      upright.hide();
  }}
  
  // HIDE/SHOW ---- RIGHTUP
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 15 && frameCount*2%360 < 45) {
      rightup.show();
      push();
      newEmail=['Ajit.Pai@fcc.gov'];
      emailName=['FCC'];
      pop();
  }  else {
      rightup.hide();
  }}
  
  // HIDE/SHOW ---- RIGHTDOWN
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 105 && frameCount*2%360 < 135) {
      rightdown.show();
      push();
      newEmail=['comments@foxnewsinsider.com'];
      emailName=['Fox%20News'];
      pop();
  }  else {
      rightdown.hide();
  }}
  
  // HIDE/SHOW ---- DOWNRIGHT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 135 && frameCount*2%360 < 165) {
      downright.show();
      push();
      newEmail=['membership@nrahq.org'];
      emailName=['NRA'];
      pop();
  }  else {
      downright.hide();
  }}
  
  // HIDE/SHOW ---- DOWNLEFT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 195 && frameCount*2%360 < 225) {
      downleft.show();
      push();
      newEmail=['cust.serv@equifax.com'];
      emailName=['Equifax'];
      pop();
  }  else {
      downleft.hide();
  }}
  
  // HIDE/SHOW ---- LEFTDOWN
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 225 && frameCount*2%360 < 255) {
      leftdown.show();
      push();
      newEmail=['press@fb.com'];
      emailName=['Facebook'];
      pop();
  }  else {
      leftdown.hide();
  }}
  
  // HIDE/SHOW ---- LEFTUP
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 285 && frameCount*2%360 < 315) {
      leftup.show();
      push();
      newEmail=['NWS.communications.office@noaa.gov'];
      emailName=['NOAA'];
      pop();
  }  else {
      leftup.hide();
  }}
  
  // HIDE/SHOW ---- UPLEFT
  if (frameCount*2%360 <= 360) {
   // If you go off screen.
    if (frameCount*2%360 > 315 && frameCount*2%360 < 345) {
      upleft.show();
      push();
      newEmail=['MEDIA@SPACEX.COM'];
      emailName=['SpaceX'];
      pop();
  }  else {
      upleft.hide();
  }}

  
  // move the origin to the pivot point
  translate(windowWidth/2, windowHeight/2); 

  // then rotate the grid around the pivot point by a
  // number of degrees equal to the frame count of the sketch
  rotate(radians(frameCount*2));

  // and draw the square at the origin
  image(img,0,0);
  
}

function mousePressed () {
  loop();
}
  
  function mail2() {

  
  var respond = input.value();
  question.html('Click To Send Your Thoughts');
  input.value('');
  input.hide();button.hide();
  
  
  
  console.log(newEmail);

  var sendButton;
  sendButton = createA("mailto:"+newEmail+"?Subject=Some%20Thoughts&body=Hello%20"+emailName+"%0D%0A%0D%0A"+respond+"%20", 'SEND');
  sendButton.position(windowWidth/2-65, windowHeight/2-25);
  
  sendButton.style('color', '#EE2845');
  sendButton.style('font-family', 'sans-serif');
  sendButton.style('opacity','0.0');
  sendButton.style('font-size','3rem');
  sendButton.style('text-decoration','none');
  
}


