export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_24h: number;
}

export interface CoinChart {
  prices: [number, number][];
}

export interface CoinDetail extends ICoin {
  market_cap_rank: number;
  market_cap_change_percentage_24h: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  ath: number;
  total_supply: number;
  max_supply: number | null;
}
