var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);

  createSprite(400, 200, 50, 50);

   bullet = createSprite(500,200,50,50);

  weight = random(400,1500);

  speed = random(55,90);

  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);

  thickness = random(22,83);
}

function draw() {
  background('black'); 
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
}
if(damage>10){
wall.shapeColor = color(255,0,0);
}
if(damage<10){
wall.shapeColor =  color(0,255,0);
}
drawSprites();
}



function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.x + bullet.width;

wallLeftEdge = wall.x;

if(bulletRightEdge>wallLeftEdge)
{
  return true;
}
return false;
}



