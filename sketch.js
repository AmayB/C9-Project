
function setup() {
  createCanvas(400,400);
  background("grey");
}

function draw() 
{

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("yellow");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("green");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("blue");
  }

  drawSprites();
}
