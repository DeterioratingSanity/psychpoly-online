    var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);
        
        // ProgramCodeGoesHere
        fill(255, 255, 0);
        ellipse(200, 200, 200, 200);
        noFill();
        stroke(0, 0, 0);
        strokeWeight(2);
        arc(200, 200, 150, 100, 0, PI);
        fill(0, 0, 0);
        ellipse(250, 200, 10, 10);
        ellipse(153, 200, 10, 10);
    }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("gamepanel"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 

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
