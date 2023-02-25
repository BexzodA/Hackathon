
class MainMenu {
    constructor(_stage) {
        this.mainMenu = new PIXI.Container();
        this.stage = _stage;

        let title = PIXI.Sprite.from("../imgs/title.png");
        title.x = 4;
        title.y = 3;
        title.width = 792;
        title.height = 593;
        this.mainMenu.addChild(title);

        let playButtonLabel = PIXI.Sprite.from("../imgs/playButton.png");
        playButtonLabel.x = 300;
        playButtonLabel.y = 450;
        playButtonLabel.buttonMode = true;
        playButtonLabel.interactive = true;
        playButtonLabel.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        playButtonLabel.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        playButtonLabel.on("pointerout", e => e.currentTarget.alpha = 1.0);
        this.mainMenu.addChild(playButtonLabel);
        this.stage.addChild(this.mainMenu);
    }

    getScene() {
        return this.mainMenu;
    }

    nextScene() {
        transitionToScene(this, new GoBorH(this.stage));
    }
}