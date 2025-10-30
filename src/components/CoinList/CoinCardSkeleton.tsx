import { type FC } from 'react';

const CoinCardSkeleton: FC = () => {
  return (
    <div className="flex items-center gap-5 px-4 py-3 animate-pulse">
      <div className="w-12 h-12 rounded-full bg-gray-600" />

      <div className="flex flex-col space-y-2 w-1/2">
        <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
        <div className="h-4 w-1/2 bg-gray-600 rounded"></div>
      </div>

      <div className="ml-auto h-4 w-12 bg-gray-600 rounded"></div>
    </div>
  );
};

export default CoinCardSkeleton;
