import { type FC } from 'react';
import { MOCK } from '../../data/mock';
import ListHeader from './ListHeader';
import CoinCard from './CoinCard';

const CoinList: FC = () => {
  return (
    <div
      className="bg-[#193568] border-blue-500 border-2 rounded-xl max-w-[25%] max-h-190 overflow-y-auto"
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <ListHeader />
      {/* TODO: Добавить фильтрацию токенов по имени */}
      <div className="flex flex-col">
        {MOCK.map((coin) => (
          <CoinCard
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change_24h={coin.price_change_24h}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
