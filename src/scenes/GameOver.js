class GameOver {
    constructor(_stage) {
        this.scene = new PIXI.Container();

        const overText = new PIXI.Text('Game Over!');
        overText.x = 200;
        overText.y = 250
        overText.style = new PIXI.TextStyle({
            fill: 0xFFFF00,
            fontSize: 80,
            fontFamily: "Press Start 2P",
        });
        this.scene.addChild(overText);

        this.stage = _stage;
    }

    getScene() {
        return this.scene;
    }
}