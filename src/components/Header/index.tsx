import { useState, useRef, useEffect, type FC } from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const LANGUAGES = [
  {
    code: 'ru' as const,
    flag: translations.ru.flag,
    name: translations.ru.language,
  },
  {
    code: 'en' as const,
    flag: translations.en.flag,
    name: translations.en.language,
  },
];

const Header: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const setLang = useLanguageStore((state) => state.setLanguage);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleLanguageSelect = (lang: 'ru' | 'en') => {
    setLang(lang);
    setOpen(false);
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === language);

  return (
    <header className="flex justify-between items-center px-24 py-6 mb-2">
      <div className="flex items-center gap-4 cursor-pointer">
        <img src="/logo.png" alt="logo" className="w-16" />
        <h1 className="text-3xl hover:text-blue-500 transition-colors duration-300 ease-in-out">
          CryptoDash
        </h1>
      </div>

      <div className="flex gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#193568] hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {/* <span className="text-xl">{currentLanguage?.flag}</span> */}
            <span>{currentLanguage?.name}</span>
          </button>

          {open && (
            <div className="absolute right-0 mt-1 w-40 bg-[#193568] rounded-lg border border-[#2a6eee] overflow-hidden animate-[slideDown_0.2s_ease-out]">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2a6eee] transition-colors duration-200 ${
                    language === lang.code ? 'bg-[#2a6eee]' : 'cursor-pointer'
                  }`}
                >
                  {/* <span className="text-2xl">{lang.flag}</span> */}
                  <span>{lang.name}</span>
                  {language === lang.code && (
                    <span className="ml-auto text-blue-300">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="px-4 py-2 rounded-lg bg-[#193568] hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer font-medium">
          Тема
        </button>
      </div>
    </header>
  );
};

export default Header;
