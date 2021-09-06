
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var monster;

function preload(){
	path_img = loadImage("assets/path.jpg");
	boy_ani = loadAnimation("assets/boy1.PNG", "assets/boy2.PNG", "assets/boy3.PNG", "assets/boy4.PNG");
	gold1_img = loadImage("assets/goldcoins.png");
	gold2_img = loadImage("assets/treasure.png");
	sword_img = loadImage("assets/sword.png");
	monster1_img = loadImage("assets/monster1.png");
	monster2_img = loadImage("assets/monster2.png");
	monster3_img = loadImage("assets/monster3.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	path = createSprite(100,height/2,10,10);
	path.addImage(path_img);
	path.scale = 4.5;
	path.velocityX = -5;

	boy = createSprite(150, 200, 10, 10);
	boy.addAnimation("running", boy_ani);
	boy.scale = 0.8;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //image(path_img, 0, 0, width*3, height);

  if(path.x<0){
	  path.x = 100;
  }

  moveBoy();
  spawnTreasure();
  spawnSword();
  spawnMonsters();
  
  
  drawSprites();
 
}

function moveBoy(){
	if(keyDown("DOWN_ARROW")){
		boy.y = boy.y+8;
		}
  
		if(keyDown("UP_ARROW")){
		boy.y = boy.y-8;
		}

	if(boy.y<170){
		boy.y = 200;
	}

	if(boy.y>height-150){
		boy.y = height-200;
	}
	
}

function spawnTreasure(){
	if(frameCount % 150 === 0){
		gold = createSprite(width, random(200, height-200), 10, 10);
		gold.addImage(gold1_img);
		gold.scale = 0.3;
		gold.velocityX = -10;
		gold.lifetime = 300;
	}

	if(frameCount % 249 === 0){
		gold2 = createSprite(width, random(200, height-200), 10, 10);
		gold2.addImage(gold2_img);
		gold2.scale = 0.3;
		gold2.velocityX = -10;
		gold2.lifetime = 300;
	}
}

function spawnSword(){
	if(frameCount % 463 === 0){
		sword = createSprite(width, random(200, height-200), 10, 10);
		sword.addImage(sword_img);
		sword.scale = 0.8;
		sword.velocityX = -10;
	}
}

function spawnMonsters(){
	if(frameCount % 334 === 0){
		monster = createSprite(width, random(200, height-200), 10, 10);
		var ran = round(random(1,3));
		switch(ran){
			case 1: monster.addImage(monster1_img);
			break;
			case 2: monster.addImage(monster2_img);
			break;
			case 3: monster.addImage(monster3_img);
			break;
			default:break;
		}
		monster.scale = 0.3;
		monster.velocityX = -10;
		//monster.velocityY = -4;
		console.log(monster.y);
		if(monster.y>height-200){
			monster.velocityY = -4;
		}
		if(monster.y<267){
			monster.velocityY = 4;
		}
		monster.lifetime = 300;

	}

}