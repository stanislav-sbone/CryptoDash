import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const NotFound: FC = () => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className="flex justify-center items-center h-20 text-gray-300 text-xl">
      {translations[language].notFound}
    </div>
  );
};

export default NotFound;
