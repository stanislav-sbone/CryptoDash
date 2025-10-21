import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CoinStore {
  coinID: string;
  setCoinID: (id: string) => void;
}

export const useCoinStore = create<CoinStore>()(
  persist(
    (set) => ({
      coinID: 'bitcoin',

      setCoinID: (id) => set({ coinID: id }),
    }),
    { name: 'selectedCoin' }
  )
);
