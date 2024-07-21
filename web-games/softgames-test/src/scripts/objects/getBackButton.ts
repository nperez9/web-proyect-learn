import { getSceneDimensions } from '../utils';

export class GetBackButton extends Phaser.GameObjects.Text {
  constructor(scene) {
    const { screenWidth } = getSceneDimensions(scene);
    super(scene, screenWidth - 20, 20, 'Back', { color: '#FFF', fontSize: '28px', fontFamily: 'sans-serif' });
    scene.add.existing(this);
    this.setOrigin(1, 0)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => scene.scene.start('MainMenu'))
      .on('pointerover', () => this.setStyle({ fill: '#f39c12' }))
      .on('pointerout', () => this.setStyle({ fill: '#FFF' }));
  }
}
