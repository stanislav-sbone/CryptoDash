import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const ListLabel: FC = () => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className="grid grid-cols-[60px_1fr_auto] font-medium text-black dark:text-gray-300 mt-1 px-6">
      <p></p>
      <p>{translations[language].name}</p>
      <p className="justify-self-end">{translations[language].change24h}</p>
    </div>
  );
};

export default ListLabel;
