import {Game} from './scripts/game-engine/game.js';
import { GameObject } from './scripts/game-engine/gameObject.js';

import {Ball} from './scripts/game/Ball.js';

Game.constructor();
Promise.all([
    Game.SoundManager.loadAll([
        {
            name: 'hit',
            src: './scripts/game/snd/pong-hit.mp3'
        }
    ]),
    Game.ImageManager.loadAll([
        {
            name: 'background',
            src: './scripts/game/img/background.png'
        }
    ])
])
.then(() => {
    Game.start();
    const ball = new Ball(20);
    const ball2 = new Ball(30);
    Game.addObject(ball);
    Game.addObject(ball2);
    
    ball.update = function(){
        this.color = 'white';        
        if(this.input.onKey(this.input.key.LEFT)){
            this.goLeft();
        }

        if(this.input.onKey(this.input.key.RIGHT)){
            this.goRight();
        }

        if(this.input.onKey(this.input.key.UP)){
            this.goUp();
        }

        if(this.input.onKey(this.input.key.DOWN)){
            this.goDown();
        }
    }

    ball.onCollision = function(other){
        this.color = 'pink';
    }


    ball2.update = function(){
        if(this.input.onKey(this.input.key.A)){
            this.goLeft();
        }

        if(this.input.onKey(this.input.key.D)){
            this.goRight();
        }

        if(this.input.onKey(this.input.key.W)){
            this.goUp();
        }

        if(this.input.onKey(this.input.key.S)){
            this.goDown();
        }
    }
    
})



