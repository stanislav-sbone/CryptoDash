import type { FC } from 'react';
import ChangeGap from './ChangeGap';
import { formatNumber } from '../../utils/formatNumber';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

interface IProps {
  current_price: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  high_24h: number;
  low_24h: number;
}

const CoinInfo: FC<IProps> = ({
  current_price,
  price_change_percentage_24h,
  price_change_percentage_7d,
  price_change_percentage_30d,
  price_change_percentage_60d,
  price_change_percentage_200d,
  price_change_percentage_1y,
  high_24h,
  low_24h,
}) => {
  const language = useLanguageStore((state) => state.language);
  const gapsData = [
    {
      label: translations[language]['24h'],
      value: price_change_percentage_24h.toFixed(2),
    },
    {
      label: translations[language]['7d'],
      value: price_change_percentage_7d.toFixed(2),
    },
    {
      label: translations[language]['30d'],
      value: price_change_percentage_30d.toFixed(2),
    },
    {
      label: translations[language]['60d'],
      value: price_change_percentage_60d.toFixed(2),
    },
    {
      label: translations[language]['200d'],
      value: price_change_percentage_200d.toFixed(2),
    },
    {
      label: translations[language]['1y'],
      value: price_change_percentage_1y.toFixed(2),
    },
  ];

  return (
    <div className="h-[535px] w-full font-medium text-black bg-[#c6d6ff] dark:bg-[#0d2246] p-4 border-blue-500 dark:border-blue-900 border-2 rounded-xl">
      <div>
        <h3 className="text-[20px] mb-2 dark:text-gray-300">
          {translations[language].currentPrice}
        </h3>
        <p className="text-[24px] font-bold mb-2 dark:text-white">
          ${formatNumber(current_price)}
        </p>
      </div>
      <div className="mb-2">
        <h4 className="text-[20px] mb-2 dark:text-gray-300">
          {translations[language].priceChange}
        </h4>
        {gapsData.map((gap) => (
          <ChangeGap key={gap.label} label={gap.label} value={gap.value} />
        ))}
      </div>
      <div className="mb-2">
        <h4 className="text-[16px] mb-2 dark:text-gray-300">
          {translations[language].max24h}
        </h4>
        <p className="dark:text-white">${formatNumber(high_24h)}</p>
      </div>
      <div>
        <h4 className="text-[16px] mb-2 dark:text-gray-300">
          {translations[language].min24h}
        </h4>
        <p className="dark:text-white">${formatNumber(low_24h)}</p>
      </div>
    </div>
  );
};

export default CoinInfo;
