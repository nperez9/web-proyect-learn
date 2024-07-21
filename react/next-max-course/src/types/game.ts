import { StaticImageData } from 'next/image';

export interface Game {
  id: number;
  name: string;
  description: string;
  backgroundImage: string;
  coverImage: StaticImageData;
  coverImageAlt: string;
  playLinks: PlayLink[];
  color?: string;
  sortOrder?: number;
}

export interface PlayLink {
  link: string;
  platform: GamePlatform;
  name?: string;
  sortOrder?: number;
}

export enum GamePlatform {
  Steam = 'Steam',
  EpicGames = 'Epic Games',
  Gato = 'Gato',
  GamePix = 'GamePix',
  Itch = 'itch.io',
}
