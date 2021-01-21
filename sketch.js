const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var sindbad,sindbadImg,sindbadImg2;
var brick1,brick2,brick3,brick4,brick5,brick6;

function preload(){
  sindbadImg2 = loadImage('r20.png');
  sindbadImg = loadAnimation('r1.png','r2.png','r3.png','r4.png','r5.png','r6.png','r7.png','r8.png','r9.png','r10.png','r11.png','r12.png','r13.png','r14.png','r15.png','r16.png','r17.png','r18.png','r19.png','r20.png');
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  sindbad = createSprite(100,700,50,50);
  sindbad.addImage("sindbad",sindbadImg2);
  sindbad.scale = 1.5;

  brick1 = new Brick(300,650,150,30);
}

function draw() {
  background("green");  

  Engine.update(engine);

  if(keyWentDown(RIGHT_ARROW)){
    sindbad.addAnimation("sindbad",sindbadImg);
    sindbad.velocityX = 2;
  }

  else if(keyWentUp(RIGHT_ARROW)){
    sindbad.addImage("sinbad",sindbadImg2);
    sindbad.velocityX = 0;
  }

  brick1.display();

  drawSprites();
}