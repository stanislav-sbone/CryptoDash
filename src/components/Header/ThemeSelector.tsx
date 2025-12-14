import type { FC } from 'react';
import { translations } from '../../locales/translations';
import { useThemeStore } from '../../store/useThemeStore';
import { useLanguageStore } from '../../store/useLanguageStore';

const ThemeSelector: FC = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const language = useLanguageStore((state) => state.language);

  return (
    <>
      <h4 className="px-3 py-2 font-bold border-b border-[#2a6eee] text-center text-black dark:text-white">
        {translations[language].theme}
      </h4>
      <div className="grid grid-cols-2 border-b border-[#2a6eee]">
        <button
          className={`text-center px-5 py-3 ${theme === 'light' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setTheme('light')}
        >
          {translations[language].light}
        </button>
        <button
          className={`text-center px-5 py-3 ${theme === 'dark' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setTheme('dark')}
        >
          {translations[language].dark}
        </button>
      </div>
    </>
  );
};

export default ThemeSelector;
