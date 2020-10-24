var my_mouse = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color ="red";
width = 1;
var last_x, last_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown() {
    my_mouse="mouseDown";

    color =document.getElementById("input_color").value;
    width =document.getElementById("input_width").value;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    my_mouse="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    my_mouse="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (my_mouse == "mouseDown") {
        ctx.beginPath();
        ctx.lineWidth= width;
        ctx.strokeStyle = color;

        console.log("Last x and y coordinates are");
        console.log("X = " + last_x + ", Y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current x and y coordinates are");
        console.log("X = " + current_x + ", Y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;

}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}