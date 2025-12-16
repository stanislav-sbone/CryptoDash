import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const EmptyFavorites: FC = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="flex justify-center items-center h-20 px-2 md:px-0 pt-4 text-black dark:text-gray-300 text-xl text-center">
      {translations[language].emptyFavorites}
    </div>
  );
};

export default EmptyFavorites;
