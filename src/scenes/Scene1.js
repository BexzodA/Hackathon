
class Scene1 {
    constructor(_stage) {
        this.scene = new PIXI.Container();

        const text2 = new PIXI.Text('This is scene 2');
        text2.style.fill = 0xffffff; // 0xff0000 is the hex code for red
        this.scene.addChild(text2);

        this.stage = _stage;
    }

    getScene() {
        return this.scene;
    }
}