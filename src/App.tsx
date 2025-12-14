import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CoinDetails from './components/CoinDetails';
import CoinList from './components/CoinList';
import Header from './components/Header';
import { useAlertModalStore } from './store/useAlertModalStore';
import AlertModal from './components/AlertModal';

function App() {
  const queryClient = new QueryClient();
  const isModalOpen = useAlertModalStore((state) => state.isAlertModalOpen);
  const openAlertModal = useAlertModalStore((state) => state.openAlertModal);

  useEffect(() => {
    const hasVisited = localStorage.getItem('firstAppearanceModal');

    if (hasVisited === null) {
      openAlertModal();
      localStorage.setItem('firstAppearanceModal', 'false');
    }
  }, [openAlertModal]);

  useEffect(() => {
    if (isModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isModalOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="flex flex-col lg:flex-row gap-2 lg:gap-5 px-3 2xl:px-24 pb-2 lg:pb-0">
        <CoinList />
        <CoinDetails />
      </main>
      {isModalOpen && <AlertModal />}
    </QueryClientProvider>
  );
}

export default App;
