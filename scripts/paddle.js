export default class Paddle {
    constructor(gameWidth, gameHeight, context) {
        //dimensions
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 120;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };

        this.context = context;
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
        this.context.fillStyle = "#c02727";
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(changeInTime) {
        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;
        else if (this.position.x > this.gameWidth - this.width) this.position.x = this.gameWidth - this.width;
    }
}