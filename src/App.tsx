import CoinDetails from './components/CoinDetails';
import CoinList from './components/CoinList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <main className="flex justify-between px-24">
        <CoinList />
        <CoinDetails />
      </main>
    </>
  );
}

export default App;
