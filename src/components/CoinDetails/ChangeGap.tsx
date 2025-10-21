import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import type { FC } from 'react';

interface IProps {
  label: string;
  value: string;
}

const ChangeGap: FC<IProps> = ({ label, value }) => {
  const isLowerThanZero = value.startsWith('-');

  return (
    <div className="grid grid-cols-[3fr_1fr_2fr] py-2">
      <div>{label}</div>
      <div
        className={`${isLowerThanZero ? 'text-red-600' : 'text-green-600'} justify-self-end mr-1`}
      >
        {isLowerThanZero ? <CaretDownOutlined /> : <CaretUpOutlined />}
      </div>

      <div
        className={`${isLowerThanZero ? 'text-red-600' : 'text-green-600'} justify-self-end`}
      >
        {value}%
      </div>
    </div>
  );
};

export default ChangeGap;
