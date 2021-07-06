var sstart;
function setup() {
  createCanvas(800, 800);
  sstart=(second()+1)*1000;
}

function draw() {
  background(0);
  var s=sstart;
  s+=millis();
  
  //var m=minute();
  var m=minute()*60+second();
  var h=hour();
  console.log(second(),s);
  
  translate(width/2,height/2);
  rotate(-HALF_PI);
  var sec=map(s,0,60000,0,TWO_PI);
  var min=map(m,0,3600,0,TWO_PI);
  var ho=map(h%12,0,12,0,TWO_PI);
  noFill();
  
  strokeWeight(15);
  
  //hours
  stroke(55,150,255);
  arc(0,0,600,600,0*3,ho);
  push();
  rotate(ho);
  line(0,0,100,0);
  pop();
  
   //minutes
  stroke(255,50,255);
  arc(0,0,550,550,0*3,min);
  push();
  rotate(min);
  line(0,0,150,0);
  pop();
  
  //seconds
  stroke(50,255,100);
  arc(0,0,500,500,0*3,sec);
  push();
  rotate(sec);
  line(0,0,200,0);
  pop();
  
 
  
  
  stroke(255);
  point(0,0);
}