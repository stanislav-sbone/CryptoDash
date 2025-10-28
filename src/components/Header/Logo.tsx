import type { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <img src="/logo.png" alt="logo" className="w-16" />
      <h1 className="text-3xl hover:text-blue-500 transition-colors duration-300 ease-in-out">
        CryptoDash
      </h1>
    </div>
  );
};

export default Logo;
