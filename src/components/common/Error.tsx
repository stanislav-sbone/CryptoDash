import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

interface IProps {
  message?: string;
}

const Error: FC<IProps> = ({ message }) => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className="h-full flex flex-col items-center justify-center text-red-600 dark:text-red-400 font-semibold text-xl py-15 lg:py-0">
      <p>{translations[language].error}</p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Error;
