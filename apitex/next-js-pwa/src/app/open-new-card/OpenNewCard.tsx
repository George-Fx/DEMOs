'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {Routes} from '../../routes';
import {svg} from '../../assets/svg';
import {components} from '../../components';

export const OpenNewCard: React.FC = () => {
  const renderHeader = () => {
    return (
      <components.Header
        showGoBack={true}
        title='Open new card'
      />
    );
  };

  const renderContent = () => {
    return <main className='scrollable container'>111</main>;
  };

  const renderButton = () => {
    return (
      <section style={{padding: '20px'}}>
        <components.Button
          label='Open new card'
          href={Routes.TAB_NAVIGATOR}
        />
      </section>
    );
  };

  return (
    <components.Screen>
      {renderHeader()}
      {renderContent()}
      {renderButton()}
    </components.Screen>
  );
};
