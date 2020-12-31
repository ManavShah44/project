
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,ball,ground

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	bin1 = new Bin(550,600,20,150);
	bin2=new Bin(675,650,250,25)
	bin3=new Bin(800,600,25,150)
	ball=new Ball(250,250,20)
	
	ground=new Ground(100,100,1000,15)
	   
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display()
  bin2.display()
  bin3.display()
  ball.display()
  ground.display()
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.aplyForce(ball.body,ball.body.position,{x:85,y:85})
	}
}


