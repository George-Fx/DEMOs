import axios from 'axios';
import {useState, useEffect} from 'react';

import {URLS} from '../config';
// import {TransactionType} from '../types';

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getTransactions = async () => {
    console.log('getTransactions called'); // Добавлен вывод в консоль
    setLoading(true);

    try {
      const response = await axios.get(URLS.GET_TRANSACTIONS);
      setTransactions(response.data.transactions);
      console.log('response', response);
    } catch (error) {
      // setError(error.message);
      console.error('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return {loading, transactions};
};
