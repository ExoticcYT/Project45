var dude;
var ground;
var groundImg;
var cloudpiece, cloudpieceA, cloudpieceB;
var cloudImg;
var cloudsGroup
var sun;
var running, jumping;
var START = 0, PLAY = 1, END = 2;
var gameState = START;
var g1, g2, o1, o2, soniclogo;
var gIMG, gIMG2, oIMG, oIMG2, slIMG;
var backSprite;
  
function preload(){
  running = loadAnimation("images/frameA.png", "images/frameB.png", "images/frameC.png", "images/frameD.png");
  //bg = loadGif("images/yeet.gif");
  jumping = loadAnimation("images/this1.png", "images/this2.png", "images/this3.png", "images/this4.png", "images/this5.png");
  groundImg = loadImage("images/realground.png");
  cloudImg = loadImage("images/pixelcloud.png");
  gIMG = loadImage("images/sonicG.png");
  gIMG2 = loadImage("images/2ndsonicG.png");
  oIMG = loadImage("images/sonicO.png");
  oIMG2 = loadImage("images/2ndsonicO.png");
  slIMG = loadImage("images/sonicLogo.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
    gameState = START;
    backSprite = createSprite(windowWidth/2, windowHeight/2 - 5, 1200, 510);
    backSprite.shapeColor = "black";
    g1 = createSprite(windowWidth/5 - 25, windowWidth/5 - 20, 50, 50);
    g1.addImage(gIMG);
    g1.scale = 0.3;
    o1 = createSprite(windowWidth/5 + 80, windowWidth/5 - 20, 50, 50);
    o1.addImage(oIMG);
    o1.scale = 0.4;
    soniclogo = createSprite(windowWidth/2, windowHeight/2, 50, 50);
    soniclogo.addImage(slIMG);
    g2 = createSprite(o1.x * 3, o1.y * 2.3, 50, 50);
    g2.addImage(gIMG2);
    g2.scale = 0.3;
    o2 = createSprite(g2.x + 105, g2.y, 50, 50);
    o2.addImage(oIMG2);
    o2.scale = 0.4;

    //backSprite = createSprite(windowWidth/2, windowHeight/2, 100, 100);
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

  if(gameState === START){    
    textSize(30);
    fill("black");
    //("robotomono");
    text("WELCOME TO THIS SONIC FAN GAME", windowWidth/2 - 300, windowHeight/5 - 100);
    fill("black");
    textSize(30);
    text("THIS GAME IS UNOFFICIAL, THEREFORE I HAVE NO INTENTION OF COPYRIGHT", width/9, windowHeight/5 - 25);
    fill("black");
    textSize(50);
    text("press 'S' to start", width/2 - 150, o2.y + 150);
    //spawnClouds();
    dude.visible = false;
    ground.visible = false;
    //cloudpiece.visible = false;
  }

  if(keyDown("s") && gameState === START){
    gameState = PLAY;
    dude.visible = true;
    ground.visible = true;
    vanish();
  }
  
  if(gameState === PLAY){
    dude.collide(ground);
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
  }
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

function vanish(){
  backSprite.visible = false;
  g1.visible = false;
  g2.visible = false;
  o1.visible = false;
  o2.visible = false;
  soniclogo.visible = false;
}