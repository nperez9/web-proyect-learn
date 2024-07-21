import { Particles } from '../constants';
import FpsText from '../objects/fpsText';
import { GetBackButton } from '../objects/getBackButton';
import { getSceneDimensions } from '../utils';

export class FireScene extends Phaser.Scene {
  private fpsText: FpsText;

  constructor() {
    super({ key: 'FireScene' });
  }

  private setupLevel(): void {
    new GetBackButton(this);
    this.fpsText = new FpsText(this).setDepth(100);
    const { screenWidth, screenHeight } = getSceneDimensions(this);

    const flame = this.add.particles(screenWidth / 2, screenHeight / 2, Particles.Fire, {
      frame: 'white',
      color: [0xfacc22, 0xf89800, 0xf83600, 0x9f0404],
      colorEase: 'quad.out',
      lifespan: 2400,
      angle: { min: -100, max: -80 },
      scale: { start: 0.7, end: 0, ease: 'sine.out' },
      speed: 100,
      advance: 2000,
      blendMode: 'ADD',
    });
  }

  create() {
    this.setupLevel();
  }

  update(): void {
    this.fpsText.update();
  }
}
