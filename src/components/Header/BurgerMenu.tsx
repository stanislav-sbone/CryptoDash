import {
  useEffect,
  useRef,
  type Dispatch,
  type FC,
  type SetStateAction,
} from 'react';
import { useAlertModalStore } from '../../store/useAlertModalStore';
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';

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
      <LanguageSelector />
      <ThemeSelector />
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
