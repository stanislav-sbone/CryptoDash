import { type FC } from 'react';
import Logo from './Logo';
import LanguageDropdown from './LanguageDropdown';
import ThemeButton from './ThemeButton';

const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-24 py-6 mb-2">
      <Logo />
      <div className="flex gap-4">
        <LanguageDropdown />
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
