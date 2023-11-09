
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import App from './App';
import Watchlist from './components/Watchlist/index'
import axios from 'axios'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




const router = createBrowserRouter(
  
  [
  
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "watchlist/",
    element: <Watchlist ></Watchlist>,
  }, 
  
]);

  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
