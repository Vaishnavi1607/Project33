var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 
var divisions = [];
//var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle;
var turn =0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");


push()
textSize(20)
fill(202, 34, 235)
 text("Chances:"+turn,620,30);
pop()


push()
textSize(30)
fill(255)
 text("500",15,580)
 text("500",95,580)
 text("500",175,580)
 text("500",255,580)
 text("200",335,580)
 text("200",410,580)
 text("200",495,580)
 text("100",575,580)
 text("100",655,580)
 text("100",735,580)
pop()

  Engine.update(engine);
 
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
 
 /* for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(gameState == "end"&& score<2500){

    textSize(50)
    fill(233,0,0)
    text("GAME OVER",250,280);
    textSize(40)
    text("Your Score:"+score,250,340);
    fill("yellow")
    text("To win your score must be 2500",130,410);
    }else
    if(score==2500){
      textSize(50)
      fill("yellow")
      text("YOU WIN",250,280)
      text("Your Score:"+score,220,340);
    }
  



if(particle!=null){
  
  particle.display();


  if(particle.body.position.y>760)
  {
    if(particle.body.position.x<300){
      score = score+500;
      particle= null;
      if(turn>=5)gameState = "end"
     
} else

  
    if(particle.body.position.x>300 && particle.body.position.x<600){
      score = score+200;
      particle = null;
      if(turn>=5)gameState = "end"
    
  }else 
 
 
    if(particle.body.position.x>601 && particle.body.position.x<900){
      score = score+100;
      particle=null;
      if(turn>=5)gameState = "end"
    }

}

  }
    
push()
textSize(20)
fill(202, 34, 235)
 text("Score : "+score,20,30);
pop()


}






function mousePressed()
{
  if(gameState!=="end"&& turn<=4)
  {
    turn = turn+1;
    particle = new Particle(mouseX,10,10,10)
  }

}