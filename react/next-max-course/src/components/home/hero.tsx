import { ImageSlideshow } from '@/components/lib/images-slideshow/images-slideshow';
import styles from './hero.module.css';
import Image from 'next/image';
import { title } from '@/config';

import pockeclon from '@/assets/images/games/pokeclon/pc-4.png';
import rangeon from '@/assets/images/games/rangeon/1.png';
import cannonBlast from '@/assets/images/games/cannon-blast/cover-imag.png';
import greenwild from '@/assets/images/games/greenwild/1.png';

import grayLogo from '@/assets/images/resources/gray-logo.png';

const images = [
  { image: pockeclon, alt: 'pokeclon-1' },
  { image: rangeon, alt: 'rangeon' },
  { image: cannonBlast, alt: 'cannon-blast' },
  { image: greenwild, alt: 'greenwild' },
];

export const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <ImageSlideshow images={images} interval={3000} mode="staticImages" />
      <div className={styles.heroBox}>
        <div className="grid h-full place-items-center">
          <div className={styles.logoContainer}>
            <Image src={grayLogo} alt="gray-logo" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
