import type { FC } from 'react';
import { useCoinStore } from '../../store/useCoinStore';

const CoinDetails: FC = () => {
  const coin = useCoinStore((state) => state.coinID);
  console.log('render');
  return <div>{coin}</div>;
};

export default CoinDetails;
