import './index.scss';
import './configs/i18n-config.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material';
import themeConfig from './configs/theme-config.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { NuqsAdapter } from 'nuqs/adapters/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={themeConfig}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </NuqsAdapter>
  </StrictMode>,
);
