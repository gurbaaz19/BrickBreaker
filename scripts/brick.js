import {detectCollision} from "./detectCollision.js";

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('img_brick');
        this.context = game.context;
        this.game = game;
        this.position = position;
        this.width = 40;
        this.height = 40;

        this.toBeDeleted = false;
    }

    update(changeInTime) {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y *= -1;
            this.toBeDeleted = true;
        }
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}