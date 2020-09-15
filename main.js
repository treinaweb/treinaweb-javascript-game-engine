import {Game} from './scripts/game-engine/game.js';

Game.constructor();
Promise.all([
    Game.SoundManager.loadAll([]),
    Game.ImageManager.loadAll([])
])
.then(() => {
    Game.start();
    
    
});