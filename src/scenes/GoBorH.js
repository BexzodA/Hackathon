class GoBorH {
    constructor(_stage) {
        this.scene = new PIXI.Container();
        this.stage = _stage;

        this.brick = PIXI.Sprite.from("../../imgs/Brick.png");
        this.brick.x = 150;
        this.brick.y = 200;
        this.brick.width = 150;
        this.brick.height = 150;
        this.brick.buttonMode = true;
        this.brick.interactive = true;
        this.brick.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        this.brick.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        this.brick.on("pointerout", e => e.currentTarget.alpha = 1.0);

        this.home = PIXI.Sprite.from("../../imgs/house.png");
        this.home.x = 500;
        this.home.y = 200;
        this.home.width = 150;
        this.home.height = 150;
        this.home.buttonMode = true;
        this.home.interactive = true;
        this.home.on("pointerup", this.gameOver.bind(this)); //startGame is a function reference
        this.home.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        this.home.on("pointerout", e => e.currentTarget.alpha = 1.0);

        this.scene.addChild(this.brick);
        this.scene.addChild(this.home);
    }

    getScene() {
        return this.scene;
    }

    nextScene() {
        transitionToScene(this, new BrickCount(this.stage));
    }

    gameOver() {
        transitionToScene(this, new GameOver(this.stage));
    }
}
