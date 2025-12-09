import type { FC } from 'react';
import { useCoinStore } from '../../store/useCoinStore';
import CoinChart from './CoinChart';
import CoinHeader from './CoinHeader';
import { useQuery } from '@tanstack/react-query';
import { getCoinDetails } from '../../services/coingecko';
import type { CoinDetail } from '../../types/coin';
import CoinInfo from './CoinInfo';
import DetailBottom from './DetailBottom';
import Error from '../common/Error';
import Loading from '../common/Loading';
import { useCoinData } from '../../hooks/useCoinData';

const CoinDetails: FC = () => {
  const containerClasses =
    'bg-[#c2ceec] dark:bg-[#152b55] border-blue-500 border-2 rounded-xl px-4 pt-2 w-full lg:min-h-190 2xl:h-[85vh]';
  const coinID = useCoinStore((state) => state.coinID);

  const {
    data: coin,
    isPending,
    isFetching,
    isError,
    error,
  } = useQuery<CoinDetail>({
    queryKey: ['coinDetails', coinID],
    queryFn: () => getCoinDetails(coinID),
    retry: 3,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });

  const coinData = useCoinData(coin);

  if (isError) {
    return (
      <div className={containerClasses}>
        <Error message={error.message} />
      </div>
    );
  }

  if (isPending || isFetching) {
    return (
      <div className={containerClasses}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <CoinHeader
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        image={coin.image}
        market_cap_rank={coin.market_cap_rank}
        price_change_percentage_24h={coin.price_change_percentage_24h}
      />

      <div className="flex flex-col lg:flex-row gap-4 mb-3 lg:mb-4">
        <CoinChart />
        <CoinInfo
          current_price={coin.current_price}
          price_change_percentage_24h={coin.price_change_percentage_24h}
          price_change_percentage_7d={coin.price_change_percentage_7d}
          price_change_percentage_30d={coin.price_change_percentage_30d}
          price_change_percentage_60d={coin.price_change_percentage_60d}
          price_change_percentage_200d={coin.price_change_percentage_200d}
          price_change_percentage_1y={coin.price_change_percentage_1y}
          high_24h={coin.high_24h}
          low_24h={coin.low_24h}
        />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_3fr_3fr] 2xl:grid-cols-4 gap-3 2xl:gap-2 mb-3 lg:mb-0">
        {coinData.map((data) => (
          <DetailBottom
            key={data.label}
            label={data.label}
            value={data.value}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinDetails;
