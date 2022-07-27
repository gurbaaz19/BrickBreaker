import Game from "./game.js";

let canvas=document.getElementById("playable_screen");
let context=canvas.getContext("2d");

let game = new Game(canvas.width,canvas.height,context);

let lastTime =0;

function gameLoop(timeStamp){
    let changeInTime=timeStamp-lastTime;
    lastTime=timeStamp;

    context.clearRect(0,0,canvas.width,canvas.height);

    game.update(changeInTime);
    game.draw();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);