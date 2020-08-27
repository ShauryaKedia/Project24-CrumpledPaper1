const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,dustbin2,dustbin3, paperObject,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new Dustbin(1400,675,200,20);
	dustbin2=new Dustbin(1300,615,20,100);
	dustbin3=new Dustbin(1500,615,20,100);

	paperObject=new Paper(200,450,20);
	ground = new Ground(800,height,1600,20)

	


	Engine.run(engine);

  
}


function draw() {
  Engine.update(engine)
  background(0);
 
  paperObject.display();
  ground.display();
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100});
    
  	}
}





