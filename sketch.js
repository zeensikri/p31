const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,613);
  engine = Engine.create();
  world = engine.world;

  boundObj1 = new Boundary(240,610,480,7)
  boundObj2 = new Boundary(475,300,7,612);
  boundObj3 = new Boundary(4.5,300,7,612);

  grObj = new Ground(240, 600, 468, 15);

  for (var k = -10; k <= 450; k = k + 83){
    divisions.push(new Division(k, height-divisionHeight/2, 8, divisionHeight - 40));
  }

  for (var j = 20; j<= width - 20; j = j+50){

      plinkos.push(new Plinko(j,55));
  }

  for (var j = 50; j <= width-20; j=j+51.1){
    plinkos.push(new Plinko(j,105));
  }

  for (var j = 20; j<= width -20; j = j+50){

    plinkos.push(new Plinko(j,155));
  }

  for (var j = 50; j <= width-20; j=j+51.1){
    plinkos.push(new Plinko(j,205));
  }

  for (var j = 20; j<= width -20; j = j+50){

    plinkos.push(new Plinko(j,255));
  }



  
}

function draw() {
  background(0,0,0);  
  drawSprites();
  fill(255);
  Engine.update(engine);
  grObj.display();
  boundObj1.display();
  boundObj2.display();
  boundObj3.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount % 30 === 0){
    particles.push(new Particle(random(50,430), 10,10));

  }



  for( var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  

}