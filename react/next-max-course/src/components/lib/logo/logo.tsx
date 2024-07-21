import Image from 'next/image';

import logo from '@/assets/images/resources/stone-tower-logo.jpg';

export const Logo = () => {
  return (
    <div className="absolute">
      <Image src={logo} alt="logo" width="200" height="200" />
    </div>
  );
};
