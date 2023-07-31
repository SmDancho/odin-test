import { FC } from 'react';
import type { Currency } from '../../types/interfaces';
import styles from './style.module.css';
interface props {
  data: Currency[];
}
export const CurrencyTable: FC<props> = ({ data }) => {
  return (
    <table border={1} className={styles.table}>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>symbol</th>
      </tr>

      {data.map((coin, index) => (
        <tr className={`${index < 5? styles.bgBlue : ''} ${coin.symbol ==='usdt'  ? styles.bgGreen : ''}`}>
          <td>{coin.id}</td>
          <td>{coin.name}</td>
          <td>{coin.symbol}</td>
        </tr>
      ))}
    </table>
  );
};
