
class Scene2 {
    constructor(_stage) {
        this.scene = new PIXI.Container();

        const text3 = new PIXI.Text('This is scene 3');
        text3.style.fill = 0xffffff; // 0xff0000 is the hex code for red
        this.scene.addChild(text3);

        this.stage = _stage;
    }

    getScene() {
        return this.scene;
    }

   // nextScene() {
    //    transitionToScene(this, new Scene3(this.stage));
   // }
}