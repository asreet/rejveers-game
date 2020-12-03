var Ninja,ninjaImage;
var police,policeImg;
var ground;
var power, powerUp,powerUpImg;
var life = 0;
var powerupImg,powerImg;
var sword,swordImg;
var groundImage,bullet;
var background,backgroundImg,invisibleGround;
//var PLAY = 1;
//var END =0;
//var gameState= PLAY

function preload(){
  groundImage=loadImage("ground2.png")
  powerupImg = loadImage("powerup.gif");
  powerImg=loadImage("power.gif");
  policeImg=loadImage("police.png")
  backgroundImg=loadImage("bg.png")
  ninjaImage = loadImage("ninja.png")
  swordImg= loadImage("sword.png")
}

function setup() {
  createCanvas(600,600);
  background = createSprite(0,0,600,600);
   background.addImage(backgroundImg);
    background.scale = 2.5

 Ninja = createSprite(200, 330, 30, 50);
 Ninja.addImage("ninja",ninjaImage)
 //Ninja.velocityX=3
 Ninja.scale = 0.2;
 invisibleGround = createSprite(10,370,600,20)
 invisibleGround.visible = false;
 

 police = createSprite(100,170,30,60);
 //police.velocityX=3
 police.addImage("police",policeImg)
 
 
 ground = createSprite(200,350,400,20) 
 ground.addImage("ground",groundImage); 
 ground.velocityX=-4;
 ground.x=ground.width/2;

 

}

function draw() {
  background.velocityX = -3 
  if (background.x < 0){
     background.x = background.width/2; 
    }
  text("life" + life,550,20);

  if(keyDown("space") ) {
    Ninja.velocityY = -12;
  }
  Ninja.velocityY = Ninja.velocityY + 0.2;
  Ninja.collide(invisibleGround);

   
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
      
  spawnPower();
  spawnSword();
  spawnBullets();
  drawSprites();

    }
function spawnPower(){
  if (frameCount%280===0){
    power = createSprite(600,30,30,30)
    power.addImage("power",powerImg)
    power.scale = 0.1;
    
    power.velocityX= -2;
  }

}
function spawnSword (){
  if (frameCount%180===0){
   sword = createSprite(600,20,30,30)
   sword.addImage("sword",swordImg)
   sword.velocityX= -2
   sword.scale = 0.2;
  }
}
function spawnBullets(){
  if (frameCount%50===0){
    var rand = Math.round(random(100,300ss))
bullet= createSprite(100,300,10,10)
  }

}