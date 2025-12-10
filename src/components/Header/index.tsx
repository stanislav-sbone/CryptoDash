import { useRef, useState, type FC } from 'react';
import Logo from './Logo';
import LanguageDropdown from './LanguageDropdown';
import ThemeButton from './ThemeButton';
import BurgerMenu from './BurgerMenu';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);

  return (
    <header className="flex justify-between items-center relative px-6 2xl:px-24 py-4 sm:py-6 mb-1 sm:mb-2">
      <Logo />
      <div className="hidden sm:flex sm:gap-4">
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
