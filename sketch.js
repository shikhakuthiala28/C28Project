const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Cons=Matter.Constraint;

var engine,world,ground,tree,boy,stone,launcher,launcherForce=100;
var mango,mango1,mango2,mango3,mango4,mango5,mango6, mango7;

function preload(){

	boy=loadImage("images/boy.png");
	tree=loadImage("images/tree.png");
}

function setup(){

	createCanvas(1200,600);

	engine = Engine.create();
    world = engine.world;

	ground= new Ground(600,580,1200,20);
	stone= new Stone(150,420);
	launcher= new Launcher(stone.body,{x:150,y:420})

	mango= new Mango(720,200);
	mango1= new Mango(820,100);
	mango2= new Mango(950,100);
	mango3= new Mango(875,200);
	mango4= new Mango(980,175);
	mango5= new Mango(1000,250);
	mango6= new Mango(800,250);
	mango7= new Mango(1100,200);


	Engine.run(engine);
	
}

function draw(){

	background(255);

	ground.display();
	image(boy,100,345,250,300);
	image(tree,590,6,600,600);

	mango.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	stone.display();
	launcher.display();

	detectcollision(stone,mango);
	detectcollision(stone,mango1);
	detectcollision(stone,mango2);
	detectcollision(stone,mango3);
	detectcollision(stone,mango4);
	detectcollision(stone,mango5);
	detectcollision(stone,mango6);
	detectcollision(stone,mango7);

}
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
	
	launcher.fly();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
}
function detectcollision(stones,mangoes){
	mangoBodyPosition=mangoes.body.position
  stoneBodyPosition=stones.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if(distance<=100)
    {
      Matter.Body.setStatic(mangoes.body,false);
	}
}