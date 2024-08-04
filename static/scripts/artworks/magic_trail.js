function setup() {
   const artDiv = document.getElementById('art-div');
   const width = artDiv.offsetWidth;
   const sketchCanvas = createCanvas(width,width);
   console.log(sketchCanvas);
   sketchCanvas.parent("art-div");
   background(0)
}

function draw () {
  if (mouseIsPressed === true) {
     if (mouseButton === LEFT) {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        noStroke()
        fill(r, g, b)
        circle(mouseX, mouseY, width/128)
        circle(mouseX + width/128, mouseY, width/256)
        circle(mouseX, mouseY + width/128, width/256)
        circle(mouseX - width/128, mouseY, width/256)
        circle(mouseX, mouseY - width/128, width/256)
    }
    if (mouseButton === RIGHT) {
        fill(0, 50)
        circle(mouseX, mouseY, width/64)
      }
  }
}