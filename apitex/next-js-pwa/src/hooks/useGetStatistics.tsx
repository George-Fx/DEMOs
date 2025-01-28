import axios from 'axios';
import {useState, useEffect} from 'react';

import {URLS} from '../config';

export const useGetStatistics = () => {
  const [statistics, setStatistics] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getStatistics = async () => {
    console.log('getStatistics called'); // Добавлен вывод в консоль
    setLoading(true);

    try {
      const response = await axios.get(URLS.GET_STATISTICS);
      setStatistics(response.data.statistics);
      console.log('response', response);
    } catch (error) {
      console.error('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return {loading, statistics};
};
