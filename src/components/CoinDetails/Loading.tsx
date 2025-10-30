import type { FC } from 'react';
import { Spin } from 'antd';
import { useLanguageStore } from '../../store/useLanguageStore';
import { translations } from '../../locales/translations';

const Loading: FC = () => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full text-black dark:text-gray-300 font-medium text-2xl">
      <Spin size="large" />
      <p>{translations[language].loading}</p>
    </div>
  );
};

export default Loading;
