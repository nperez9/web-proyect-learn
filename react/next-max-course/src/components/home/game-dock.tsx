import React from 'react';
import Image from 'next/image';

import classes from './game-dock.module.css';

import { Game } from '@/types/game';
import { ButtonPlatform } from '../lib';

export interface GameDockProps {
  games: Game[];
}

export const GameDock: React.FC<GameDockProps> = ({ games }) => (
  <div>
    {games.map((game, index) => {
      const isEven = index % 2 === 0;
      const flexDirection = isEven ? 'flex-row' : 'flex-row-reverse';

      return (
        <article style={{ backgroundImage: `url(${game.backgroundImage})` }} key={game.name}>
          <div className={classes.GameDockOverlay}>
            <section className={classes.GameDock}>
              <div
                className={`container mx-auto flex flex-wrap flex-row align-middle justify-around w100 ${flexDirection}`}
              >
                <div className="w100 block md:w-50">
                  <Image className="rounded" src={game.coverImage} alt={game.coverImageAlt} width={400} height={400} />
                </div>
                <div className="w100 block md:w-50 flex flex-col p-2 text-center justify-between max-w-lg">
                  <h3 className="text-3xl">{game.name}</h3>
                  <p className="text-lg">{game.description}</p>
                  <div className={classes.GameDockLinks}>
                    <h4 className="text-xl">Play it on!</h4>
                    <div>
                      {game.playLinks.map(({ platform, link }) => (
                        <ButtonPlatform key={platform} platform={platform} link={link} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      );
    })}
  </div>
);
