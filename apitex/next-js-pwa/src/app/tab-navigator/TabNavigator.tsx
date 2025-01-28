'use client';

import React from 'react';

import {hooks} from '../../hooks';
import {AppStore} from '../../store';
import {TabScreens} from '../../routes';
import {components} from '../../components';

// SCREENS
import {Dashboard} from './(screens)/Dashboard';
import {Deposits} from './(screens)/Deposits';
import {Loans} from './(screens)/Loans';
import {More} from './(screens)/More';
import {Notification} from './(screens)/Notification';

export const TabNavigator: React.FC = () => {
  hooks.usePageColors('#fff', '#fff');

  const tabScreen = hooks.useSelector(
    (state: AppStore) => state.tabSlice.screen,
  );

  const renderHeader = () => {
    return (
      <components.Header
        user={renderUser()}
        creditCard={renderCreditCard()}
      />
    );
  };

  const renderScreens = () => {
    return (
      <div style={{display: 'flex', flex: 1}}>
        {tabScreen === 'Dashboard' && <Dashboard />}
        {tabScreen === 'Deposits' && <Deposits />}
        {tabScreen === 'Loans' && <Loans />}
        {tabScreen === 'More' && <More />}
        {tabScreen === 'Notifications' && <Notification />}
      </div>
    );
  };

  const renderBottomTabBar = () => {
    return <components.BottomTabBar />;
  };

  const renderUser = () => {
    switch (tabScreen) {
      case TabScreens.DASHBOARD:
        return true;
      case TabScreens.DEPOSITS:
        return false;
      case TabScreens.LOANS:
        return false;
      case 'More':
        return true;
      case TabScreens.NOTIFICATIONS:
        return false;
      default:
        return false;
    }
  };

  const renderCreditCard = () => {
    switch (tabScreen) {
      case TabScreens.DASHBOARD:
        return true;
      case TabScreens.DEPOSITS:
        return false;
      case TabScreens.LOANS:
        return false;
      case 'More':
        return true;
      case TabScreens.NOTIFICATIONS:
        return false;
      default:
        return false;
    }
  };

  const renderBackground = () => {
    if (tabScreen === TabScreens.NOTIFICATIONS) {
      return <components.Background />;
    }

    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      {renderBackground()}
      {renderHeader()}
      {renderScreens()}
      {renderBottomTabBar()}
    </div>
  );
};
