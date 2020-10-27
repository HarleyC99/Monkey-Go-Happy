
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
    createCanvas(600,600);
    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;
    ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    FoodGroup=createGroup();
    obstaclesGroup=createGroup();
  
}


function draw() {

    background("white");
    
  if(ground.x<0){
    
    ground.x = ground.width/2;
  }
  if(keyDown("space")){
    
    monkey.velocityY =-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
  
  if(obstaclesGroup.isTouching(monkey)){
    
    ground.velocityX=0;
    monkey.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1); 
  }
  fill("black");
  score = Math.ceil(frameCount/frameRate());
  text("survival time:"+score,100,50);
}
 function spawnObstacles(){
  
   if(frameCount%300===0){
     
     obstacle=createSprite(800,320,10,40);
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.15;
     obstacle.velocityX=-6;
     obstacle.lifetime=300;
     obstaclesGroup.add(obstacle);
    
   }
  
}  
function spawnFood(){
  
   if(frameCount%80===0){
     
     banana=createSprite(800,320,40,10);
     banana.addImage(bananaImage);
     banana.scale=0.06;
     banana.velocityX=-6;
     banana.lifetime=300;
     monkey.depth=banana.depth+1;
     banana.y=Math.round(random(120,200))
     FoodGroup.add(banana);
    
   }
  
}


