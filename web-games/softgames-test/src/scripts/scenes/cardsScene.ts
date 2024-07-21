import { Sprites } from '../constants';
import FpsText from '../objects/fpsText';
import { GetBackButton } from '../objects/getBackButton';
import { getSceneDimensions } from '../utils';

export class CardsScene extends Phaser.Scene {
  private fpsText: FpsText;
  private totalCards = 144;
  private cardSprites = [];
  private reversedCounter = 0;
  private height = 0;
  private secondDeckX = 0;
  private cardIndex = 0;
  private spacing = 2;

  constructor() {
    super({ key: 'CardsScene' });
  }

  private setupLevel(): void {
    new GetBackButton(this);
    this.fpsText = new FpsText(this).setDepth(100);
    const { screenWidth, screenHeight } = getSceneDimensions(this);
    const firstDeckX = screenWidth / 2 - 100;

    this.secondDeckX = screenWidth / 2 + 100;
    this.height = screenHeight / 2 - 200;
    this.reversedCounter = 0;

    for (let i = 0; i < this.totalCards; i++) {
      this.cardSprites.push(this.add.sprite(firstDeckX, this.height + i * this.spacing, Sprites.Cards));
    }

    this.cardIndex = this.totalCards - 1;
    this.moveCard(this.cardSprites[this.cardIndex]);
  }

  moveCard(card: Phaser.GameObjects.Sprite) {
    card.setDepth(this.reversedCounter);
    const tween = this.tweens.add({
      targets: card,
      x: this.secondDeckX,
      y: this.height + this.reversedCounter * this.spacing,
      ease: 'Linear',
      duration: 2000,
    });

    tween.on('complete', (test) => {
      console.log(test);
      this.reversedCounter++;
      this.cardIndex--;
      if (this.cardIndex < 0) {
        return;
      }
      this.moveCard(this.cardSprites[this.cardIndex]);
    });
  }

  create() {
    this.setupLevel();
  }

  update() {
    this.fpsText.update();
  }
}
