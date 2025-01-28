import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {tabSlice} from './slices/tabSlice';

const rootReducer = combineReducers({
  tabSlice: tabSlice.reducer,
});

export const store = configureStore({reducer: rootReducer});
export type AppStore = ReturnType<typeof store.getState>;
