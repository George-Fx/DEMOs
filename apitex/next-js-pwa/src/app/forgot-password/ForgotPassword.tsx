'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {Routes} from '../../routes';
import {components} from '../../components';

export const ForgotPassword: React.FC = () => {
  const router = hooks.useRouter();

  hooks.usePageColors('#fff', '#fff');

  const renderBackground = () => {
    return <components.Background />;
  };

  const renderHeader = () => {
    return <components.Header title='Forgot password' />;
  };

  const renderContent = () => {
    return (
      <main
        className='scrollable container'
        style={{paddingTop: '20px'}}
      >
        <p
          className='t16'
          style={{marginBottom: '30px'}}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </p>
        <components.InputField
          type='email'
          inputType='email'
          placeholder='Enter your email'
          containerStyle={{marginBottom: '14px'}}
        />
        <components.Button
          label='Send'
          href={Routes.NEW_PASSWORD}
        />
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
