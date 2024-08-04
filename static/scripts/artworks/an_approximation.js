function setup() {
  const artDiv = document.getElementById('art-div');
  const width = artDiv.offsetWidth;
  const sketchCanvas = createCanvas(width,width);
  console.log(sketchCanvas);
  sketchCanvas.parent("art-div");
}

function draw() {

  half = width/2;
  quart = width/4;
  eighth = width/8;
  sixteenth = width/16;

  background(120, 230, 217);

  noStroke();
  fill(0);
  circle(half, half, half + quart-sixteenth/2);
  fill(120, 230, 217);
  circle(half, eighth+sixteenth/4, sixteenth);

  noFill();

  strokeWeight(5);
  stroke(255, 255, 255);
  circle(half, half, eighth);
  circle(half, half, quart-sixteenth);
  circle(half, half, quart+sixteenth);
  circle(half, half, quart+eighth+sixteenth);
  stroke(255, 255, 255);
  triangle(half, half, half, half, half, half);
  circle(half, eighth+sixteenth/4, sixteenth);
  strokeWeight(10);
  stroke(0);
  triangle(half, eighth+sixteenth/4, half, eighth+sixteenth/4, half, eighth+sixteenth/4);
  stroke(59, 216, 196);
  circle(half, half, quart);
  stroke(100, 220, 159);
  circle(half, half, sixteenth);
  stroke(120, 230, 217);
  circle(half, half, half);
  stroke(100, 220, 159);
  circle(half, half, quart+eighth);
}