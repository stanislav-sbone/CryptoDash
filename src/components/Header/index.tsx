import { useEffect, useRef, useState, type FC } from 'react';
import Logo from './Logo';
import LanguageDropdown from './LanguageDropdown';
import ThemeButton from './ThemeButton';
import BurgerMenu from './BurgerMenu';
import ApiInfoButton from './ApiInfoButton';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center px-6 2xl:px-24 py-4 sm:py-6 mb-1 sm:mb-2 bg-[#ededed] dark:bg-[#0d1421] ${isScrolled ? 'border-b-2 border-blue-500' : ''}`}
    >
      <Logo />
      <div className="hidden sm:flex sm:gap-4">
        <ApiInfoButton />
        <LanguageDropdown />
        <ThemeButton />
      </div>
      <button
        className="flex flex-col gap-[5px] sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ref={menuToggleRef}
      >
        <span className="w-[25px] h-[3px] rounded-xs bg-blue-500"></span>
        <span className="w-[25px] h-[3px] rounded-xs bg-blue-500"></span>
        <span className="w-[25px] h-[3px] rounded-xs bg-blue-500"></span>
      </button>

      <BurgerMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        menuToggleRef={menuToggleRef}
      />
    </header>
  );
};

export default Header;
