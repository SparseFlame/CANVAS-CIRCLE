canvas = document.getElementById("idkcanvas");
ctx = canvas.getContext("2d");

coloor = "red";
ctx.beginPath();
ctx.strokeStyle = coloor;
ctx.lineWidth = 10;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", MOUSEEEEEEEEEEE);

function MOUSEEEEEEEEEEE(e)
{
    mousee = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;

    console.log("X - " + mousee + ",Y - " + mousey);
    circle(mousee, mousey);
}

function circle(mousee, mousey)
{
    color = "red";
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.arc(mousee, mousey, 40, 0, 2*Math.PI);
    ctx.stroke();
}