import './style/App.css';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';

function App() {

  const basketUrl = window.location.href.split("/").at(-1)

  if (basketUrl === "basket") {
    return <div className="App">
      <BasketPage />
    </div>
  }

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
