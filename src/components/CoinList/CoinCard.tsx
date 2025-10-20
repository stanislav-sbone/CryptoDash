import type { FC } from 'react';

interface IProps {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_24h: number;
}

const CoinCard: FC<IProps> = ({
  image,
  name,
  symbol,
  current_price,
  price_change_24h,
}) => {
  return (
    <div className="flex items-center gap-5 px-4 py-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#27509c]">
      <img src={image} alt={symbol} className="w-12" />
      <div>
        <h3 className="text-[20px] tracking-wider">
          {name}{' '}
          <span className="text-gray-400 tracking-tight">
            {symbol.toUpperCase()}
          </span>
        </h3>
        <p>{current_price.toFixed(2)}$</p>
      </div>
      <div className="ml-auto">
        {price_change_24h > 0 ? (
          <span className="text-green-600">
            +{price_change_24h.toFixed(2)} $
          </span>
        ) : (
          <span className="text-red-600">{price_change_24h} $</span>
        )}
      </div>
    </div>
  );
};

export default CoinCard;
