var bullet;
var wall;
var speed; 
var weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet= createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"; 
  wall  = createSprite(1200, 200,thickness , height/2);
  wall.shapeColor = "grey";

}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage =  0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if(damage>10){
  bullet.shapeColor =color(225,0,0); 
  }
  if(damage<10 ){  
  bullet.shapeColor = color(0,225,0);
}
}
  drawSprites();
 }

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width/2;
  wallLeftEdge = lwall.x
  if(bulletRightEdge >= wallLeftEdge){
    return true; 
    }
    return false;
  }
