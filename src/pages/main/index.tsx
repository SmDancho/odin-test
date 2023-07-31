import { AxiosResponse, AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { CurrencyTable } from '../../components/table';
import styles from './styles.module.css';
import type { Currency } from '../../types/interfaces';
import axios from 'axios';

export const Main = () => {
  const [data, setData] = useState<Currency[]>([]);
  const [error, setError] = useState<AxiosError>();
  useEffect(() => {
    axios
      .get<Currency[], AxiosResponse<Currency[]>>(
        `https://crypto-coins-back-production.up.railway.app/coins/getAllCoins`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json; charset=UTF-8',
            "withCredentials": true, 
            crossorigin: true,   
            mode: 'no-cors', 
          },
        }
      )
      .then((response) => setData(response.data))
      .catch((err: AxiosError) => {
        setError(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.error}>
        {error && `${error.message}, too many requests `}
      </div>
      <CurrencyTable data={data} />
    </div>
  );
};
