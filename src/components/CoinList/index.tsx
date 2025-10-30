import { useMemo, type FC } from 'react';
import ListHeader from './ListHeader';
import CoinCard from './CoinCard';
import { useQuery } from '@tanstack/react-query';
import { getCoins } from '../../services/coingecko';
import { useFilterStore } from '../../store/useFilterStore';
import CoinFilter from './CoinFilter';
import NotFound from './NotFound';
import ListLabel from './ListLabel';
import CoinCardSkeleton from './CoinCardSkeleton';
import Error from '../common/Error';

const CoinList: FC = () => {
  const containerClasses =
    'bg-[#c2ceec] dark:bg-[#152b55] border-blue-500 border-2 rounded-xl max-w-[25%] min-w-[25%] max-h-190 min-h-190 overflow-y-auto';

  const filter = useFilterStore((state) => state.filter);
  const {
    data: coins = [],
    isPending,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['coins'],
    queryFn: getCoins,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  const filteredCoins = useMemo(
    () =>
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [coins, filter]
  );

  if (isPending || isFetching) {
    return (
      <div
        className={containerClasses}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <ListHeader />
        <CoinFilter />
        <ListLabel />
        <div className="flex flex-col">
          {[...Array(10)].map((_, i) => (
            <CoinCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={containerClasses}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <ListHeader />
        <Error message={error.message} />
      </div>
    );
  }

  return (
    <div
      className={containerClasses}
      style={{
        msOverflowStyle: 'none' as const,
        scrollbarWidth: 'none' as const,
      }}
    >
      <ListHeader />
      <CoinFilter />
      {filteredCoins.length > 0 && <ListLabel />}

      <div className="flex flex-col max-h-150 overflow-y-auto scrollbar-custom">
        {filteredCoins.length > 0 ? (
          filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              id={coin.id}
              image={coin.image}
              name={coin.name}
              symbol={coin.symbol}
              current_price={coin.current_price}
              price_change_24h={coin.price_change_24h}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default CoinList;
