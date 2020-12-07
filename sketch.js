
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,mango1;
var launcherObject;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

boy = loadImage("boy.png")
	//Create the Bodies Here.
	tree =new Tree();	
	ground = Bodies.rectangle(600,650,1200,40,{isStatic:true})
	World.add(world,ground)

mango1 = new Mango(920,50)
mango2 = new Mango(900,100)
mango3 = new Mango(900,300)
mango4 = new Mango(800,200)
mango5 = new Mango(1050,180)
mango6 = new Mango(850,70)
mango7 = new Mango(990,180)
mango8 = new Mango(750,300)
mango9 = new Mango(890,240)
mango10 = new Mango(1090,160)

stone = new Stone(100,530);
launcherObject=new Launcher(stone.body,{x:150,y:530})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  tree.display();

//ground
  fill("brown")
 rect(ground.position.x,ground.position.y,1200,40)


 stone.display();

//boy
 image(boy,100,550,250,350)

 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 launcherObject.display();
  drawSprites();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  
}

/*function keyPressed(){
if(keyCode === DOWN_ARROW){
Matter.Body.setStatic(mango1.body,false)
Matter.Body.setStatic(mango2.body,false)
Matter.Body.setStatic(mango3.body,false)
Matter.Body.setStatic(mango4.body,false)
Matter.Body.setStatic(mango5.body,false)
}
}
*/



function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
     //distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
	 
	 function keyPressed() {
		if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:200, y:300}) 
		  launcherObject.attach(stone.body);
		}
	}


//collision detection between mango and stone
function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   

if(distance<=lmango.r+lstone.r)
    {
   
  	  Matter.Body.setStatic(lmango.body,false);
    }

}

	  