"use strict"
const app = new PIXI.Application({
    width: 800,
    height: 600 
});
onload = ()=> {
    document.body.append(app.view);
    setup();
}

let stage;
let mainMenu;
let scene1;

function transitionToScene(from, to) {
    app.stage.removeChild(from.getScene());
    app.stage.addChild(to.getScene());
}

function setup() {
    stage = app.stage;

    const bg = PIXI.Sprite.from("./imgs/background.png");
    bg.x = 0;
    bg.y = 0;
    bg.width = 800;
    bg.height = 600;
    stage.addChild(bg);

    let mainMenu = new MainMenu(stage);

    var graphics = new PIXI.Graphics();
    graphics.lineStyle(5, 0xFF0000);
    graphics.drawRect(3, 2, 795, 595);
    stage.addChild(graphics);
}
