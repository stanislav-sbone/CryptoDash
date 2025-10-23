import type { FC } from 'react';
import ChangeGap from './ChangeGap';
import { formatNumber } from '../../utils/formatNumber';

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
  const gapsData = [
    { label: 'за 24 часа', value: price_change_percentage_24h.toFixed(2) },
    { label: 'за 7 дней', value: price_change_percentage_7d.toFixed(2) },
    { label: 'за 30 дней', value: price_change_percentage_30d.toFixed(2) },
    { label: 'за 60 дней', value: price_change_percentage_60d.toFixed(2) },
    { label: 'за 200 дней', value: price_change_percentage_200d.toFixed(2) },
    { label: 'за 1 год', value: price_change_percentage_1y.toFixed(2) },
  ];

  return (
    <div className="h-[535px] w-full bg-[#0d2246] p-4 border-blue-900 border-2 rounded-xl  transition-colors duration-300 ease-in-out hover:bg-[#1d3d75]">
      <div>
        <h3 className="text-[20px] mb-2 text-gray-300">Текущая цена</h3>
        <p className="text-[24px] font-bold mb-2">
          ${formatNumber(current_price)}
        </p>
      </div>
      <div className="mb-2">
        <h4 className="text-[20px] mb-2 text-gray-300">Изменение в цене</h4>
        {gapsData.map((gap) => (
          <ChangeGap key={gap.label} label={gap.label} value={gap.value} />
        ))}
      </div>
      <div className="mb-2">
        <h4 className="text-[16px] mb-2 text-gray-300">
          Максимальная цена за 24 часа
        </h4>
        <p>${formatNumber(high_24h)}</p>
      </div>
      <div>
        <h4 className="text-[16px] mb-2 text-gray-300">
          Минимальная цена за 24 часа
        </h4>
        <p>${formatNumber(low_24h)}</p>
      </div>
    </div>
  );
};

export default CoinInfo;
