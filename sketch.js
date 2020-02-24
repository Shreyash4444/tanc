const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var backgroundImg,platform;
var rocket, tank;

var gameState = "loaded";
var bg;
var score = 0;

function preload() {
    bg = loadImage("assets/sky.jpg")
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    
}

function draw() {

    background(bg);

    Engine.update(engine);
    ground.display()
}
