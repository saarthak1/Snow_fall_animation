var bgim,bg;
var sf,sfimg;
function preload(){
  bgim = loadImage("snow2.jpg");
  sfimg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1600,800);
 bg=createSprite(400, 200, 800, 400);
 bg.addImage(bgim,'hi')
 sf=createSprite(20, 40, 10,10);
 sf.addImage(sfimg,'hi')
 sf.scale=0.4
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (keyCode === 	RIGHT_ARROW) {
		sf.x+=20;
	  }
    if (keyCode === 	LEFT_ARROW) {
      sf.x-=20;
      }
      if (keyCode === 	DOWN_ARROW) {
        sf.y+=20;
        // sf.scale=
        }
        if (keyCode === 	UP_ARROW) {
          sf.y-=20;
          }
  
}