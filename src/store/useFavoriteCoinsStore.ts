import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ICoin } from '../types/coin';

interface FavoriteCoinsStore {
  favoriteCoins: ICoin[];
  addFavorite: (coin: ICoin) => void;
  removeFavorite: (coinId: string) => void;
}

export const useFavoriteCoinsStore = create<FavoriteCoinsStore>()(
  persist(
    (set) => ({
      favoriteCoins: [],

      addFavorite: (coin) =>
        set((state) => {
          const isAlreadyFavorite = state.favoriteCoins.some(
            (item) => item.id === coin.id
          );

          if (isAlreadyFavorite) {
            return state;
          }

          return {
            favoriteCoins: [...state.favoriteCoins, coin],
          };
        }),

      removeFavorite: (coinId) =>
        set((state) => ({
          favoriteCoins: state.favoriteCoins.filter(
            (coin) => coin.id !== coinId
          ),
        })),
    }),
    {
      name: 'favorite-coins',
    }
  )
);
