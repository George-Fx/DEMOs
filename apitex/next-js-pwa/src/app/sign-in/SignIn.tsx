'use client';

import {useRouter} from 'next/navigation';
import React, {useState} from 'react';

import {hooks} from '../../hooks';
import {Routes} from '../../routes';
import {svg} from '../../assets/svg';
import {components} from '../../components';

export const SignIn: React.FC = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  hooks.usePageColors('#fff', '#fff');

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
          <h1 style={{marginBottom: '30px'}}>Welcome to Apitex!</h1>

          {/* INPUT FIELDS */}
          <section>
            <components.InputField
              inputType='email'
              placeholder='Enter your email'
              containerStyle={{marginBottom: '10px'}}
            />
            <components.InputField
              inputType='password'
              placeholder='Enter your password'
              containerStyle={{marginBottom: '14px'}}
            />
          </section>

          {/* REMEMBER ME */}
          <section
            className='row-c-sb'
            style={{marginBottom: '14px'}}
          >
            <div
              style={{gap: '10px'}}
              className='row-c clickable'
              onClick={() => setRememberMe(!rememberMe)}
            >
              <div
                className='flex-center'
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid var(--main-color)',
                  backgroundColor: 'var(--white-color)',
                }}
              >
                {rememberMe && <svg.InputCheckSvg />}
              </div>
              <span className='t16'>Remember me</span>
            </div>
            <span
              className='t16 main-color clickable'
              onClick={() => router.push(Routes.FORGOT_PASSWORD)}
            >
              Lost your password?
            </span>
          </section>

          {/* SIGN IN BUTTON */}
          <section style={{marginBottom: '14px'}}>
            <components.Button
              label='Sign In'
              href={Routes.TAB_NAVIGATOR}
            />
          </section>

          {/* REGISTER */}
          <section>
            <p
              className='t16'
              style={{marginBottom: '20px'}}
            >
              No account?{' '}
              <span
                className='clickable'
                style={{color: 'var(--main-color)'}}
                // onClick={Routes.SIGN_IN}
              >
                Register now
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
