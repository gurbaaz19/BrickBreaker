export default class Ball{
    constructor(context) {
        this.image=document.getElementById('img_ball');
        this.context=context;

        this.speed={
            x:2,
            y:2
        };
    }

    draw(){
        this.context.drawImage(this.image,10,10,40,40)
    }

    update(changeInTime){

    }
}