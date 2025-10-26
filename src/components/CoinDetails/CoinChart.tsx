/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const CoinChart: FC = () => {
  const coinID = useCoinStore((state) => state.coinID);
  const language = useLanguageStore((state) => state.language);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['coin-chart', coinID],
    queryFn: () => getCoinChart(coinID),
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading chart...</div>;
  if (isError) return <div>Error loading chart</div>;
  if (!data) return null;

  const chartData = {
    labels: data.times,
    datasets: [
      {
        label: `${coinID.toUpperCase()} Price (7d)`,
        data: data.prices,
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  const options = {
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
        ticks: { color: '#94a3b8' },
      },
      y: {
        grid: { color: '#1e293b' },
        ticks: {
          color: '#94a3b8',
          callback: (value: any) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="min-w-[950px] min-h-[500px] bg-[#0d2246] p-4 border-blue-900 border-2 rounded-xl">
      <h3 className="text-[20px] mb-3 text-gray-300">
        {translations[language].chart7d}
      </h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CoinChart;
