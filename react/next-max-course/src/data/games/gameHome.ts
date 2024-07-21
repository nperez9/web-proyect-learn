import { Game, GamePlatform } from '@/types/game';

import superDragonsLair2Cover from '@/assets/images/games/super-dragons-lair-2/cover.jpg';
import lethalWingCover from '@/assets/images/games/lethal-wing/cover.png';
import cannonBlast from '@/assets/images/games/cannon-blast/cover.jpg';

export const games: Game[] = [
  {
    id: 1,
    name: 'Super Dragons Lair 2',
    description: 'Escape of the dragon cave with this addictive endless runner',
    coverImage: superDragonsLair2Cover,
    coverImageAlt: 'Super Dragons Lair 2 cover image',
    backgroundImage: 'gamedock-images/dragons-lair-2.jpg',
    playLinks: [
      {
        link: 'https://www.gato.us/game/super-dragons-lair-2',
        platform: GamePlatform.Gato,
      },
      {
        link: 'https://www.gamepix.com/play/super-dragons-lair-2',
        platform: GamePlatform.GamePix,
      },
    ],
  },
  {
    id: 2,
    name: 'Lethal Wing',
    description: 'Immerse yourself in Lethal Wing a classic shoot-em-up adventure inspired by the legendary 1942',
    coverImage: lethalWingCover,
    coverImageAlt: 'lethal wing cover',
    backgroundImage: 'gamedock-images/lethal-wing.jpg',
    playLinks: [
      {
        link: 'https://nperez9.itch.io/lethal-wing',
        platform: GamePlatform.Itch,
      },
    ],
  },
  {
    id: 3,
    name: 'Super Cannon Blast',
    description: 'This is a classic arcade game inspired by the barrel mechanic of the Donkey Kong Country series.',
    coverImage: cannonBlast,
    coverImageAlt: 'cannon blast cover',
    backgroundImage: 'gamedock-images/cannon-blast.png',
    playLinks: [
      {
        link: 'https://nperez9.itch.io/lethal-wing',
        platform: GamePlatform.Itch,
      },
    ],
  },
];
