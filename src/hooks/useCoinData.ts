import { useLanguageStore } from '../store/useLanguageStore';
import { formatNumber } from '../utils/formatNumber';
import { translations } from '../locales/translations';
import type { CoinDetail } from '../types/coin';

export const useCoinData = (coin: CoinDetail | undefined) => {
  const language = useLanguageStore((state) => state.language);

  if (!coin) return [];

  return [
    {
      label: translations[language].cap,
      value: `$${formatNumber(coin.market_cap)}`,
    },
    {
      label: translations[language].supply,
      value: `${formatNumber(coin.total_supply?.toFixed(2) || 0)} ${translations[language].coins}`,
    },
    {
      label: translations[language].maxSupply,
      value:
        coin.max_supply === null
          ? translations[language].limitless
          : `${formatNumber(coin.max_supply)} ${translations[language].coins}`,
    },
    {
      label: translations[language].ath,
      value: `$${formatNumber(coin.ath)}`,
    },
  ];
};
