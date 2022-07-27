import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import {createBricks, STAGE_1, STAGE_2, STAGE_3} from "./stages.js";

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

export default class Game {
    constructor(gameWidth, gameHeight, context) {
        this.context = context;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [];
        this.bricks = [];
        this.chances = 3;

        this.stages = [STAGE_1, STAGE_2, STAGE_3];
        this.currentStage = 0;

        new InputHandler(this.paddle, this);
    }

    start() {

        if (
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.NEWLEVEL
        ) {
            this.bricks = createBricks(this, this.stages[this.currentStage]);
            this.ball.reset();
            this.gameObjects = [this.ball, this.paddle];

            this.gamestate = GAMESTATE.RUNNING;
        }
    }

    update(changeInTime) {
        if (this.chances === 0) this.gamestate = GAMESTATE.GAMEOVER;

        if (this.gamestate !== GAMESTATE.PAUSED && this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.GAMEOVER) {
            this.gameObjects.forEach((object) => object.update(changeInTime));

            if (this.bricks.length === 0) {
                this.currentStage++;
                this.gamestate = GAMESTATE.NEWLEVEL;
                this.start();
            }

            [...this.gameObjects, ...this.bricks].forEach(object =>
                object.update(changeInTime)
            );

            this.bricks = this.bricks.filter((brick) => !brick.toBeDeleted);
        }
    }

    draw() {
        [...this.gameObjects, ...this.bricks].forEach((object) => object.draw());

        if (this.gamestate === GAMESTATE.PAUSED) {
            this.context.rect(0, 0, this.gameWidth, this.gameHeight);
            this.context.fillStyle = "rgba(199,12,12,0.9)";
            this.context.fill();
            this.context.font = "50px Arial";
            this.context.fillStyle = "white";
            this.context.textAlign = "center";
            this.context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.gamestate === GAMESTATE.MENU) {
            this.context.rect(0, 0, this.gameWidth, this.gameHeight);
            this.context.fillStyle = "rgba(199,12,12,0.9)";
            this.context.fill();

            this.context.font = "40px Arial";
            this.context.fillStyle = "white";
            this.context.textAlign = "center";
            this.context.fillText(
                "Press SPACEBAR To Start The Game",
                this.gameWidth / 2,
                this.gameHeight / 2
            );
        }
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            this.context.rect(0, 0, this.gameWidth, this.gameHeight);
            this.context.fillStyle = "rgba(199,12,12,0.9)";
            this.context.fill();

            this.context.font = "35px Arial";
            this.context.fillStyle = "white";
            this.context.textAlign = "center";
            this.context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
        }
    }

    togglePause() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING;
        } else {
            this.gamestate = GAMESTATE.PAUSED;
        }
    }
}