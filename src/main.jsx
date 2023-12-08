import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
