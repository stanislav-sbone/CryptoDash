import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const EmptyFavorites: FC = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="flex justify-center items-center h-20 text-black dark:text-gray-300 text-xl">
      {translations[language].emptyFavorites}
    </div>
  );
};

export default EmptyFavorites;
