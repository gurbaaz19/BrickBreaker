import Paddle from "./paddle.js";
import Ball from "./ball.js";
import InputHandler from "./input.js";
import {createBricks, STAGE_1} from "./stages.js";

export default class Game {
    constructor(gameWidth, gameHeight, context) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.context = context;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = createBricks(this, STAGE_1);

        this.gameObjects = [
            this.ball, this.paddle, ...bricks
        ]

        new InputHandler(this.paddle);
    }

    update(changeInTime) {
        this.gameObjects.forEach((object) => object.update(changeInTime));
    }

    draw() {
        this.gameObjects.forEach((object) => object.draw());
    }
}