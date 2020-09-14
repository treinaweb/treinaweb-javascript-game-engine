import {Game} from './scripts/game-engine/game.js';

Game.constructor();

Game.ImageManager.loadAll([
    {
        name: 'background',
        src: './scripts/game/img/background.png'
    }
]).then(() => {
    Game.start();

})



