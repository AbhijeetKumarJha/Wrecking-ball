const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var rope,ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    box1 = new Box(120,380,40,40);
    box2 = new Box(123,380,40,40);
    box3 = new Box(125,380,40,40);
    box4 = new Box(124,340,40,40);
    box5 = new Box(124,340,40,40);
    box6 = new Box(123,300,40,40);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x:500,y:50});
    
}

function draw(){
    background(0);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
 rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}








