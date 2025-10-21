import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoinDetails from './components/CoinDetails';
import CoinList from './components/CoinList';
import Header from './components/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <main className="flex justify-between px-24">
        <CoinList />
        <CoinDetails />
      </main>
    </QueryClientProvider>
  );
}

export default App;
