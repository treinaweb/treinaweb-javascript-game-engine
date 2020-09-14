import {Draw} from './draw.js';
import {ImageManager} from './imageManager.js';
import {SoundManager} from './soundManager.js';
import {Input} from './input.js';

const canvas = document.querySelector('#canvas');

export const Game = {
    gameObjectList: [],
    isRunning: false,
    Input,
    ImageManager,
    SoundManager,
    constructor(){
        Game.canvas = {
            element: canvas,
            ctx: canvas.getContext('2d'),
            width: canvas.width,
            height: canvas.height,
            top: 0,
            bottom: canvas.height,
            left: 0,
            right: canvas.width,
            center: {
                x: canvas.width/2,
                y: canvas.height/2
            }
        }
        Game.Drawing = new Draw(Game.canvas.ctx, Game.canvas.width, Game.canvas.height);
    },
    addObject(gameObject){
        Game.gameObjectList.push(gameObject);
        gameObject.start();
    },
    removeObject(gameObject){
        const objectIndex = Game.gameObjectList.indexOf(gameObject);
        Game.gameObjectList.splice(objectIndex, 1);
        gameObject.onDestroy();
    },
    start(){
        if(!Game.isRunning){
            Game.isRunning = true;
            Game.run();
        }
    },
    stop(){
        if(Game.isRunning){
            Game.isRunning = false;
        }
    },
    run(){
        if(Game.isRunning){
            Game.update();
            Game.draw();
            window.requestAnimationFrame(Game.run);
        }
    },
    update(){
        Game.gameObjectList.forEach(gameObject => gameObject.update());
    },
    draw(){
        Game.Drawing.clearCanvas();
        Game.Drawing.drawImage(Game.ImageManager.image('background'), 0, 200);
        Game.gameObjectList.forEach(gameObject => gameObject.draw());
    }
}