let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#000000";

ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.code === "Escape") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return; 
  }

  switch (event.code) {
    case "KeyS":
        drawRandomStars(5, "myCanvas");
      break;
    case "KeyE":
        drawCircleWithSquare("myCanvas");
      break;
    case "KeyT":
        drawRandomK("myCanvas");
        break;
  }
});

function drawRandomStars(count, canvasId) {
    var cx = Math.random() * canvas.width;
    var cy = Math.random() * canvas.height;
    var spikes = Math.floor(Math.random() * 12) + 5; 
    var outerRadius = Math.random() * 50 + 20; 
    var innerRadius = Math.random() * (outerRadius - 10) + 10; 

    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16); 

    ctx.strokeStyle = randomColor;
    ctx.fillStyle = randomColor;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (var j = 0; j < spikes; j++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();
}

function drawCircleWithSquare(canvasId) {

 
    var x = Math.random() * (canvas.width - 20) + 10; 
    var y = Math.random() * (canvas.height - 20) + 10; 


    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);


    var squareSize = Math.random() * 50 + 10; 


    var circleRadius = squareSize / Math.sqrt(2);

    var squareX = x - squareSize / 2;
    var squareY = y - squareSize / 2;
    ctx.fillStyle = randomColor;
    ctx.fillRect(squareX, squareY, squareSize, squareSize);

    ctx.beginPath();
    ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = randomColor;
    ctx.stroke();
    ctx.closePath();
}

function drawRandomK(canvasId) {

    var x = Math.random() * (canvas.width - 100); 
    var y = Math.random() * (canvas.height - 200); 


    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

    ctx.strokeStyle = randomColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 50);
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + 20, y);
    ctx.moveTo(x, y + 20);
    ctx.lineTo(x + 20, y + 50);
    ctx.stroke();
}

