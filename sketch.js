const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img , circleImg , bg_img1 ;
var tree_1 , tree_2 , tree_3 , tree_4 ;
var gun , horn , knife , stick ;
var gunI , hornI , knifeI , stickI ;
var tree1  ,tree2 , tree3 , tree4 , tree5 , tree6 , tree7 , tree8 ;
var man;
var obstacle1 , obstacle2 , obstacle3 , obstacle4;
var deer , bird , monkey , cutter ;
var cuttersGroup , deersGroup , monkeysGroup , birdsGroup;
var score = 0 ;


function preload()
{
  bg_img = loadImage('BG.png');
  circleImg = loadImage('Circle.png');
  tree_1 = loadImage('Tree1.png');
  tree_2 = loadImage('Tree2.png');
  tree_3 = loadImage('Tree3.png');
  tree_4 = loadImage('Tree4.png');
  stickMan = loadImage('Stick.png');
  gunMan = loadImage('Gun.png');
  hornMan = loadImage('Horn.png');
  knifeMan = loadImage('Knife.png');
  obstacle1 = loadImage('lumber.png');
  obstacle2 = loadImage('Bird.png');
  obstacle3 = loadImage('Deer.png');
  obstacle4 = loadImage('Monkey.png');
  bg_img1 = loadImage('BG_1.jpg');
  gunI = loadImage('gunIMG.png');
  hornI = loadImage('hornIMG.png');
  knifeI = loadImage('knifeIMG.png');
  stickI = loadImage('stickIMG.png');
}

function setup() 
{
  createCanvas(800,800);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  man = createSprite(250,270,20,20);
  man.addImage(stickMan);
  man.scale = 0.45;

  tree1 = createSprite(520,240,10,40);  
  tree1.addImage(tree_1);
  tree1.scale = 0.5;

  tree2 = createSprite(180,280,10,40);  
  tree2.addImage(tree_2);
  tree2.scale=0.5;

  tree3 = createSprite(380,380,10,40);  
  tree3.addImage(tree_3);

  tree4 = createSprite(240,420,10,40);  
  tree4.addImage(tree_4);

  tree5 = createSprite(550,400,10,40);  
  tree5.addImage(tree_2);
  tree5.scale=0.5;

  tree6 = createSprite(300,590,10,40);  
  tree6.addImage(tree_1);
  tree6.scale = 0.5;

  tree7 = createSprite(520,580,10,40);  
  tree7.addImage(tree_3);

  tree8 = createSprite(350,200,10,40);  
  tree8.addImage(tree_4);

 
  gun = createSprite(width-650,70,10,10);
  gun.addImage(gunI);
  gun.scale = 0.2;
 
  horn = createSprite(width-450,50,10,10);
  horn.addImage(hornI);
  horn.scale = 0.2;

  knife = createSprite(width-280,70,10,10);
  knife.addImage(knifeI);
  knife.scale = 0.2;

  stick = createSprite(width-150,70,10,10);
  stick.addImage(stickI);
  stick.scale = 0.2;

  treesGroup = new Group();
  cuttersGroup = new Group();
  deersGroup = new Group();
  monkeysGroup  = new Group();
  birdsGroup  = new Group();
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  image(circleImg,75,75,width-150,height-150);


  if (keyDown("LEFT_ARROW")){
    man.x -= 2
  }

  if (keyDown("RIGHT_ARROW")){
    man.x += 2
  }

  if (keyDown("UP_ARROW")){
    man.y -= 2
  }

  if (keyDown("DOWN_ARROW")){
    man.y += 2
  }

  spawnObstacles();
  
  if(man.isTouching(cuttersGroup)){
    man.addImage(knifeMan);
    cuttersGroup.destroyEach();
  }

  if(man.isTouching(birdsGroup)){
    man.addImage(hornMan);
    birdsGroup.destroyEach();
  }

  if(man.isTouching(deersGroup)){
    man.addImage(stickMan);
    deersGroup.destroyEach();
  }

  if(man.isTouching(monkeysGroup)){
    man.addImage(gunMan);
    monkeysGroup.destroyEach();
  }

  //Destroy trees IF conditions
  if(tree1.isTouching(cuttersGroup)||tree1.isTouching(monkeysGroup)||tree1.isTouching(deersGroup)||tree1.isTouching(birdsGroup)){
    tree1.destroy();
    score = score + 1;
  }

  if(tree2.isTouching(cuttersGroup)||tree2.isTouching(monkeysGroup)||tree2.isTouching(deersGroup)||tree2.isTouching(birdsGroup)){
    tree2.destroy();
    score = score + 1;
  }

  if(tree3.isTouching(cuttersGroup)||tree3.isTouching(monkeysGroup)||tree3.isTouching(deersGroup)||tree3.isTouching(birdsGroup)){
    tree3.destroy();
    score = score + 1;
  }

  if(tree4.isTouching(cuttersGroup)||tree4.isTouching(monkeysGroup)||tree4.isTouching(deersGroup)||tree4.isTouching(birdsGroup)){
    tree4.destroy();
    score = score + 1;
  }

  if(tree5.isTouching(cuttersGroup)||tree5.isTouching(monkeysGroup)||tree5.isTouching(deersGroup)||tree5.isTouching(birdsGroup)){
    tree5.destroy();
    score = score + 1;
  }

  if(tree6.isTouching(cuttersGroup)||tree6.isTouching(monkeysGroup)||tree6.isTouching(deersGroup)||tree6.isTouching(birdsGroup)){
    tree6.destroy();
    score = score + 1;
  }

  if(tree7.isTouching(cuttersGroup)||tree7.isTouching(monkeysGroup)||tree7.isTouching(deersGroup)||tree7.isTouching(birdsGroup)){
    tree7.destroy();
    score = score + 1;
  }

  if(tree8.isTouching(cuttersGroup)||tree8.isTouching(monkeysGroup)||tree8.isTouching(deersGroup)||tree8.isTouching(birdsGroup)){
    tree8.destroy();
    score = score + 1;
  }

  if (score === 8 ){
    image(bg_img1,0,0,width,height);
    cuttersGroup.destroyEach();
    monkeysGroup.destroyEach();
    deersGroup.destroyEach();
    birdsGroup.destroyEach();

    gun.destroy();
    knife.destroy();
    horn.destroy();
    stick.destroy();

    man.destroy();
  }

  drawSprites();
}


function spawnObstacles(){
  if (frameCount % 250 === 0){
    y = Math.round(random(100 , 700));
     var rand = Math.round(random(1,4));
     
     if(rand===1){
       deer = createSprite(800,y,10,40);
       deer.addImage(obstacle3);
       deer.velocityX = -2;
       deersGroup.add(deer)
     }else if(rand===2){
      bird = createSprite(800,y,10,40);
      bird.addImage(obstacle2);
      bird.velocityX = -2;
      birdsGroup.add(bird)
    }else if(rand===3){
      cutter = createSprite(800,y,10,40);
      cutter.addImage(obstacle1);
      cutter.velocityX = -2;
      cuttersGroup.add(cutter)
    }else {
      monkey = createSprite(800,y,10,40);
      monkey.addImage(obstacle4);
      monkey.velocityX = -2;
      monkeysGroup.add(monkey)
    }

  }

}


