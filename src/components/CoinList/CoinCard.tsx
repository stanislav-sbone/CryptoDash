import type { FC } from 'react';
import { useCoinStore } from '../../store/useCoinStore';
import type { ICoin } from '../../types/coin';
import { formatNumber, formatPriceChange } from '../../utils/formatNumber';

const CoinCard: FC<ICoin> = ({
  id,
  image,
  name,
  symbol,
  current_price,
  price_change_24h,
}) => {
  const setCoin = useCoinStore((state) => state.setCoinID);

  return (
    <div
      className="flex items-center gap-5 font-medium px-4 py-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-500 dark:hover:bg-[#27509c]"
      onClick={() => setCoin(id)}
    >
      <img src={image} alt={symbol} className="w-12 h-12" />
      <div>
        <h3 className="text-[16px] tracking-wider text-black dark:text-white">
          <span>{name}</span>
          <span className="text-gray-700 dark:text-gray-400 tracking-tight ml-2">
            {symbol.toUpperCase()}
          </span>
        </h3>
        <p className="text-[16px] font-medium tracking-wider text-black dark:text-white">
          ${formatNumber(current_price.toFixed(2))}
        </p>
      </div>
      <div className="ml-auto">
        <span
          className={price_change_24h > 0 ? 'text-green-600' : 'text-red-600'}
        >
          {price_change_24h > 0 && '+'}
          {formatPriceChange(price_change_24h)}$
        </span>
      </div>
    </div>
  );
};

export default CoinCard;
