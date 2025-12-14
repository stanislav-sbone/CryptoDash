import type { ReactNode } from 'react';

interface AlertTextItem {
  textId: string;
  text: ReactNode;
}

type Language = 'ru' | 'en';

export const getAlertText = (language: Language): AlertTextItem[] => {
  const texts = {
    ru: [
      {
        textId: 'alert_text_1',
        text: (
          <>
            В данном проекте используется бесплатный план{' '}
            <span className="font-bold">CoinGecko API</span> для получения
            данных криптовалют. В связи с использованием бесплатного плана{' '}
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
            Поэтому иногда может быть долгая загрузка данных и/или возникать
            ошибка <span className="font-bold">Network Error</span>. Эта ошибка
            возникает, если очень быстро менять криптовалюту для обзора.
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
    ],
    en: [
      {
        textId: 'alert_text_1',
        text: (
          <>
            This project uses the free plan of{' '}
            <span className="font-bold">CoinGecko API</span> to fetch
            cryptocurrency data. Due to the free plan usage,{' '}
            <span className="font-bold">
              the number of requests per minute to the server is limited
            </span>{' '}
            for fetching this data.
          </>
        ),
      },
      {
        textId: 'alert_text_2',
        text: (
          <>
            Therefore, there may sometimes be slow data loading and/or a{' '}
            <span className="font-bold">Network Error</span> may occur. This
            error occurs if you change cryptocurrencies for review too quickly.
          </>
        ),
      },
      {
        textId: 'alert_text_3',
        text: (
          <>
            Also, data may take a long time to load or not load at all in Russia
            due to the slowdown of foreign services.
          </>
        ),
      },
    ],
  };

  return texts[language];
};
