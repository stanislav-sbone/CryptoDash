import type { ReactNode } from 'react';

interface AlertTextItem {
  textId: string;
  text: ReactNode;
}

export const alertText: AlertTextItem[] = [
  {
    textId: 'alert_text_1',
    text: (
      <>
        В данном проекте используется бесплатный план{' '}
        <span className="font-bold">CoinGecko API</span> для получения данных
        криптовалют. В связи с использованием бесплатного плана{' '}
        <span className="font-bold">
          ограничено количество запросов в минуту к серверу
        </span>{' '}
        для получения этих данных.
      </>
    ),
  },
  {
    textId: 'alert_text_2',
    text: (
      <>
        Поэтому иногда может быть долгая загрузка данных и/или возникать ошибка{' '}
        <span className="font-bold">Network Error</span>. Эта ошибка возникает,
        если очень быстро менять криптовалюту для обзора.
      </>
    ),
  },
  {
    textId: 'alert_text_3',
    text: (
      <>
        Также, данные могут долго загружаться или не загрузиться вовсе на
        территории России из-за замедления зарубежных сервисов.
      </>
    ),
  },
];
