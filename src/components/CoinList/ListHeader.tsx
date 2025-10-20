import { useState, type FC } from 'react';
import { RedoOutlined, LoadingOutlined } from '@ant-design/icons';

const ListHeader: FC = () => {
  // TODO: интегрировать TanStack и заменить состояние load на состояния из TanStack
  const [load, setLoad] = useState(false);

  const handleClick = () => {
    if (!load) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    }
  };

  return (
    <div className="flex justify-between items-center text-2xl px-5 py-3 pt-4 border-b border-b-blue-500">
      <h2>Активы</h2>
      <button
        className="text-[18px] text-gray-300 cursor-pointer"
        onClick={() => handleClick()}
      >
        {load ? <LoadingOutlined /> : <RedoOutlined />}
      </button>
    </div>
  );
};

export default ListHeader;
