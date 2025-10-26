import type { FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';

const Header: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const setLang = useLanguageStore((state) => state.setLanguage);

  const handleClick = () => {
    if (language === 'ru') {
      setLang('en');
    } else {
      setLang('ru');
    }
  };

  return (
    <header className="flex justify-between items-center px-24 py-6 mb-2">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src="/logo.png" alt="logo" className="w-16" />
        <h1 className="text-3xl hover:text-blue-500 transition-colors duration-300 ease-in-out">
          CryptoDash
        </h1>
      </div>
      {/* TODO: Реализовать смену темы и языка через Zustand */}
      <div className="flex gap-4">
        <button
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out"
          onClick={handleClick}
        >
          Язык
        </button>
        <button className="cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out">
          Тема
        </button>
      </div>
    </header>
  );
};

export default Header;
