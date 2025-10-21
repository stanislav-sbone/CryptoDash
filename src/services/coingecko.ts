import axios from 'axios';
import { URL } from '../constants';
import type { CoinChart, CoinDetail, ICoin } from '../types/coin';

export const getCoins = async () => {
  try {
    const response = await axios.get<ICoin[]>(
      `${URL}/markets?vs_currency=usd&category=layer-1&order=market_cap_desc`
    );

    const coins: ICoin[] =
      response.data.map((coin) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        current_price: coin.current_price,
        price_change_24h: coin.price_change_24h,
      })) || [];

    return coins;
  } catch (error) {
    console.error('Ошибка получения данных: ', error);
    throw error;
  }
};

export const getCoinChart = async (id: string) => {
  try {
    if (!id) throw new Error('Нет ID токена');

    const response = await axios.get(
      `${URL}/${id}/market_chart?vs_currency=usd&days=7`
    );
    const data: CoinChart = response.data;
    const prices = data.prices.map((p) => p[1]);
    const times = data.prices.map((p) =>
      new Date(p[0]).toLocaleDateString('ru-RU', {
        month: 'short',
        day: 'numeric',
      })
    );

    return { prices, times };
  } catch (error) {
    console.error('Ошибка получения данных: ', error);
    throw error;
  }
};

export const getCoinDetails = async (id: string) => {
  try {
    if (!id) throw new Error('Нет ID токена');

    const response = await axios.get(`${URL}/${id}`, {
      params: {
        localization: false,
        tickers: false,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    });
    const data = response.data;

    const coinDetails: CoinDetail = {
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.small,
      current_price: data.market_data.current_price.usd,
      price_change_24h: data.market_data.price_change_24h,
      market_cap_rank: data.market_cap_rank,
      market_cap_change_percentage_24h:
        data.market_data.market_cap_change_percentage_24h,
      market_cap: data.market_data.market_cap.usd,
      high_24h: data.market_data.high_24h.usd,
      low_24h: data.market_data.low_24h.usd,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      price_change_percentage_7d: data.market_data.price_change_percentage_7d,
      price_change_percentage_30d: data.market_data.price_change_percentage_30d,
      price_change_percentage_60d: data.market_data.price_change_percentage_60d,
      price_change_percentage_200d:
        data.market_data.price_change_percentage_200d,
      price_change_percentage_1y: data.market_data.price_change_percentage_1y,
      ath: data.market_data.ath.usd,
      total_supply: data.market_data.total_supply,
      max_supply: data.market_data.max_supply,
    };

    return coinDetails;
  } catch (error) {
    console.error('Ошибка получения данных: ', error);
    throw error;
  }
};
