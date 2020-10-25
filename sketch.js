var bullet,wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1200,400);
  bullet = createSprite(100,200,50,50);
  speed = random(223, 321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(800,200,thickness,height/2);
  wall.shapeColor = "blue";
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if (hasCollided(bullet, wall)) 
  { bullet.velocityX = 0; var damage= 0.5*width*speed*speed/(thickness*thickness*thickness); 
    if (damage>10) 
    { wall.shapeColor= "green";
     
    } 
    if (damage<10)
     { wall.shapeColor= "red"; } 
  } 
  drawSprites();
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true;
    
  } 
  return false;
}