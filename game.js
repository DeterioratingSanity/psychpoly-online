function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}


/* alternate
function draw() {
  var canvas = document.getElementById('gamepanel');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    //background
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
          
  }
}
*/
