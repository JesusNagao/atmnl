import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import CalendarPage from './pages/Calendar';
import RankingPage from './pages/Ranking';
import FederationPage from './pages/Federation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'calendario',
        element: <CalendarPage />
      },
      {
        path: 'ranking',
        element: <RankingPage />
      },
      {
        path: 'federacion',
        element: <FederationPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
