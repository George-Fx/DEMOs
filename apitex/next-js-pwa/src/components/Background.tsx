import React from 'react';

import imageSrc from '../assets/01.png';

export const Background: React.FC = () => {
  return (
    <img
      src={imageSrc.src}
      alt='SignIn'
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};
