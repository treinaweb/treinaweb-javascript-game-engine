import {GameObject} from '../game-engine/gameObject.js';

export class Ball extends GameObject{
    constructor(size = 20){
        super(0, 0, size, size);
        this.speed = 5;
        this.size = size;
        this.color = 'white';
    }

    goRight(){
        if(this.right < this.game.canvas.right){
            this.x += this.speed;
        }
    }

    goLeft(){
        if(this.left > this.game.canvas.left){
            this.x -= this.speed;
        }
    }

    goUp(){
        if(this.top > this.game.canvas.top){
            this.y -= this.speed;
        }
    }

    goDown(){
        if(this.bottom < this.game.canvas.bottom){
            this.y += this.speed;
        }
    }

    draw(){
        this.drawing.drawCircle(this.center.x, this.center.y, this.size, this.color)
    }
}