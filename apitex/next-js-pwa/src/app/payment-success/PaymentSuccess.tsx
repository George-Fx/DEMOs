'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {Routes} from '../../routes';
import {svg} from '../../assets/svg';
import {components} from '../../components';

export const PaymentSuccess: React.FC = () => {
  const renderHeader = () => {
    return <components.Header showGoBack={true} />;
  };

  return (
    <components.Screen>
      {/* {renderBackground()} */}
      {renderHeader()}
      {/* {renderContent()} */}
    </components.Screen>
  );
};
