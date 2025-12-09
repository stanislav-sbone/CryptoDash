import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import type { FC } from 'react';

interface IProps {
  name: string;
  symbol: string;
  image: string;
  market_cap_rank: number;
  price_change_percentage_24h: number;
}

const CoinHeader: FC<IProps> = ({
  name,
  symbol,
  image,
  market_cap_rank,
  price_change_percentage_24h,
}) => {
  const isLowerThanZero = price_change_percentage_24h <= 0;

  return (
    <div className="flex items-center justify-between md:justify-normal md:gap-2 py-4 lg:px-4">
      <div className="px-2 text-[18px] dark:text-[#a1a7bb] border border-[#a1a7bb] rounded-xl bg-gray-600">
        {`#${market_cap_rank}`}
      </div>
      <img src={image} alt={symbol} />
      <h2 className="text-[24px] tracking-wider text-black dark:text-gray-300 font-medium">
        {name}{' '}
        <span className="text-gray-700 dark:text-gray-400 tracking-tight">
          {symbol.toUpperCase()}
        </span>
      </h2>
      <div
        className={`px-2 text-[16px] ${isLowerThanZero ? 'text-red-200 dark:text-red-900 bg-red-500' : 'text-green-900 bg-green-500'} border border-[#a1a7bb] rounded-xl`}
      >
        {isLowerThanZero ? <CaretDownOutlined /> : <CaretUpOutlined />}
        {`${price_change_percentage_24h.toFixed(2)}%`}
      </div>
    </div>
  );
};

export default CoinHeader;
