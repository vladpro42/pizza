import './style/App.css';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import ErrorPage from './pages/ErrorPage';


export const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<MainPage />} errorElement={<ErrorPage />} />
    <Route path='/basket' element={<BasketPage />} />
  </>

))

