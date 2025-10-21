import type { FC } from 'react';

interface IProps {
  label: string;
  value: string;
}

const DetailBottom: FC<IProps> = ({ label, value }) => {
  console.log(label, value);
  return (
    <div className="max-w-[400px] bg-[#0d2246] p-4 border-blue-900 border-2 rounded-xl transition-colors duration-300 ease-in-out hover:bg-[#1d3d75]">
      <h3 className="text-[20px] mb-4 text-gray-300">{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default DetailBottom;
