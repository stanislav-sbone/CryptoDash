import { create } from 'zustand';

interface FilterStore {
  filter: string;
  setFilter: (text: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  filter: '',

  setFilter: (text) => set({ filter: text }),
}));
