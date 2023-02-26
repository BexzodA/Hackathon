class GameOver {
    constructor(_stage) {
        this.scene = new PIXI.Container();
        
        const bg = PIXI.Sprite.from("./imgs/background.png");
        bg.x = 0;
        bg.y = 0;
        bg.width = 800;
        bg.height = 600;
        bg.buttonMode = true;
        bg.interactive = true;
        bg.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        this.scene.addChild(bg);

        const overText = new PIXI.Text('Game Over!');
        overText.x = 200;
        overText.y = 250
        overText.style = new PIXI.TextStyle({
            fill: 0xFFFF00,
            fontSize: 80,
            fontFamily: "Press Start 2P",
        });
        overText.buttonMode = true;
        overText.interactive = true;
        overText.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        ///overText.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        ////overText.on("pointerout", e => e.currentTarget.alpha = 1.0);
        //this.scene.addChild(overText);
        this.scene.addChild(overText);

        this.stage = _stage;
    }

    getScene() {
        return this.scene;
    }
    
    nextScene() {
        transitionToScene(this, new MainMenu(this.stage));
    }
}