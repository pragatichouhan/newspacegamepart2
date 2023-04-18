var START=0
var PLAY=1
var END=2
var gamestate=START
 var arcImage
var spaceship

function preload(){
  slide1=loadImage("asset/1STSLIDE.PNG")
  intro1=loadImage("asset/INTRO1.PNG")
  intro2=loadImage("asset/intro2.PNG")
  arcImage=loadImage("asset/rightarrowkey.PNG")
  
  level1=loadImage("asset/level1.jpeg")
 spaceship=loadImage("asset/spaceship2.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight)
  bg=createSprite(width/2,height/2,width,height)
  bg.addImage("slide1",slide1)
  bg.addImage("intro1",intro1)
  bg.addImage("intro2",intro2)
 blacklevel=createSprite(width/2,height/2,width,height)
 blacklevel.addImage("bl",level1)
 blacklevel.visible=false

  button=createImg("asset/START.PNG")
  button.position(700,400)
 
 arckey=createSprite(700,400)
 arckey.addImage("arckey",arcImage)
 arckey.visible=false


 space=createSprite(width/2,height-100)
 space.addImage("space",spaceship)
 space.visible=false
 space.scale=0.2
}

function draw(){
background("black")

if(gamestate===START){
 
  button.mouseClicked(slide)
  if(mousePressedOver(arckey)){
  gamestate=PLAY
  }

}
else if(gamestate===PLAY){
  bg.visible=false
  blacklevel.visible=true
  arckey.visible=false
  blacklevel.velocityY=1
  space.visible=true

  if(blacklevel.y>height/2+100){
 blacklevel.y=height/2
 
  }

  if(keyDown(UP_ARROW)){
 space.y=space.y-2
  }
}



  drawSprites()
}
function slide(){
  button.hide()
  bg.changeImage("intro1",intro1)
  //arckey=createImg("asset/rightarrowkey.PNG")
  //arckey.position(700,400)
  //arckey.mouseClicked(slide1)
  arckey.visible=true
}

