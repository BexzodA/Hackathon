
class MunsonBurger {
    constructor(_stage) {
        this.scene = new PIXI.Container();

        const text2 = new PIXI.Text('Which of the following is not in the Munson Burger?');
        text2.style.fill = 0xffffff; // 0xff0000 is the hex code for red
        this.scene.addChild(text2);

        this.stage = _stage;

        let playButtonLabel1 = PIXI.Sprite.from("./imgs/Pastrami.png");
        playButtonLabel1.x = 25;
        playButtonLabel1.y = 40;
        playButtonLabel1.width = 350;
        playButtonLabel1.height = 280;
        playButtonLabel1.buttonMode = true;
        playButtonLabel1.interactive = true;
        playButtonLabel1.on("pointerup", this.gameOver.bind(this)); //startGame is a function reference
        playButtonLabel1.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        playButtonLabel1.on("pointerout", e => e.currentTarget.alpha = 1.0);
        this.scene.addChild(playButtonLabel1);
        
        let playButtonLabel2 = PIXI.Sprite.from("./imgs/Swiss.png");
        playButtonLabel2.x = 425;
        playButtonLabel2.y = 40;
        playButtonLabel2.width = 350;
        playButtonLabel2.height = 280;
        playButtonLabel2.buttonMode = true;
        playButtonLabel2.interactive = true;
        playButtonLabel2.on("pointerup", this.gameOver.bind(this)); //startGame is a function reference
        playButtonLabel2.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        playButtonLabel2.on("pointerout", e => e.currentTarget.alpha = 1.0);
        this.scene.addChild(playButtonLabel2);
        

        let playButtonLabel3 = PIXI.Sprite.from("./imgs/Coleslaw.png");
        playButtonLabel3.x = 25;
        playButtonLabel3.y = 320;
        playButtonLabel3.width = 350;
        playButtonLabel3.height = 280;
        playButtonLabel3.buttonMode = true;
        playButtonLabel3.interactive = true;
        playButtonLabel3.on("pointerup", this.gameOver.bind(this)); //startGame is a function reference
        playButtonLabel3.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        playButtonLabel3.on("pointerout", e => e.currentTarget.alpha = 1.0);
        this.scene.addChild(playButtonLabel3);

        let playButtonLabel4 = PIXI.Sprite.from("./imgs/Bacon.png");
        playButtonLabel4.x = 425;
        playButtonLabel4.y = 320;
        playButtonLabel4.width = 350;60
        playButtonLabel4.height = 280;
        playButtonLabel4.buttonMode = true;
        playButtonLabel4.interactive = true;
        playButtonLabel4.on("pointerup", this.nextScene.bind(this)); //startGame is a function reference
        playButtonLabel4.on("pointerover", e => e.target.alpha = 0.7); //concise arrow func with now brackets
        playButtonLabel4.on("pointerout", e => e.currentTarget.alpha = 1.0);
        this.scene.addChild(playButtonLabel4);

        /*let nameLabel1 = new PIXI.Text('A: 6 - 9 million');
        nameLabel1.style = new PIXI.TextStyle({
            fill: 0x000000,
            fontSize: 14,
            fontFamily: "Press Start 2P",
        });
        nameLabel1.x = 30;
        nameLabel1.y = 325;
        this.scene.addChild(nameLabel1);

        let nameLabel2 = new PIXI.Text('B: 10 - 12 million');
        nameLabel2.style = new PIXI.TextStyle({
            fill: 0x000000,
            fontSize: 14,
            fontFamily: "Press Start 2P",
        });
        nameLabel2.x = 430;
        nameLabel2.y = 325;
        this.scene.addChild(nameLabel2);

        let nameLabel3 = new PIXI.Text('C: 13 - 15 million');
        nameLabel3.style = new PIXI.TextStyle({
            fill: 0x000000,
            fontSize: 14,
            fontFamily: "Press Start 2P",
        });
        nameLabel3.x = 30;
        nameLabel3.y = 475;
        this.scene.addChild(nameLabel3);

        let nameLabel4 = new PIXI.Text('D: 16 - 18 million');
        nameLabel4.style = new PIXI.TextStyle({
            fill: 0x000000,
            fontSize: 14,
            fontFamily: "Press Start 2P",
        });
        nameLabel4.x = 430;
        nameLabel4.y = 475;
        this.scene.addChild(nameLabel4);*/


        this.stage.addChild(this.scene);
    }

    getScene() {
        return this.scene;
    }

    nextScene() {
        transitionToScene(this, new MainMenu(this.stage));
    }

    gameOver() {
        transitionToScene(this, new GameOver(this.stage));
    }
}