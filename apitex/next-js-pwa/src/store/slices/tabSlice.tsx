import {createSlice} from '@reduxjs/toolkit';

import {TabScreens} from '../../routes';

export type TabStateType = {
  screen: string;
};

const initialState: TabStateType = {
  screen: TabScreens.DASHBOARD,
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export const {setScreen} = tabSlice.actions;
