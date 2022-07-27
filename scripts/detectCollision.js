export function detectCollision(ball, collidedObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = collidedObject.position.y;
    let leftSideOfObject = collidedObject.position.x;
    let rightSideOfObject = collidedObject.position.x + collidedObject.width;
    let bottomOfObject = collidedObject.position.y + collidedObject.height;

    return bottomOfBall >= topOfObject && topOfBall <= bottomOfObject && ball.position.x >= leftSideOfObject && ball.position.x <= rightSideOfObject - ball.size;
}
