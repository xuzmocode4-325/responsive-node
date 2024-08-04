let circleX; 
let circleY;
let circleZ; 
let lineWidth;
let expanse;

function setup() {
  const artDiv = document.getElementById('art-div');
  const width = artDiv.offsetWidth;
  const sketchCanvas = createCanvas(width,width);
  console.log(sketchCanvas);
  sketchCanvas.parent("art-div");
  background(0)
}

function mousePressed() {
 circleX = width/2
 circleY = width/2
 circleZ = width/256
 lineWidth = 1;
 expanse = width
}


function draw() {
  radius = map(mouseX, 0, width, 0, width * 9/11)
  blue = map(mouseY, 0, width, 128, 255)
  red = map(mouseY, 0, width, 255, 128)
  stroke(red, 204, blue)
  strokeWeight(random(lineWidth, 75))
  fill(red,215, blue)
  pulse = random(circleZ, radius); 
  circle(circleX, circleY, pulse)
  noFill()
  stroke(0)
  strokeWeight(lineWidth)
  lineWidth++
  circle(circleX, circleY, expanse)
  expanse --
  circle(circleX, circleY, expanse/3)
  if (expanse < 0) {
    expanse = width
  }
  if (lineWidth > 10) {
     lineWidth = 1
  }
  noStroke()
  fill(255)
  circle(width/2, width/2, width/64)
  if (circleZ > width) {
    backgound(0)
  }
}