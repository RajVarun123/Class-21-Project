var bulletWeight, bulletSpeed, damage;
var wall;
var bullet;

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1500,200,60,400);
  wall.width = random(22, 83);
  wall.shapeColor = rgb(80,80,80);
  
  bulletWeight = random(30, 52);
  bulletSpeed = random(223, 321);
  damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed / (wall.width * wall.width * wall.width);
  
  bullet = createSprite(0,200,25,25);
  bullet.shapeColor = rgb(255,255,255);
  bullet.velocityX = bulletSpeed;
}

function draw() {
  background(0);
  
  if(damage < 10 && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
    bullet.shapeColor = rgb(0,255,0);
    bullet.velocityX = bulletSpeed - bulletWeight;
  }

  if(damage > 10 && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
    bullet.shapeColor = rgb(255,0,0);
    bullet.velocityX = bulletSpeed - bulletWeight;
  }

  console.log(bulletWeight);
  console.log(bulletSpeed);
  console.log(damage);
  
  drawSprites();
}