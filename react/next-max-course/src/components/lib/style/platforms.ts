import { GamePlatform } from '@/types/game';

import GatoImage from '@/assets/images/plat-logos/gato-black.png';
import GamePixImage from '@/assets/images/plat-logos/gamepix-black.png';
import ItchImage from '@/assets/images/plat-logos/itch-io.png';

export const platforms = {
  [GamePlatform.Gato]: {
    image: GatoImage,
    alt: 'Gato Game Platform',
    color: 'rgb(229, 246, 140)',
  },
  [GamePlatform.GamePix]: {
    image: GamePixImage,
    alt: 'GamePix Game Platform',
    color: '#4587c5',
  },
  [GamePlatform.Itch]: {
    image: ItchImage,
    alt: 'itch.io Game Platform',
    color: '#FF2449',
  },
};
