'use client';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from './images-slideshow.module.css';

export interface SlideShowImage {
  image: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export interface ImageSlideshowProps {
  images: SlideShowImage[];
  mode: 'staticImages' | 'fill' | 'definedSize';
  interval?: number;
  defaultWidth?: number;
  defaultHeight?: number;
}

export const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  mode,
  interval = 5000,
  defaultWidth = 1920,
  defaultHeight = 1080,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const strategies = {
    staticImages: (image: SlideShowImage, index: number) => (
      <Image
        key={image.alt}
        src={image.image}
        alt={image.alt}
        className={index === currentImageIndex ? classes.active : ''}
      />
    ),
    fill: (image: SlideShowImage, index: number) => (
      <Image
        key={image.alt}
        src={image.image}
        alt={image.alt}
        layout="fill"
        fill
        className={index === currentImageIndex ? classes.active : ''}
      />
    ),
    definedSize: (image: SlideShowImage, index: number) => (
      <Image
        key={image.alt}
        src={image.image}
        alt={image.alt}
        width={image.width || defaultWidth}
        height={image.height || defaultHeight}
        className={index === currentImageIndex ? classes.active : ''}
      />
    ),
  };

  useEffect(() => {
    const intervalCallback = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, interval);

    return () => clearInterval(intervalCallback);
  }, []);

  return <div className={classes.slideshow}>{images.map((image, index) => strategies[mode](image, index))}</div>;
};

export default ImageSlideshow;
