import { useEffect, type FC } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const ThemeButton: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  return (
    <button
      className="flex gap-1 px-4 py-2 rounded-lg bg-[#2a6eee] hover:bg-[#193568] dark:bg-[#193568] dark:hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer font-medium"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span>{theme === 'light' ? <SunOutlined /> : <MoonOutlined />}</span>
      <span>{translations[language][theme]}</span>
    </button>
  );
};

export default ThemeButton;
