const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(240,300,50,100);
    box2 = new Box(280,200,50,100);

    ground1 = new Ground(200,390,400,20);
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
   
}