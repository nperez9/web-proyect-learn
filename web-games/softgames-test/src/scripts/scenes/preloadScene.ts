import { images } from '../config/imagesConfig';
import { Particles, Sprites } from '../constants';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.atlas(Particles.Fire, 'assets/particles/fire.png', 'assets/particles/fire.json');
    this.load.image(Sprites.Cards, 'assets/sprites/cards.png');

    images.forEach((image) => {
      this.load.image(image.key, image.src);
    });
  }

  create() {
    this.scene.start('MainMenu');
  }
}
