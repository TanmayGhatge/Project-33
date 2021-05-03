const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var max = 100;
var smowfall = []

function preload() {
  bgImg = loadAnimation("snow2.jpg");
  
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1000,700);
  bg = createSprite(500, 350, 50, 50);
  bg.addAnimation("background", bgImg);

  if (farmeCount%150 === 0) {
    for (var i= 0; i < max; i++) {
      snowfall.push(new Snow(random(0,900), random(0,500)))
    }
      
    }
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

for (var i= 0; i < max.length; i++) {
  snowfall[i].display();
  snowfall[i].updateY();
}

  drawSprites();
}