export default class Paddle {
    constructor(game) {
        //dimensions
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 120;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height - 10
        };

        this.context = game.context;
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }


    draw() {
        let gradient = this.context.createLinearGradient(this.position.x, this.position.y, this.position.x+this.width, this.position.y+this.height);
        gradient.addColorStop(1, "#c02727");
        gradient.addColorStop(0, "#851b1b");
        this.context.fillStyle= gradient;
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    update(changeInTime) {
        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;
        else if (this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
    }
}