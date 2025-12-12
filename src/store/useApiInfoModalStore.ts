import { create } from 'zustand';

interface ApiInfoModalStore {
  isApiInfoModalOpen: boolean;
  openApiInfoModal: () => void;
  closeApiInfoModal: () => void;
}

export const useApiInfroModalStore = create<ApiInfoModalStore>((set) => ({
  isApiInfoModalOpen: false,

  openApiInfoModal: () => set({ isApiInfoModalOpen: true }),
  closeApiInfoModal: () => set({ isApiInfoModalOpen: false }),
}));
