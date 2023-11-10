import './style/App.css';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import ErrorPage from './pages/ErrorPage';
import { useEffect } from "react"
import { fetchPizzas } from './modules/Pizza/slice/pizzaSlice';
import { useAppDispatch } from './hooks/hooks';


export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<MainPage />} errorElement={<ErrorPage />} />
    <Route path='/basket' element={<BasketPage />} />
  </>

))

function App() {

  //const error = useRouteError();
  const dispatch: any = useAppDispatch()
  useEffect(() => {
    console.log("fetch")
    dispatch(fetchPizzas())
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;