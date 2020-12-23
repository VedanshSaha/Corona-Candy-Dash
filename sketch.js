
var line1,line2,line3,lineimg;
var cloud,cloudimg;
var player,playerimg;
var s1,s2,s3,s4,s5,s6,s7,s8;
const no = 0;
const yes =1;
var ongoing = no;
var coronaimg;
var rand;
var O;
var a,b,c,d,e,f;
var bg;
const PLAY = 1;
const DEAD = 0;
var gameState = PLAY;
var score;
var angle;

function preload(){
  lineimg = loadImage("line.jfif");
  cloudimg = loadImage("31.svg");
  playerimg = loadImage("player.svg");
  coronaimg = loadImage("costume1 (1).png")
  s1 = loadSound("1 (1).mp3");
  s2 = loadSound("1 (2).mp3");
  s3 = loadSound("1 (3).mp3");
  s4 = loadSound("1 (4).mp3");
  s5 = loadSound("1 (5).mp3");
  s6 = loadSound("1 (6).mp3");
  s7 = loadSound("1 (7).mp3");
  s8 = loadSound("1 (8).mp3");
  O = loadImage("clony.svg");
  bg = loadImage("back.jfif")
}
function setup() {
 createCanvas(615,600)
 cloud = createSprite(300,300)
 cloud.addImage("cloud image",cloudimg)
 cloud.scale = 2;
 cloud.velocityX = -2;
 line1 = createSprite(100,300,1,1);
 line1.addImage("lineImage",lineimg)
 line2 = createSprite(300,300,1,1);
 line2.addImage("lineImage",lineimg)
 line3 = createSprite(500,300,1,1);
 line3.addImage("lineImage",lineimg)
 player = createSprite(300,450)
 player.addImage("player arrow",playerimg)
 player.scale = 1.7;
 a = new Group;
 b = new Group;
 c = new Group;
 d = new Group;
 e = new Group;
 f = new Group;

 rand = round(random(1,8));

 switch(rand){
   case 1 : s1.loop();
   break;
   case 2 : s2.loop();
   break;
   case 3 : s3.loop();
   break;
   case 4 : s4.loop();
   break;
   case 5 : s5.loop();
   break;
   case 6 : s6.loop();
   break;
   case 7 : s7.loop();
   break;
   case 8 : s8.loop();
   break;
 }

 
}

function draw() {
 background(bg);
 if(gameState === PLAY){
 corona1();
 corona2();
 corona3();
 corona4();
 corona5();
 corona6();

 angle +=1;

 if(a.isTouching(f)){
   a.destroyEach();
 }
 if(b.isTouching(e)){
  b.destroyEach();
}
if(c.isTouching(d)){
  c.destroyEach();
}
if(a.isTouching(a)){
  a.destroyEach();
}
if(b.isTouching(b)){
 b.destroyEach();
}
if(c.isTouching(c)){
 c.destroyEach();
}
if(f.isTouching(f)){
  f.destroyEach();
}
if(e.isTouching(e)){
 e.destroyEach();
}
if(d.isTouching(d)){
 d.destroyEach();
}

 line1.velocityY = frameCount/60;
 line2.velocityY = frameCount/60;
 line3.velocityY = frameCount/60;
 if(line1.y >700){
   line1.y =300;
   line2.y =300;
   line3.y =300;
 }
 if(line1.velocityY > 25){
  line1.velocityY = 25;
  line2.velocityY = 25;
  line3.velocityY = 25;
}
 if(ongoing === no){
 if(keyWentDown("right")){
 if(player.isTouching(line1)) {
   player.x = 300;
   ongoing = yes;}
   
 }}

 if(ongoing === no){
 if(keyWentDown("right")){
   if(player.isTouching(line2)){
   player.x = 500;
   ongoing = yes;}
   
 }}

 if(ongoing === no){
 if(keyWentDown("left")){
   if(player.isTouching(line2)){
   player.x = 100;
   ongoing = yes;}
 }}

 if(ongoing === no){
 if(keyWentDown("left")){
   if(player.isTouching(line3)){ 
   player.x = 300;
   ongoing = yes;
  }
 }}
  
  clone();

if(keyWentUp("left")){
     ongoing = no;
   }
  
  if(keyWentUp("right")){
     ongoing = no;
   }


if(cloud.x < -600){
  cloud.x = 400;
}

if(a.isTouching(player) || b.isTouching(player) || c.isTouching(player) || d.isTouching(player) || e.isTouching(player) || f.isTouching(player)){
  gameState = DEAD;
}
 
 score = Math.round(frameCount/28);
 }//gamestatePlay Ends
 else{
   let l = createSprite(300,300,1000,1000);
   l.shapeColor = "black";
   var i = createSprite(300,250);
   angleMode(DEGREES);
   i.addImage("image",coronaimg);
   i.scale = 2;
  //  i.rotate(angle);
   
 }
 
 drawSprites();
 if(gameState===DEAD){
  textSize(25);
  fill("red");  
  stroke(255)
  text("You have "+score + " CoronaCandies Enjoy Them!",70,450);
 }
 if(gameState === PLAY){
 textSize(25);
 fill("red");
 stroke(255)
 text("S",560,240);
 text("C",560,270);
 text("O",560,300);
 text("R",560,330);
 text("E",560,360);
 text("⬇",560,390);
 text(score,555,420);
}}


function corona1(){
  if(frameCount%Math.round(random(200,300))===0){
    var corona1 = createSprite(100,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    a.add(corona1);
  }
}

function corona2(){
  if(frameCount%Math.round(random(200,350))===0){
    var corona1 = createSprite(300,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    b.add(corona1);
  }
}

function corona3(){
  if(frameCount%Math.round(random(200,400))===0){
    var corona1 = createSprite(500,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    c.add(corona1);
  }
}

function corona4(){
  if(frameCount%Math.round(random(450,550))===0){
    var corona1 = createSprite(500,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    d.add(corona1);
  }
}

function corona5(){
  if(frameCount%Math.round(random(400,500))===0){
    var corona1 = createSprite(300,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    e.add(corona1);
  }
}

function corona6(){
  if(frameCount%Math.round(random(350,450))===0){
    var corona1 = createSprite(500,0);
    corona1.addImage("coronaImage",coronaimg);
    corona1.velocityY = frameCount/60;
    corona1.lifetime = 200;
    if(corona1.velocityY > 25){
      corona1.velocityY = 25;
    }
    f.add(corona1);
  }
}

function clone(){
  
var clone = createSprite(player.x,player.y)
 clone.addImage("O",O);
 clone.velocityY = 10;
 clone.x += random(-15,15);
 clone.lifetime = 100;
 player.depth = clone.depth +1;

 if(corona1.velocityY > 15){
  corona1.velocityY = 15;
}
}