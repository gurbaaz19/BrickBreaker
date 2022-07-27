export default class Ball {
    constructor(game) {

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.image = document.getElementById('img_ball');
        this.context = game.context;

        this.game = game;

        this.position = {
            x: 40,
            y: 40
        }

        this.speed = {
            x: 5,
            y: 5
        };

        this.size = 30;
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(changeInTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) this.speed.x *= -1;

        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) this.speed.y *= -1;

        let ballBottom = this.position.y + this.size;
        let topPaddle = this.game.paddle.position.y;
        let leftPaddle = this.game.paddle.position.x;
        let rightPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if (ballBottom >= topPaddle && (this.position.x > leftPaddle && this.position.x + this.size < rightPaddle)) {
            this.speed.y *= -1;
            this.position.y = this.game.paddle.position.y - this.size;
        }

    }
}