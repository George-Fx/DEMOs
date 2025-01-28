'use client';

import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {Routes} from '../routes';
import {components} from '../components';

// type OnboardingItem = {
//   id: number;
//   title1: string;
//   title2: string;
//   image: string;
//   description1: string;
//   description2: string;
// };

// type Props = {
//   onboarding: OnboardingItem[];
// };

// import onboarding1 from '../../public/assets/onboarding/01.png';
// import onboarding2 from '../../public/assets/onboarding/01.png';
// import onboarding3 from '../../public/assets/onboarding/01.png';

const onboarding = [
  {
    id: 1,
    title1: 'Welcome to Apitex',
    title2: 'bank app!',
    // image: onboarding1,
    image: '',
    description1: 'Manage your funds effortlessly.',
    description2: 'Transfer money with ease.',
  },
  {
    id: 2,
    title1: 'Get a new card in a',
    title2: 'few clicks!',
    // image: onboarding2,
    image: '',
    description1: 'Your new card is just minutes away.',
    description2: 'Instant activation, zero hassle.',
  },
  {
    id: 3,
    title1: 'Easy payments all',
    title2: 'over the world!',
    // image: onboarding3,
    image: '',
    description1: 'Global payments at your fingertips.',
    description2: 'Secure transactions, anytime.',
  },
];

const ClientComponent: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = '#040325';
  }, []);

  const renderCarousel = () => {
    return (
      <section
        className='flex-center'
        style={{width: '100%', height: '100%'}}
      >
        <Swiper
          // onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        >
          {onboarding.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{width: '100%', height: 'auto'}}
            >
              <div style={{width: '50%', height: 'auto', margin: '0 auto'}}>
                {/* <Image
                  src={item.image}
                  alt=''
                  layout='responsive'
                  width={100}
                  height={100}
                  priority={true}
                /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };

  const renderDescription = () => {
    const currentItem = onboarding[currentSlideIndex];
    return (
      <section className='container'>
        <h1 style={{color: 'var(--white-color)'}}>{currentItem.title1}</h1>
        <h1 style={{color: 'var(--white-color)'}}>{currentItem.title2}</h1>
        <p
          className='t16'
          style={{marginTop: '14px', color: '#B4B4C6'}}
        >
          {currentItem.description1} <br />
          {currentItem.description2}
        </p>
      </section>
    );
  };

  const renderDots = () => {
    return (
      <section
        className='row-c container'
        style={{gap: '10px', marginTop: '8%', marginBottom: '8%'}}
      >
        {onboarding.map((item, index) => (
          <div
            key={item.id}
            style={{
              width: '20px',
              height: '2px',
              borderRadius: '4px',
              backgroundColor:
                currentSlideIndex === index
                  ? 'var(--white-color)'
                  : `rgba(255, 255, 255, 0.3)`,
            }}
          />
        ))}
      </section>
    );
  };

  const renderButton = () => {
    return (
      <section
        className='container'
        style={{padding: '0 20px 20px 20px'}}
      >
        <components.Button
          label='Get Started'
          containerStyle={{width: '50%'}}
          href={Routes.SIGN_IN}
        />
      </section>
    );
  };

  return (
    <components.Screen containerStyle={{backgroundColor: '#040325'}}>
      {renderCarousel()}
      {renderDescription()}
      {renderDots()}
      {renderButton()}
    </components.Screen>
  );
};

export default ClientComponent;
