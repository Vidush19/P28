const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, tree1;
var ground;
var stone;
var boy;
var rope;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload() {
    tree = loadImage("images/tree.png");
}

function setup() {
    createCanvas(900, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    // tree = new Tree(670, 470, 450, 450);
    ground = new Ground(width / 2, 690, width, 20);
    stone = new Stone(width / 2, height / 2, 50, 50);
    boy = new Boy(width / 5, 625, 175, 175)
    rope = new Rope(stone.body, { x: 120, y: 590 });
    mango1 = new Mango(670, height / 2, 55);
    mango2 = new Mango(670, height / 2 - 100, 55);
    mango3 = new Mango(770, height / 2-150, 55);
    mango4 = new Mango(570, height / 2-50, 55);
    mango5 = new Mango(850, height / 2 -50, 55);
    mango6 = new Mango(750, height / 2 - 50, 55);
    mango7 = new Mango(620, height / 2 - 150, 55);

    tree1 = createSprite(670, 410, 450, 450);
    tree1.addImage(tree);
    tree1.scale = 0.45;



    Engine.run(engine);
    textSize(20);
    fill("black");
    text("Press Space to throw again", width / 2, 50);

}


function draw() {
    Engine.update(engine);
    rectMode(CENTER);
    background(201);
    // tree.display();
    ground.display();
    boy.display();
    rope.display();
    
    textSize(25);
    fill("black");
    text("Press Space to throw again", width / 15, 200);

    drawSprites();
    stone.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);
    detectCollision(stone, mango6);
    
}

function detectCollision(lstone, lmango) {
    mpos = lmango.body.position;
    spos = lstone.body.position;

    var distance = dist(spos.x, spos.y, mpos.x, mpos.y);
    if (distance <= lmango.radius + lstone.radius) {
        Matter.Body.setStatic(lmango.body, false);
    }
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stone.body, { x: 120, y: 590 });
        rope.attach(stone.body);
    }
}