import './style/App.css';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import { useEffect } from 'react';

function App() {

  const basketUrl = window.location.href.split("/").at(-1)

  /* 
    if (basketUrl === "basket") {
      return <div className="App">
        <BasketPage />
      </div>
    } */

  return (
    <div className="App">
      <MainPage />
      {basketUrl === 'basket' && <BasketPage />}
    </div>
  );
}

export default App;
