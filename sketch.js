const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var obj, ball;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,800,20,options);

  World.add(world, ground);
  //console.log(obj);
  //console.log(obj.type);
 // console.log(obj.position.x);
  //console.log(obj.position.y);
  
  var ball_options = {
    restitution: 1
  }
  ball = Bodies.circle(200,50,20, ball_options);
  World.add(world, ball);

}

function draw() {
  background(0); 
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800,20);
    
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  //drawSprites();
}