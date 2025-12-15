import { useMemo, useState, type FC } from 'react';
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
import { useFavoriteCoinsStore } from '../../store/useFavoriteCoinsStore';

const CoinList: FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites'>('all');
  const containerClasses =
    'bg-[#c2ceec] dark:bg-[#152b55] border-blue-500 border-2 rounded-xl w-full lg:max-w-[25%] lg:min-w-[25%] h-190 2xl:h-[85vh] overflow-y-auto';

  const favoriteCoins = useFavoriteCoinsStore((state) => state.favoriteCoins);
  const hasFavorites = favoriteCoins.length > 0;
  const showEmptyFavorites = activeTab === 'favorites' && !hasFavorites;

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

  const textFilteredCoins = useMemo(
    () =>
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [coins, filter]
  );

  const filteredCoins = useMemo(() => {
    if (activeTab === 'favorites') {
      return textFilteredCoins.filter((coin) =>
        favoriteCoins.some((fav) => fav.id === coin.id)
      );
    }

    return textFilteredCoins;
  }, [textFilteredCoins, favoriteCoins, activeTab]);
  const coinsToRender = filteredCoins;

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
      className={`${containerClasses} flex flex-col`}
      style={{
        msOverflowStyle: 'none' as const,
        scrollbarWidth: 'none' as const,
      }}
    >
      <div className="shrink-0">
        <ListHeader />
        <CoinFilter />
        <div className="flex items-center gap-5 py-2 px-4 border-b-2 border-b-blue-500">
          <button
            className={`text-[20px] font-medium cursor-pointer hover:text-blue-500 ${activeTab === 'all' ? 'text-blue-500 underline underline-offset-2' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
          <button
            className={`text-[20px] font-medium cursor-pointer hover:text-blue-500 ${activeTab === 'favorites' ? 'text-blue-500 underline underline-offset-2' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            Favorites
          </button>
        </div>
        {coinsToRender.length > 0 && <ListLabel />}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-custom">
        <div className="flex flex-col">
          {showEmptyFavorites ? (
            <div>List of favorite coins is empty</div>
          ) : coinsToRender.length > 0 ? (
            coinsToRender.map((coin) => (
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
    </div>
  );
};

export default CoinList;
