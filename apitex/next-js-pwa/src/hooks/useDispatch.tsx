import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {useDispatch as useDispatchRedux} from 'react-redux';

import {AppStore} from '../store';

export const useDispatch = () =>
  useDispatchRedux<ThunkDispatch<AppStore, void, Action>>();
