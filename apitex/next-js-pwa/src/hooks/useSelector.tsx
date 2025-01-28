import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import {AppStore} from '../store';

export const useSelector: TypedUseSelectorHook<AppStore> = useReduxSelector;
