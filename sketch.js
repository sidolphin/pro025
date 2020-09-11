const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var drop;
var raindrop=[]


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  drop = new Drop(random(10,200),random(10,200),70,70);
}

function draw() {
  Engine.update(engine)
  background(0); 
  

drop.display();
  drawSprites();
  if(frameCount%10===0){
    raindrop.push(new Drop(random(10,1250),random(1,600),random(10,20),random(10,20)))
  }
  for (var i = 0; i < raindrop.length; i++){
     raindrop[i].display();
     console.log("high")
     };
}