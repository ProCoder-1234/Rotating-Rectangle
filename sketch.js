const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var boxOne;
var boxTwo;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    //console.log(engine);
    world = engine.world;
    ground = new Ground(200,390,400,50);

    /*how do we create an object: "new" keyword it indicates there is
    an object which needs to be created.
    */
    //(): it initalizes the constructor;
    boxOne = new Box(270, 20, 50, 50);

    boxTwo = new Box(250, 275, 50, 50);
}

function draw() {
    background(0);
    Engine.update(engine);
    
    boxTwo.display();  
    boxOne.display();
    ground.display();
}