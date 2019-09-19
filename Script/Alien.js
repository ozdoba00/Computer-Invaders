class Alien extends Phaser.Physics.Arcade. Sprite{
  constructor(config, scoreValue, color){
    super(config.scene, config.x, config.y,  config.tileset, config.frame)

    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.physicsBodyType = Phaser.Physics.ARCADE;
    this.color=color;
    this.scoreValue=scoreValue;
    this.tint = color;

  }


}
