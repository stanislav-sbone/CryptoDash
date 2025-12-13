import type { FC } from 'react';
import { useApiInfoModalStore } from '../../store/useApiInfoModalStore';

const ApiInfoModal: FC = () => {
  const closeApiInfoModal = useApiInfoModalStore(
    (state) => state.closeApiInfoModal
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/70 z-1000 text-black dark:text-gray-300"
      onClick={() => closeApiInfoModal()}
    >
      <div
        className="flex flex-col gap-4 bg-[#c2ceec] dark:bg-[#152b55] border-blue-500 border-2 rounded-xl px-4 py-3 w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between text-3xl">
          <div className="flex items-center gap-4">
            <img src="/assets/alert.png" alt="alert" className="w-12" />
            <h3>Предупреждение</h3>
          </div>
          <button
            className="cursor-pointer hover:text-blue-500 text-4xl"
            onClick={() => closeApiInfoModal()}
          >
            ×
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            В данном проекте используется бесплатный план{' '}
            <span className="font-bold">CoinGecko API</span> для получения
            данных криптовалют. В связи с использованием бесплатного плана{' '}
            <span className="font-bold">
              ограничено количество запросов в минуту к серверу
            </span>{' '}
            для получения этих данных.
          </p>
          <p>
            Поэтому иногда может быть долгая загрузка данных и/или возникать
            ошибка <span className="font-bold">Network Error</span>. Эта ошибка
            возникает, если очень быстро менять криптовалюту для обзора.
          </p>
          <p>
            Также, данные могут долго загружаться или не загрузиться вовсе на
            территории России из-за замедления зарубежных сервисов.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white font-medium rounded-md px-6 py-2 cursor-pointer hover:bg-blue-500/75 transition-all duration-300 ease-in-out"
            onClick={() => closeApiInfoModal()}
          >
            Окей
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiInfoModal;
