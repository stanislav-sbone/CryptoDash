import type { FC } from 'react';

const ThemeButton: FC = () => {
  return (
    <button className="px-4 py-2 rounded-lg bg-[#193568] hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer font-medium">
      Тема
    </button>
  );
};

export default ThemeButton;
