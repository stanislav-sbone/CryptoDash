/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, type FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import { useCoinStore } from '../../store/useCoinStore';
import { getCoinChart } from '../../services/coingecko';
import { translations } from '../../locales/translations';
import { useLanguageStore } from '../../store/useLanguageStore';
import { useThemeStore } from '../../store/useThemeStore';
import Loading from '../common/Loading';
import Error from '../common/Error';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const CoinChart: FC = () => {
  const containerClass =
    'min-w-[950px] min-h-[500px] bg-[#c6d6ff] dark:bg-[#0d2246] p-4 border-blue-500 dark:border-blue-900 border-2 rounded-xl';
  const theme = useThemeStore((state) => state.theme);
  const coinID = useCoinStore((state) => state.coinID);
  const language = useLanguageStore((state) => state.language);

  const { data, isFetching, isPending, isError, error } = useQuery({
    queryKey: ['coin-chart', coinID],
    queryFn: () => getCoinChart(coinID),
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });

  const chartData = useMemo(
    () => ({
      labels: data?.times ?? [],
      datasets: [
        {
          label: `${coinID.toUpperCase()} Price (7d)`,
          data: data?.prices ?? [],
          borderColor: '#4ade80',
          backgroundColor: '#4ade8025',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
        },
      ],
    }),
    [data, coinID]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      plugins: {
        tooltip: {
          mode: 'index' as const,
          intersect: false,
          callbacks: {
            label: (context: any) => `$${context.parsed.y.toFixed(2)}`,
          },
        },
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: theme === 'dark' ? '#94a3b8' : 'black' },
        },
        y: {
          grid: { color: theme === 'dark' ? 'gray' : 'black' },
          ticks: {
            color: theme === 'dark' ? '#94a3b8' : 'black',
            callback: (value: any) => `$${value}`,
          },
        },
      },
    }),
    [theme]
  );

  if (isPending || isFetching)
    return (
      <div className={`${containerClass} flex justify-center items-center`}>
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div className={`${containerClass} flex justify-center items-center`}>
        <Error message={error.message} />
      </div>
    );

  return (
    <div className="lg:min-w-[950px] lg:min-h-[500px] bg-[#c6d6ff] dark:bg-[#0d2246] p-4 border-blue-500 dark:border-blue-900 border-2 rounded-xl">
      <h3 className="text-[20px] mb-3 text-black dark:text-gray-300 font-medium">
        {translations[language].chart7d}
      </h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CoinChart;
