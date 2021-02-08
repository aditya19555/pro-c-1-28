
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy ,m1,m2,m3
function preload()
{
boyimg = loadImage("boy.png")
treeimg=loadImage("tree.png")	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;
 
	stone = new Stone(80,400,30,30);

	sling = new Ch(stone.body,{x:130,y:340});

	mango1 = new Mango(730,100,30,30)
	mango2 = new Mango(790,250,30,30)
	mango3 = new Mango(780,270,30,30)
	mango4 = new Mango(830,230,30,30)
	mango5 = new Mango(700,200,30,30)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  imageMode(CENTER);
  image(boyimg,200,400,200,300);
  image(treeimg,800,250,200,500)
  stone.display();
  sling.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

