'use client';

import React from 'react';
import Image from 'next/image';

import {hooks} from '../hooks';
import {Routes} from '../routes';
import {svg} from '../assets/svg';

type Props = {
  user?: boolean;
  title?: string;
  creditCard?: boolean;
  showGoBack?: boolean;
};

export const Header: React.FC<Props> = ({
  showGoBack,
  title,
  creditCard,
  user,
}) => {
  const router = hooks.useRouter();

  const renderGoBack = () => {
    if (!showGoBack) return null;
    return (
      <button
        onClick={() => router.back()}
        style={{left: '0px', padding: '0 20px', position: 'absolute'}}
      >
        <svg.GoBackSvg />
      </button>
    );
  };

  const renderUser = () => {
    if (!user) return null;
    return (
      <button style={{position: 'absolute', left: 0, padding: 20}}>
        <div
          style={{gap: 10}}
          className='row-c clickable'
          // onClick={() => router.push(Routes.PROFILE)}
        >
          <Image
            src={'https://george-fx.github.io/APIs/apitex/assets/users/01.png'}
            alt='User Avatar'
            width={26}
            height={26}
          />
          <span className='t16 main-dark'>Briley Henderson</span>
        </div>
      </button>
    );
  };

  const renderTitle = () => {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <h4 className='main-dark'>{title}</h4>
      </div>
    );
  };

  const renderCreditCard = () => {
    if (!creditCard) return null;
    return (
      <button
        style={{
          position: 'absolute',
          right: 0,
          padding: '0px 20px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 5,
        }}
        // onClick={() => {
        //   router.push(Routes.CardMenu);
        // }}
      >
        <svg.CreditCardSvg />
      </button>
    );
  };

  return (
    <>
      <header
        style={{
          position: 'relative',
          height: 'var(--header-height)',
          backgroundColor: 'var(--main-background)',
        }}
        className='row-c-sb'
      >
        {renderGoBack()}
        {renderUser()}
        {renderTitle()}
        {renderCreditCard()}
      </header>
    </>
  );
};
