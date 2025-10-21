import type { FC } from 'react';
import { useCoinStore } from '../../store/useCoinStore';
import CoinChart from './CoinChart';
import CoinHeader from './CoinHeader';
import { useQuery } from '@tanstack/react-query';
import { getCoinDetails } from '../../services/coingecko';
import type { CoinDetail } from '../../types/coin';
import CoinInfo from './CoinInfo';
import DetailBottom from './DetailBottom';
import { formatNumber } from '../../utils/formatNumber';

const CoinDetails: FC = () => {
  const coinID = useCoinStore((state) => state.coinID);

  // TODO: добавить использование isLoading, isFetching и isError
  const { data: coin } = useQuery<CoinDetail>({
    queryKey: ['coinDetails', coinID],
    queryFn: () => getCoinDetails(coinID),
    retry: 3,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });

  const coinData = [
    {
      label: 'Капитализация',
      value: `$${formatNumber(coin?.market_cap || 0)}`,
    },
    {
      label: 'Общее предложение',
      value: `${formatNumber(coin?.total_supply.toFixed(2) || 0)} токенов`,
    },
    {
      label: 'Максимальное предложение',
      value: `${coin?.max_supply === null ? 'Неограничено' : `${formatNumber(coin?.max_supply || 0)} токенов`}`,
    },
    {
      label: 'Максимальная цена за всё время',
      value: `$${formatNumber(coin?.ath || 0)}`,
    },
  ];

  if (!coin) {
    return null;
  }

  return (
    <div className="bg-[#152b55] border-blue-500 border-2 rounded-xl px-4 w-full">
      <CoinHeader
        key={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        image={coin.image}
        market_cap_rank={coin.market_cap_rank}
        price_change_percentage_24h={coin.price_change_percentage_24h}
      />
      <div className="flex gap-4 mb-4">
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
      <div className="grid grid-cols-[200px_260px_350px_400px] gap-3">
        {coinData.map((data) => (
          <DetailBottom label={data.label} value={data.value} />
        ))}
      </div>
    </div>
  );
};

export default CoinDetails;
