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
    Game.addObject(ball);
    
    
})



