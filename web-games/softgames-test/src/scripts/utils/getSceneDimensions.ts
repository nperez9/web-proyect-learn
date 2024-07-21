import { Scene } from 'phaser';

/**
 * Returns the width and the height of a loaded sprites. (is only usable after preload scene)
 * @param scene Phaser Scene (this)
 * @param sprite Sprite key
 * @returns
 */
export const getSceneDimensions = (scene: Scene): { screenWidth: number; screenHeight: number } => {
  const screenWidth = scene.sys.game.config.width as number;
  const screenHeight = scene.sys.game.config.height as number;

  return {
    screenWidth,
    screenHeight,
  };
};
