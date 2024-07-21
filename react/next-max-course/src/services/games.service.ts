import { Game } from '@/types/game';
import { games } from '@/data/games/gameHome';

export const getGamesForHome = async (): Promise<Game[]> => {
  return new Promise((resolve) => {
    resolve(games);
  });
};
