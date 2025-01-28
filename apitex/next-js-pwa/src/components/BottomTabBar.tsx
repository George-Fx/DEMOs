'use client';

import React from 'react';
import {useSelector} from 'react-redux';

import {hooks} from '../hooks';
import {svg} from '../assets/svg';
import {AppStore} from '../store';
import {TabScreens} from '../routes';
import {actions} from '../store/actions';

const tabs = [
  {
    id: 1,
    name: TabScreens.DASHBOARD,
    icon: svg.DashboardTabSvg,
  },
  {
    id: 2,
    name: TabScreens.DEPOSITS,
    icon: svg.DepositTabSvg,
  },
  {
    id: 3,
    name: TabScreens.LOANS,
    icon: svg.LoanTabSvg,
  },
  {
    id: 4,
    name: TabScreens.NOTIFICATIONS,
    icon: svg.NotificationTabSvg,
  },
  {
    id: 5,
    name: TabScreens.MORE,
    icon: svg.MoreTabSvg,
  },
];

export const BottomTabBar: React.FC = () => {
  const tabScreen = useSelector((state: AppStore) => state.tabSlice.screen);
  const dispatch = hooks.useDispatch();

  return (
    <nav style={{padding: 20}}>
      <div
        style={{
          borderRadius: 14,
          backgroundColor: 'var(--main-dark)',
        }}
        className='flex-space-around'
      >
        {tabs.map((tab) => {
          const iconColor =
            tabScreen === tab.name ? 'var(--main-color)' : 'var(--white-color)';
          return (
            <button
              key={tab.id}
              style={{paddingTop: 20, paddingBottom: 20}}
              onClick={() => dispatch(actions.setScreen(tab.name))}
            >
              <tab.icon
                key={tab.id}
                color={iconColor}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
