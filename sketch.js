const colorRand = ["yellow", "black", "pink"];
let chooseShape;
let xPos;
let yPos;

let shapeLength;
let shapeHeight;


function setup() 
{
  createCanvas(800, 600);
  background(220);
}

function draw() 
{
  

}

function keyPressed()
{
  if(keyCode == BACKSPACE)
  {
    xPos = random(40, 720);
    yPos = random(60, 540);

    chooseShape = 2;
    const color = random(colorRand);
    noStroke();
    fill(color);

    for(let i = 0; i < 70; i++)
    {
      switch (chooseShape)
      {
        case 0:
          
          ellipse(xPos, yPos, 100, 50);
        break;

        case 1: 

          rect(xPos, yPos, 100, 100);
        break;

        case 2:

          rect(xPos, yPos, 100, 100);
        break;
      }
    }
  }

}