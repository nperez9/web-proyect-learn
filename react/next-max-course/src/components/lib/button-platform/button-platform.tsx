import React from 'react';
import { GamePlatform } from '@/types/game';

import classes from './button-platform.module.css';
import Image from 'next/image';
import { platforms } from '../style/platforms';

export interface ButtonPlatformProps {
  platform: GamePlatform;
  link: string;
  target?: string;
}

export const ButtonPlatform: React.FC<ButtonPlatformProps> = ({ link, platform, target = '_blank' }) => {
  return (
    <a
      className={classes.ButtonPlatform}
      href={link}
      target={target}
      style={{ backgroundColor: platforms[platform].color }}
    >
      {/** @ts-ignore */}
      <Image src={platforms[platform].image} alt={platforms[platform].alt} width={72} height={72} />
    </a>
  );
};
