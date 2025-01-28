import {useRouter} from '../hooks/useRouter';
import {usePageColors} from './usePageColors';
import {useDispatch} from '../hooks/useDispatch';
import {useSelector} from '../hooks/useSelector';
import {useGetStatistics} from './useGetStatistics';

import {useGetTransactions} from './useGetTransactions';

export const hooks = {
  useRouter,
  useDispatch,
  useSelector,
  usePageColors,
  useGetStatistics,
  useGetTransactions,
};
