import {detectCollision} from "./detectCollision.js";

export default class Ball {
    constructor(game) {

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.image = document.getElementById('img_ball');
        this.context = game.context;

        this.game = game;
        this.size = 30;
    }

    reset() {
        this.position = {
            x: 40,
            y: this.gameHeight - 40
        }

        this.speed = {
            x: 3,
            y: -3
        };
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(changeInTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) this.speed.x *= -1;

        if (this.position.y < 0) this.speed.y *= -1;

        if (this.position.y + this.size > this.gameHeight) {
            this.game.chances--;

            this.reset();

        }

        if (detectCollision(this, this.game.paddle)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }
}