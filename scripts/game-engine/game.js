import {Draw} from './draw.js';
import {ImageManager} from './imageManager.js';
import {SoundManager} from './soundManager.js';
import {Input} from './input.js';

const canvas = document.querySelector('#canvas');

let circleX = 0;

export const Game = {
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
        if(Game.Input.onKey(Game.Input.key.LEFT)){
            circleX -= 5;
        }

        if(Game.Input.onKey(Game.Input.key.RIGHT)){
            circleX += 5;
        }
    },
    draw(){
        Game.Drawing.clearCanvas();
        Game.Drawing.drawImage(Game.ImageManager.image('background'), 0, 200)        
        Game.Drawing.drawCircle(circleX, 100, 20)
        Game.Drawing.drawText(Game.canvas.center.x, 50, 'Start Game');
    }
}