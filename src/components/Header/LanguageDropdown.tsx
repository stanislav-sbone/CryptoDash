import { useEffect, useRef, useState, type FC } from 'react';
import { translations } from '../../locales/translations';
import { useLanguageStore } from '../../store/useLanguageStore';

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

const LanguageDropdown: FC = () => {
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
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2a6eee] hover:bg-[#193568] dark:bg-[#193568] dark:hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {/* <span className="text-xl">{currentLanguage?.flag}</span> */}
        <span className="font-medium">{currentLanguage?.name}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-1 w-40 
                   bg-[#f3f6fc] dark:bg-[#193568] 
                   border border-[#2a6eee] 
                   rounded-lg overflow-hidden 
                   animate-[slideDown_0.2s_ease-out]"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 
                        text-black dark:text-white
                        hover:bg-[#c2ceec] dark:hover:bg-[#2a6eee] 
                        transition-colors duration-200
                        ${language === lang.code ? 'bg-[#c2ceec] dark:bg-[#2a6eee]' : 'cursor-pointer'}`}
            >
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-[#2563eb] dark:text-blue-300">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
