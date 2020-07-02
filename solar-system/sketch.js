var sun,mercury,venus,earth,mars;

var sunImage,mercuryImage,VenusImage,earthImage,marsImage;
var angle = 0;
function preload(){
sunImage = loadImage('sun.png');
mercuryImage = loadImage('mercury.png');
venusImage = loadImage('venus.png');
earthImage = loadImage('earth.png');
marsImage = loadImage('mars.png');

}

function setup() {
  
  createCanvas(1200,1000);

  sun = createSprite(0,0,10,10);
  sun.addImage(sunImage);
  sun.setCollider("circle",0,0,sun.width/2);
  
  sun.scale = 0.2;

  mercury = createSprite(340, 260, 50, 50);
  mercury.setCollider("circle",0,0,mercury.width/2);
  mercury.addImage(mercuryImage);
  mercury.scale = 0.22;
 

  Venus = createSprite(500,260,50,50);
  Venus.addImage(venusImage);
  Venus.setCollider("circle",0,0,Venus.width/2);
  Venus.scale = 0.15;
 

  earth = createSprite(740,260,50,50);
  earth.addImage(earthImage);
  earth.setCollider("circle",0,0,earth.width/2);
  earth.scale = 0.14;
 
  
  mars = createSprite(940,260,50,50);
  mars.addImage(marsImage);
  mars.setCollider("circle",0,0,mars.width/2);
  mars.scale = 0.15;
  
 
}

function draw() {
  background(2);  
  if(frameCount%2==0){
    sun.scale=sun.scale+0.001
  }
  if (sun.collide(mercury)) {
    mercury.destroy();
  }
  if (sun.collide(Venus)) {
   Venus.destroy();
  }
  if (sun.collide(earth)) {
   earth.destroy();
  }
  if (sun.collide(mars)) {
   mars.destroy();
  }
  translate(width/2,height/2);
 rotate(angle);
 angle= angle+0.3;



  drawSprites();
}