import type { FC } from 'react';

interface IProps {
  label: string;
  value: string;
}

const DetailBottom: FC<IProps> = ({ label, value }) => {
  return (
    <div className="max-w-[400px] font-medium text-black bg-[#c6d6ff] dark:bg-[#0d2246] p-4 border-blue-500 dark:border-blue-900 border-2 rounded-xl">
      <h3 className="text-[20px] mb-4 dark:text-gray-300">{label}</h3>
      <p className="dark:text-white">{value}</p>
    </div>
  );
};

export default DetailBottom;
