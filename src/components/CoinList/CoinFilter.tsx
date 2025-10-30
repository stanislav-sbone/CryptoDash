import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { useRef, type FC } from 'react';
import { useFilterStore } from '../../store/useFilterStore';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const CoinFilter: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="relative px-3 pt-2 pb-1 text-gray-800 dark:text-gray-300">
      <SearchOutlined
        onClick={handleIconClick}
        className="absolute top-6 left-7 text-xl"
      />
      <input
        ref={inputRef}
        className="w-full dark:bg-[#0d2246] px-10 py-3 border-blue-500 dark:border-blue-900 border-2 rounded-3xl focus:outline-none focus:border-blue-500 placeholder:text-gray-800 dark:placeholder:text-gray-400 truncate"
        placeholder={translations[language].searchPlaceholder}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filter.length > 0 && (
        <CloseOutlined
          className="absolute top-6.5 right-8 text-medium cursor-pointer"
          onClick={() => setFilter('')}
        />
      )}
    </div>
  );
};

export default CoinFilter;
