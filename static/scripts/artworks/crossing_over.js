function setup() {
  const artDiv = document.getElementById('art-div');
  const width = artDiv.offsetWidth;
  const sketchCanvas = createCanvas(width,width);
  console.log(sketchCanvas);
  sketchCanvas.parent("art-div");
}

function draw() { 
  background(22, 22, 22);
  const halfWidth = width / 2;
  const quarterWidth = width / 4;

  //2d primitives
  strokeWeight(5);
  rect(100, 100, width - 200, width - 200, 20);
  line(105, 105, width - 105, width - 105);
  line(105, width - 105, width - 105, 105);

  arc(50, 50, 50, 50, 0, HALF_PI);
  arc(50, 50, 50, 50, PI, PI+HALF_PI);

  arc(width - 50, 50, 50, 50, HALF_PI, PI);
  arc(width - 50, 50, 50, 50, PI + HALF_PI, 2 * PI);

  arc(width - 50, width - 50, 50, 50, PI, PI + HALF_PI);
  arc(width - 50, width - 50, 50, 50, 0, HALF_PI);


  arc(50, width - 50, 50, 50, PI + HALF_PI, 2 * PI);
  arc(50, width - 50, 50, 50, HALF_PI, PI);

  line(100, halfWidth, width - 100, halfWidth);

  triangle(halfWidth, halfWidth, halfWidth + 100, halfWidth-100, halfWidth + 100, halfWidth + 100);
  triangle(halfWidth, halfWidth, halfWidth - 100, halfWidth - 100, halfWidth -100, halfWidth + 100);

  line(halfWidth, 100, halfWidth, windowWidth - 100);

  ellipse(halfWidth, quarterWidth, 100, 100);
  ellipse(halfWidth, halfWidth + quarterWidth, 100, 100);

}