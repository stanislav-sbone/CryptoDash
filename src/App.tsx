import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoinDetails from './components/CoinDetails';
import CoinList from './components/CoinList';
import Header from './components/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="flex flex-col lg:flex-row gap-5 px-3 2xl:px-24">
        <CoinList />
        <CoinDetails />
      </main>
    </QueryClientProvider>
  );
}

export default App;
