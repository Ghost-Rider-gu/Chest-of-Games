import Phaser from "phaser";
import MainScene from "./scenes/MainScene.ts";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [MainScene],
}

export default new Phaser.Game(config)
