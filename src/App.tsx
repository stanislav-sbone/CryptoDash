import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoinDetails from './components/CoinDetails';
import CoinList from './components/CoinList';
import Header from './components/Header';
import ApiInfoModal from './components/common/ApiInfoModal';
import { useApiInfoModalStore } from './store/useApiInfoModalStore';

function App() {
  const queryClient = new QueryClient();
  const isModalOpen = useApiInfoModalStore((state) => state.isApiInfoModalOpen);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="flex flex-col lg:flex-row gap-2 lg:gap-5 px-3 2xl:px-24 pb-2 lg:pb-0">
        <CoinList />
        <CoinDetails />
      </main>
      {isModalOpen && <ApiInfoModal />}
    </QueryClientProvider>
  );
}

export default App;
