import type { FC } from 'react';
import { translations } from '../../locales/translations';
import { useLanguageStore } from '../../store/useLanguageStore';

interface ListTabsProps {
  activeTab: 'all' | 'favorites';
  setActiveTab: (state: 'all' | 'favorites') => void;
}

const ListTabs: FC<ListTabsProps> = ({ activeTab, setActiveTab }) => {
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="flex items-center gap-5 py-2 px-4 border-b-2 border-b-blue-500 text-black dark:text-gray-300">
      <button
        className={`text-[20px] font-medium cursor-pointer hover:text-blue-500 ${activeTab === 'all' ? 'text-blue-500 underline underline-offset-2' : ''}`}
        onClick={() => setActiveTab('all')}
      >
        {translations[language].all}
      </button>
      <button
        className={`text-[20px] font-medium cursor-pointer hover:text-blue-500 ${activeTab === 'favorites' ? 'text-blue-500 underline underline-offset-2' : ''}`}
        onClick={() => setActiveTab('favorites')}
      >
        {translations[language].favorites}
      </button>
    </div>
  );
};

export default ListTabs;
