import type { FC } from 'react';
import { translations } from '../../locales/translations';
import { useLanguageStore } from '../../store/useLanguageStore';

const LanguageSelector: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const setLang = useLanguageStore((state) => state.setLanguage);

  return (
    <>
      <h4 className="px-3 py-2 font-bold border-b border-[#2a6eee] text-center text-black dark:text-white">
        {translations[language].langTitle}
      </h4>
      <div className="grid grid-cols-2 border-b border-[#2a6eee]">
        <button
          className={`text-center px-5 py-3 ${language === 'ru' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setLang('ru')}
        >
          {translations.ru.language}
        </button>
        <button
          className={`text-center px-5 py-3 ${language === 'en' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setLang('en')}
        >
          {translations.en.language}
        </button>
      </div>
    </>
  );
};

export default LanguageSelector;
