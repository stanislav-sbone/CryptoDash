import type { FC } from 'react';
import { useLanguageStore } from '../store/useLanguageStore';
import { translations } from '../locales/translations';

const Error: FC = () => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className="h-1/4 flex items-center justify-center text-red-600 dark:text-red-400 font-semibold text-xl">
      {translations[language].error}
    </div>
  );
};

export default Error;
