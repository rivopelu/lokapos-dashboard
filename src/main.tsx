import './index.css';
import './configs/i18n-config.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material';
import themeConfig from './configs/theme-config.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
