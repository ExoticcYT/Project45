var dude;
var ground;
var groundImg;
var cloudpiece, cloudpieceA, cloudpieceB;
var cloudImg;
var cloudsGroup
var sun;
var running, jumping;
  
function preload(){
  running = loadAnimation("images/frameA.png", "images/frameB.png", "images/frameC.png", "images/frameD.png");
  //bg = loadGif("images/yeet.gif");
  jumping = loadAnimation("images/this1.png", "images/this2.png", "images/this3.png", "images/this4.png", "images/this5.png");
  groundImg = loadImage("images/realground.png");
  cloudImg = loadImage("images/pixelcloud.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth +500,windowHeight-80,windowWidth+1000,200);
  ground.shapeColor = "black";
  ground.addImage(groundImg);
  ground.scale = 11;
  dude = createSprite(windowWidth/5, ground.y - 150, 50, 50);
  dude.addAnimation("running", running);
  dude.addAnimation("jumping", jumping);
  //dude.changeAnimation(jumping);
  dude.scale = 0.5;
  cloudsGroup = createGroup();
}

function draw() {
  background("skyblue");
  dude.collide(ground);
  //console.log(ground.width);
  if(keyDown(32) &&  dude.y >= windowHeight - 450){
    dude.velocityY = -20;
    /*if(dude.velocityY === -20 || dude.velocityY === 2){
      dude.changeAnimation("jumping", jumping);
      dude.scale = 0.2;
    } else if(dude.isTouching(groundImg)){
      dude.changeAnimation("running", running);
      dude.scale = 0.5;
    }*/
  }
  dude.velocityY += 2;

  ground.velocityX = -20;

  if(ground.x === width){
    ground.x += 1000;
  }

  spawnClouds();
  drawSprites();
}

function spawnClouds(){
  if(World.frameCount % 30 === 0){
    cloudpiece = createSprite(dude.x + (windowWidth/2+700), random(windowHeight - windowHeight, windowHeight - windowHeight + 300), 50, 50);
    cloudpiece.shapeColor = "white";
    cloudpiece.lifetime = height;
    cloudpiece.velocityX = -50
    cloudpiece.addImage(cloudImg);
    cloudpiece.scale = 0.5;
    //console.log(cloudpiece.lifetime);
    cloudsGroup.add(cloudpiece);
  }
  //cloudpiece.lifetime = windowWidth;
}

/*function moveFloor(){
  if(ground.x === windowWidth)
}*/