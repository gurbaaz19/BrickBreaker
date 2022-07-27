export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('img_brick');
        this.context = game.context;
        this.game = game;
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    update(changeInTime) {}

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}