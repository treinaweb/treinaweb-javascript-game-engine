import {GameObject} from '../game-engine/gameObject.js';

export class Character extends GameObject{
    constructor(){
        super(0, 280, 20, 20);
        this.walkAnimation = this.game.AnimationManager.createAnimation([
            1,2,3,4,5,6,7,8,9,10
        ])
    }

    update(){
        if(this.left > this.game.canvas.right){
            this.right = 0;
        }
        this.x += 5;
    }

    draw(){
        const sprite = this.game.AnimationManager.sprite('kirby');
        const index = this.walkAnimation();
        this.drawing.drawSprite(sprite, index, this.x, this.y, 80, 80);
    }
}