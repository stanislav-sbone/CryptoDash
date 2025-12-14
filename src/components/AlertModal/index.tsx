import type { FC } from 'react';
import { useAlertModalStore } from '../../store/useAlertModalStore';
import { alertText } from './alertText';

const AlertModal: FC = () => {
  const closeAlertModal = useAlertModalStore((state) => state.closeAlertModal);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 px-3 flex justify-center items-center bg-black/70 z-1000 text-black dark:text-gray-300"
      onClick={() => closeAlertModal()}
    >
      <div
        className="flex flex-col gap-4 bg-[#c2ceec] dark:bg-[#152b55] border-blue-500 border-2 rounded-xl px-4 py-3 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 animate-[slideDown_0.4s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between text-2xl md:text-3xl">
          <div className="flex items-center gap-4">
            <img src="/assets/alert.png" alt="alert" className="w-10 md:w-12" />
            <h3>Предупреждение</h3>
          </div>
          <button
            className="cursor-pointer hover:text-blue-500 text-3xl md:text-4xl"
            onClick={() => closeAlertModal()}
          >
            ×
          </button>
        </div>
        <div className="flex flex-col gap-2 text-justify">
          {alertText.map(({ textId, text }) => (
            <p key={textId}>{text}</p>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white font-medium rounded-md px-6 py-2 cursor-pointer hover:bg-blue-500/75 transition-all duration-300 ease-in-out"
            onClick={() => closeAlertModal()}
          >
            Окей
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
