import type { FC } from 'react';

const ListLabel: FC = () => {
  return (
    <div className="grid grid-cols-[60px_220px_auto] text-gray-300 mt-1 px-6">
      <p></p>
      <p>Название</p>
      <p className="justify-self-end">за 24 часа</p>
    </div>
  );
};

export default ListLabel;
