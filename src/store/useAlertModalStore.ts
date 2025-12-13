import { create } from 'zustand';

interface AlertModalStore {
  isAlertModalOpen: boolean;
  openAlertModal: () => void;
  closeAlertModal: () => void;
}

export const useAlertModalStore = create<AlertModalStore>((set) => ({
  isAlertModalOpen: false,

  openAlertModal: () => set({ isAlertModalOpen: true }),
  closeAlertModal: () => set({ isAlertModalOpen: false }),
}));
