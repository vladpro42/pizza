import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom"
import { router } from "./App"
import { oldStore } from './store/main.store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider /* store={store} */ store={oldStore}>
    <RouterProvider router={router} />
  </Provider>
);

