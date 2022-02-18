canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="orange";
width_of_line=2;
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mouseDown",my_mouse_down);
function my_mouse_down(e){
    mouseEvent="mouseDown";  
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseup";  
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";  
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();

    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}