import CoinList from './components/CoinList';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header></Header>
      <main className="px-24">
        <CoinList />
      </main>
    </>
  );
}

export default App;
