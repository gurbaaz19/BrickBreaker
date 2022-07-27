import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

let canvas=document.getElementById("playable_screen");
let context=canvas.getContext("2d");

let paddle= new Paddle(canvas.width,canvas.height,context);
let ball= new Ball(context);
new InputHandler(paddle);

paddle.draw();

let lastTime =0;

function gameLoop(timeStamp){
    let changeInTime=timeStamp-lastTime;
    lastTime=timeStamp;

    context.clearRect(0,0,canvas.width,canvas.height);
    paddle.update(changeInTime);
    paddle.draw();
    ball.draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);