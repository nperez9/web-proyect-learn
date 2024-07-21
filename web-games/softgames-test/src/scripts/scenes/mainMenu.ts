import { getSceneDimensions } from '../utils/getSceneDimensions';

export class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });
  }

  private cursors;
  private style = { color: '#FFF', fontSize: '32px', fontFamily: 'sans-serif' };

  create() {
    const { screenWidth, screenHeight } = getSceneDimensions(this);
    const centerWidth = screenWidth / 2;
    const centerHeight = screenHeight / 2;
    const spacing = screenHeight / 10 + 32;

    this.add.text(centerWidth, 40, 'Softgames Test', { ...this.style, fontSize: '48px', color: 'orange' }).setOrigin(0.5, 0.5);

    this.addMenuButton(centerWidth, centerHeight - spacing, 'Cards Animator', () => this.startScene('CardsScene'));
    this.addMenuButton(centerWidth, centerHeight, 'Random Image and Text', () => this.startScene('ImagesScene'));
    this.addMenuButton(centerWidth, centerHeight + spacing, 'Play Fire', () => this.startScene('FireScene'));
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  addMenuButton(width: number, height: number, text: string, callback: () => void, customStyle = {}) {
    const button = this.add
      .text(width, height, text, { ...this.style, ...customStyle })
      .setOrigin(0.5, 0.5)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', callback)
      .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
      .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
  }

  private startScene(scene: string) {
    this.scene.start(scene);
  }
}
