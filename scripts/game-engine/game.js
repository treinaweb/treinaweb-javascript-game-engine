import {Draw} from './draw.js';

const canvas = document.querySelector('#canvas');

export const Game = {
    isRunning: false,

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
        
    },
    draw(){
        Game.Drawing.clearCanvas();
        Game.Drawing.drawCircle(100, 100, 20)
        Game.Drawing.drawText(Game.canvas.center.x, 50, 'Start Game');
    }
}