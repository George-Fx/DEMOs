'use client';

import React, {useEffect} from 'react';
import {useRouter} from 'next/navigation';

import {Routes} from '../../routes';
import {svg} from '../../assets/svg';
import {components} from '../../components';

export const SignUp: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#fff');
    }

    return () => {
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#040325');
      }
    };
  }, []);

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header />;
  };

  const renderContent = () => {
    return (
      <main className='scrollable container'>
        <section
          style={{
            height: '100%',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* SIGN UP */}
          <h1 style={{marginBottom: '30px'}}>Sign up!</h1>

          {/* INPUT FIELDS */}
          <section>
            <components.InputField
              type='text'
              inputType='username'
              placeholder='Enter your username'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='email'
              inputType='email'
              placeholder='Enter your email'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='password'
              inputType='password'
              placeholder='Enter your password'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              type='password'
              inputType='password'
              placeholder='Confirm your password'
              containerStyle={{marginBottom: '14px'}}
            />
          </section>

          {/* SIGN IN BUTTON */}
          <section style={{marginBottom: '14px'}}>
            <components.Button
              label='Sign up'
              href={''}
            />
          </section>

          {/* REGISTER */}
          <section>
            <p
              className='t16'
              style={{marginBottom: '20px'}}
            >
              Already have an account?{' '}
              <span
                className='clickable'
                style={{color: 'var(--main-color)'}}
                // onClick={() => router.push(Routes.SIGN_IN)}
              >
                Sign in.
              </span>
            </p>
          </section>

          {/* SOCIAL NETWORKS */}
          <section>
            <span
              className='t16'
              style={{display: 'block', marginBottom: '14px'}}
            >
              Log in with social networks
            </span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '10px',
              }}
            >
              <div
                className='flex-center clickable'
                style={{
                  backgroundColor: '#FFD9C3',
                  borderRadius: '8px',
                  height: '40px',
                }}
              >
                <svg.FacebookSvg />
              </div>
              <div
                className='flex-center clickable'
                style={{
                  backgroundColor: '#FFD9C3',
                  borderRadius: '8px',
                  height: '40px',
                }}
              >
                <svg.TwitterSvg />
              </div>
              <div
                className='flex-center clickable'
                style={{
                  backgroundColor: '#FFD9C3',
                  borderRadius: '8px',
                  height: '40px',
                }}
              >
                <svg.GoogleSvg />
              </div>
            </div>
          </section>
        </section>
      </main>
    );
  };

  return (
    <components.Screen>
      {renderBackground()}
      {renderHeader()}
      {renderContent()}
    </components.Screen>
  );
};
