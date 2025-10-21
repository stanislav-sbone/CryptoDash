import { type FC } from 'react';
import ListHeader from './ListHeader';
import CoinCard from './CoinCard';
import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../../services/coingecko';

const CoinList: FC = () => {
  // TODO: получить isLoading, и isError из хука useQuery для скелетона и вывода ошибки
  const { data: coins = [] } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  return (
    <div
      className="bg-[#152b55] border-blue-500 border-2 rounded-xl max-w-[25%] min-w-[25%] max-h-190 overflow-y-auto"
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <ListHeader />
      {/* TODO: Добавить фильтрацию токенов по имени */}
      {/* TODO: Добавить label для name токена и 24H изменения цены */}
      <div className="flex flex-col max-h-190 overflow-y-auto scrollbar-custom">
        {coins.map((coin) => (
          <CoinCard
            key={coin.id}
            id={coin.id}
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
