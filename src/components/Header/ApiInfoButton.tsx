import type { FC } from 'react';
import { useApiInfoModalStore } from '../../store/useApiInfoModalStore';

const ApiInfoButton: FC = () => {
  const openApiInfoModal = useApiInfoModalStore(
    (state) => state.openApiInfoModal
  );

  return (
    <button
      className="flex gap-1 px-4 py-2 rounded-full bg-[#2a6eee] hover:bg-[#193568] dark:bg-[#193568] dark:hover:bg-[#2a6eee] transition-all duration-300 ease-in-out cursor-pointer font-medium"
      onClick={() => openApiInfoModal()}
    >
      ?
    </button>
  );
};

export default ApiInfoButton;
