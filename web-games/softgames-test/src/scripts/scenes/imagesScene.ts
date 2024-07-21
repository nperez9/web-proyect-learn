import { fontSizeRange, images, possibleTexts } from '../config/imagesConfig';
import FpsText from '../objects/fpsText';
import { GetBackButton } from '../objects/getBackButton';
import { Sprite } from '../types';
import { getSceneDimensions } from '../utils';

export class ImagesScene extends Phaser.Scene {
  private fpsText: FpsText;
  private centerX: number;
  private centerY: number;
  private showImage: Sprite;
  private showText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'ImagesScene' });
  }

  private setupLevel(): void {
    new GetBackButton(this);
    this.fpsText = new FpsText(this).setDepth(100);
    const { screenWidth, screenHeight } = getSceneDimensions(this);
    this.centerX = screenWidth / 2;
    this.centerY = screenHeight / 2;

    this.renderImageAndText();

    this.time.addEvent({
      delay: 2000,
      callback: this.renderImageAndText,
      callbackScope: this,
      loop: true,
    });
  }

  private renderImageAndText() {
    if (this.showImage) {
      this.showImage.destroy();
    }
    if (this.showText) {
      this.showText.destroy();
    }
    const randomImage = Phaser.Math.Between(0, images.length - 1);
    const randomText = Phaser.Math.Between(0, possibleTexts.length - 1);
    const radomFontSize = Phaser.Math.Between(fontSizeRange.min, fontSizeRange.max);

    this.showImage = this.add.sprite(this.centerX, this.centerY, images[randomImage].key).setOrigin(0.5);
    this.showText = this.add
      .text(this.centerX, this.centerY + 200, possibleTexts[randomText], {
        color: '#FFF',
        fontSize: `${radomFontSize}px`,
        fontFamily: 'sans-serif',
      })
      .setOrigin(0.5, 1);
  }

  create() {
    this.setupLevel();
  }

  update() {
    this.fpsText.update();
  }
}
