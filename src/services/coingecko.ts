import axios from 'axios';
import { URL } from '../constants';
import type { ICoin } from '../types/coin';

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

// export const getCoinDetails = async (id: string) => {

// }
