
class Suspect {
    constructor(_stage) {
        this.scene = new PIXI.Container();

        const baka = PIXI.Sprite.from("./imgs/SUS.png");
        baka.x = 0;
        baka.y = 0;
        baka.width = 800;
        baka.height = 600;
        baka.buttonMode = true;
        baka.interactive = true;
        baka.on("pointerup", this.gameOver.bind(this)); //startGame is a function reference
        this.scene.addChild(baka);

        const text3 = new PIXI.Text('Find the imposter');
        text3.style.fill = 0xffffff; // 0xff0000 is the hex code for red
        this.scene.addChild(text3);

        

        let sussy = PIXI.Sprite.from("../imgs/Button.png");
        sussy.x = 115;
        sussy.y = 252;
        sussy.width = 100;
        sussy.height = 60;
        sussy.alpha = 0;
        sussy.buttonMode = true;
        sussy.interactive = true;
        sussy.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        //sussy.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        //sussy.on("pointerout", e => e.currentTarget.alpha = 0);
        this.scene.addChild(sussy);

        this.stage = _stage;
    }

    getScene() {
        return this.scene;
    }

    nextScene() {
        transitionToScene(this, new MunsonBurger(this.stage));
    }

    gameOver() {
        transitionToScene(this, new GameOver(this.stage));
    }
}