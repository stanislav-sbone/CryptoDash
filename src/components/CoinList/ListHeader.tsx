import { useState, type FC } from 'react';
import { RedoOutlined, LoadingOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const ListHeader: FC = () => {
  const language = useLanguageStore((state) => state.language);
  const queryClient = useQueryClient();
  const [delay, setDelay] = useState(false);

  const handleClick = () => {
    setDelay(true);
    queryClient.invalidateQueries({ queryKey: ['coins'] });
    setTimeout(() => setDelay(false), 1000);
  };

  return (
    <div className="flex justify-between items-center text-2xl px-5 py-3 pt-4 border-b border-b-blue-500">
      <h2 className="text-gray-300">{translations[language].assets}</h2>
      <button
        className="text-[18px] text-gray-300 cursor-pointer"
        onClick={() => handleClick()}
        disabled={delay}
      >
        {delay ? <LoadingOutlined /> : <RedoOutlined />}
      </button>
    </div>
  );
};

export default ListHeader;
