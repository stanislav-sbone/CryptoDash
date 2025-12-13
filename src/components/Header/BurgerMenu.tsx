import {
  useEffect,
  useRef,
  type Dispatch,
  type FC,
  type SetStateAction,
} from 'react';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';
import { useThemeStore } from '../../store/useThemeStore';
import { useAlertModalStore } from '../../store/useAlertModalStore';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuToggleRef: React.RefObject<HTMLButtonElement | null>;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  menuToggleRef,
}) => {
  const language = useLanguageStore((state) => state.language);
  const theme = useThemeStore((state) => state.theme);
  const setLang = useLanguageStore((state) => state.setLanguage);
  const setTheme = useThemeStore((state) => state.setTheme);
  const openAlertModal = useAlertModalStore((state) => state.openAlertModal);

  const burgerMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnOuterTouch = (event: TouchEvent) => {
      const target = event.target as Node;

      if (burgerMenuRef.current && !burgerMenuRef.current.contains(target)) {
        if (menuToggleRef.current && menuToggleRef.current.contains(target)) {
          return;
        }

        setIsMenuOpen(false);
      }
    };

    document.addEventListener('touchstart', closeOnOuterTouch);
    return () => {
      document.removeEventListener('touchstart', closeOnOuterTouch);
    };
  }, [isMenuOpen, menuToggleRef, setIsMenuOpen]);

  const handleOpenModal = () => {
    openAlertModal();
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute right-3 -bottom-55 z-999
                   bg-[#f3f6fc] dark:bg-[#193568] 
                   border border-[#2a6eee] 
                   rounded-lg animate-[slideLeft_0.2s_ease-out]`}
      ref={burgerMenuRef}
    >
      <h4 className="px-3 py-2 font-bold border-b border-[#2a6eee] text-center text-black dark:text-white">
        {translations[language].langTitle}
      </h4>
      <div className="grid grid-cols-2 border-b border-[#2a6eee]">
        <button
          className={`text-center px-5 py-3 ${language === 'ru' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setLang('ru')}
        >
          Русский
        </button>
        <button
          className={`text-center px-5 py-3 ${language === 'en' ? 'bg-[#c2ceec] dark:bg-[#2a6eee] font-medium' : ''} text-black dark:text-white`}
          onClick={() => setLang('en')}
        >
          English
        </button>
      </div>

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
      <div className="text-center">
        <button
          className={`px-5 py-3 text-center text-black dark:text-white font-medium`}
          onClick={handleOpenModal}
        >
          FAQ
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
