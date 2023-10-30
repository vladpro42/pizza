import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from './store/main.store';
import { BrowserRouter, RouterProvider } from "react-router-dom"
import { router } from "./App"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

