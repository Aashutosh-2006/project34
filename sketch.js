
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;



function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options={
		mouse:canvasmouse
	}
	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);


	bob1=new Pendulum(400,500,"red");
	bob2=new Pendulum(360,500,"blue");
	bob3=new Pendulum(320,500,"green");
	bob4=new Pendulum(440,500,"yellow");
	bob5=new Pendulum(480,500,"purple");

   

   var render=Render.create({
    element:document.body,
	engine:engine,
	options:{width:1200,
		height:700,
		wireframes:false}
	});

bobDiameter=40;

   sling1=new Sling(bob3.body,{x:300,y:300});
   sling2=new Sling(bob2.body,{x:360,y:300});
   sling3=new Sling(bob1.body,{x:420,y:300});
   sling4=new Sling(bob4.body,{x:480,y:300});
   sling5=new Sling(bob5.body,{x:540,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
 
  
  drawSprites();
 
}

function mouseDragged() { 
	
	
		 Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY}); 

 } 
 function drawLine(constraint) 
 {
	  bobpos=constraint.bodyA.position 
	  line(bobpos.x, bobpos.y);
	 }

