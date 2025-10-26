import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'ru' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const userLang = navigator.language.startsWith('en') ? 'en' : 'ru';

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: userLang,

      setLanguage: (lang) => set({ language: lang }),
    }),
    { name: 'language' }
  )
);
